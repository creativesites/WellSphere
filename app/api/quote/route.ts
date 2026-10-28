import { NextResponse } from 'next/server';
import { clientTypes, services } from '@/lib/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+0-9\s()-]{7,20}$/;
const allowedServices = new Set([...services.map((s) => s.title), 'Not sure yet']);
const allowedClients = new Set<string>(clientTypes);

function field(data: FormData, key: string, max: number): string {
  return String(data.get(key) ?? '').trim().slice(0, max);
}

/**
 * Receives a quotation request and forwards it to QUOTE_WEBHOOK_URL (for example an email or CRM
 * automation). If no webhook is configured the request is refused, so no lead is ever dropped silently.
 */
export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (String(data.get('website') ?? '') !== '') {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const lead = {
    name: field(data, 'name', 120),
    organisation: field(data, 'organisation', 160),
    email: field(data, 'email', 254),
    phone: field(data, 'phone', 20),
    clientType: field(data, 'client_type', 80),
    service: field(data, 'service', 120),
    description: field(data, 'description', 2000),
    quantity: field(data, 'quantity', 200),
    neededBy: field(data, 'needed_by', 20),
    submittedAt: new Date().toISOString(),
  };

  const errors: string[] = [];
  if (lead.name.length < 2) errors.push('name');
  if (!emailPattern.test(lead.email)) errors.push('email');
  if (!phonePattern.test(lead.phone)) errors.push('phone');
  if (lead.description.length < 10) errors.push('description');
  if (!allowedClients.has(lead.clientType)) errors.push('client_type');
  if (!allowedServices.has(lead.service)) errors.push('service');
  if (errors.length > 0) {
    return NextResponse.json({ ok: false, error: 'Validation failed.', fields: errors }, { status: 422 });
  }

  const webhook = process.env.QUOTE_WEBHOOK_URL;
  if (!webhook) {
    console.error('QUOTE_WEBHOOK_URL is not set; quotation request could not be delivered.');
    return NextResponse.json({ ok: false, error: 'Delivery not configured.' }, { status: 503 });
  }

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error('Quotation webhook failed', err instanceof Error ? err.message : err);
    return NextResponse.json({ ok: false, error: 'Delivery failed.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

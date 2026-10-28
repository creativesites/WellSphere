'use client';

import { useId, useState, type FormEvent } from 'react';
import { clientTypes, services } from '@/lib/site';

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'description', string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+0-9\s()-]{7,20}$/;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get('name') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  const phone = String(data.get('phone') ?? '').trim();
  const description = String(data.get('description') ?? '').trim();

  if (name.length < 2) errors.name = 'Please enter your full name.';
  if (!emailPattern.test(email)) errors.email = 'Please enter a valid email address.';
  if (!phonePattern.test(phone)) errors.phone = 'Please enter a phone number we can reach on WhatsApp or by call.';
  if (description.length < 10) errors.description = 'Please describe what you need in a sentence or two.';
  return errors;
}

export function QuoteForm() {
  const uid = useId();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    setServerError(null);
    if (Object.keys(found).length > 0) {
      const first = form.querySelector<HTMLElement>('[aria-invalid="true"]');
      first?.focus();
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/quote', { method: 'POST', body: data });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
      setServerError('We could not send your request just now. Please try again, or WhatsApp us directly.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="success" role="status">
        <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
          <circle cx="28" cy="28" r="26" stroke="#7dc242" strokeWidth="2" />
          <path d="M16 29 L24 37 L40 20" stroke="#7dc242" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="h3" style={{ marginBottom: 8 }}>
          Thank you. Your request is in.
        </h3>
        <p style={{ color: 'var(--text-muted-dark)', margin: 0 }}>We will reply with a quotation shortly.</p>
      </div>
    );
  }

  const invalid = (k: keyof Errors) => (errors[k] ? true : undefined);
  const describedBy = (k: keyof Errors) => (errors[k] ? `${uid}-${k}-err` : undefined);

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor={`${uid}-website`}>Website</label>
        <input id={`${uid}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <label htmlFor={`${uid}-name`}>
          Full name <span className="req" aria-hidden="true">*</span>
        </label>
        <input id={`${uid}-name`} name="name" type="text" autoComplete="name" required aria-invalid={invalid('name')} aria-describedby={describedBy('name')} />
        {errors.name && (
          <p id={`${uid}-name-err`} className="error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor={`${uid}-org`}>Organisation</label>
        <input id={`${uid}-org`} name="organisation" type="text" autoComplete="organization" />
      </div>

      <div className="field">
        <label htmlFor={`${uid}-email`}>
          Email <span className="req" aria-hidden="true">*</span>
        </label>
        <input id={`${uid}-email`} name="email" type="email" autoComplete="email" required aria-invalid={invalid('email')} aria-describedby={describedBy('email')} />
        {errors.email && (
          <p id={`${uid}-email-err`} className="error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor={`${uid}-phone`}>
          Phone or WhatsApp <span className="req" aria-hidden="true">*</span>
        </label>
        <input id={`${uid}-phone`} name="phone" type="tel" autoComplete="tel" required aria-invalid={invalid('phone')} aria-describedby={describedBy('phone')} />
        {errors.phone && (
          <p id={`${uid}-phone-err`} className="error">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor={`${uid}-type`}>Client type</label>
        <select id={`${uid}-type`} name="client_type" defaultValue={clientTypes[0]}>
          {clientTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor={`${uid}-service`}>Service division</label>
        <select id={`${uid}-service`} name="service" defaultValue="Not sure yet">
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div className="field full">
        <label htmlFor={`${uid}-desc`}>
          Describe what you need <span className="req" aria-hidden="true">*</span>
        </label>
        <textarea
          id={`${uid}-desc`}
          name="description"
          required
          placeholder="For example: 50 bags of cement and 20 hard hats for a site in Kabwe, needed by month end."
          aria-invalid={invalid('description')}
          aria-describedby={describedBy('description')}
        />
        {errors.description && (
          <p id={`${uid}-description-err`} className="error">
            {errors.description}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor={`${uid}-qty`}>Quantity or scope</label>
        <input id={`${uid}-qty`} name="quantity" type="text" />
      </div>

      <div className="field">
        <label htmlFor={`${uid}-when`}>Needed by</label>
        <input id={`${uid}-when`} name="needed_by" type="date" />
      </div>

      <div className="form-foot">
        <p>
          By sending this form you agree that WellSphere may contact you about your request. We do not share your details.
        </p>
        <button className="btn btn-gold" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Quotation Request'}
        </button>
      </div>

      {serverError && (
        <p className="error full" role="alert" style={{ gridColumn: '1 / -1' }}>
          {serverError}
        </p>
      )}
    </form>
  );
}

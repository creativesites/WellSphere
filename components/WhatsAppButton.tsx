import { site } from '@/lib/site';

export function WhatsAppButton() {
  return (
    <a className="wa-float" href={site.whatsappUrl} aria-label="Chat with us on WhatsApp" target="_blank" rel="noopener noreferrer">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" />
      </svg>
    </a>
  );
}

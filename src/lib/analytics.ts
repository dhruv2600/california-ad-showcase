import { track } from '@vercel/analytics';

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  track(eventName, properties);
};

export const trackPhoneCall = () => {
  trackEvent('phone_call_clicked', { contact_method: 'phone' });
};

export const trackWhatsApp = () => {
  trackEvent('whatsapp_clicked', { contact_method: 'whatsapp' });
};

export const trackEmail = () => {
  trackEvent('email_clicked', { contact_method: 'email' });
};

export const trackFormSubmission = (service: string) => {
  trackEvent('consultation_form_submitted', { service_type: service });
};

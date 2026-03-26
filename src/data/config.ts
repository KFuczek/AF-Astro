// ─── Company configuration ────────────────────────────────────────────────────
// Edit company facts here — they propagate everywhere in the site.

export const company = {
  name:      'ArchiForce',
  fullName:  'ArchiForce Construction',
  legalName: 'ArchiForce Construction Sp. z o.o.',
  logoBadge: 'AF',
  founded:   1998,

  phone: {
    display: '+48 22 123 45 67',
    href:    'tel:+48221234567',
  },

  email: {
    display: 'info@archiforce.pl',
    href:    'mailto:info@archiforce.pl',
  },

  address: {
    line1:    '48 Industrial Avenue',
    line2:    'Warsaw, 00-001, Poland',
    street:   '48 Industrial Avenue',
    city:     'Warsaw',
    postCode: '00-001',
    country:  'Poland',
  },

  hours: {
    weekdays:      'Monday – Friday: 7:00 AM – 6:00 PM',
    weekdaysShort: 'Mon–Fri: 7:00 AM – 6:00 PM',
    saturday:      'Saturday: 8:00 AM – 2:00 PM',
    responseTime:  'We reply within 24 hours',
  },

  certifications: [
    'ISO 9001:2015 Quality Management',
    'ISO 45001 Occupational Health & Safety',
    'Polish Construction Chamber Member',
    'FIDIC Certified Project Managers',
    'Green Building Certificate (BREEAM)',
  ],
} as const;

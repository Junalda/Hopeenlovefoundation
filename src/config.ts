/**
 * Hope & Love Foundation — central site configuration.
 *
 * Everything here is content the foundation can edit without touching layout.
 *
 * ⚠️  PLACEHOLDERS: values marked `PLACEHOLDER` are NOT yet supplied by the
 * foundation. Replace them with the official information before going live.
 * Nothing here has been invented as fact — placeholders render as clearly
 * marked "to be confirmed" states in the UI.
 */

export const site = {
  name: 'Hope & Love Foundation',
  legalName: 'Stichting Hope & Love Foundation',
  slogan: 'Bringers of hope, carriers of love.',
  url: 'https://hopeandlovefoundation.org',
  description:
    'Hope & Love Foundation helps children discover their identity, build self-worth and experience hope, love and meaningful connection.',
};

/** Online donation — official GoFundMe campaign. */
export const donation = {
  // PLACEHOLDER — replace with the official GoFundMe campaign URL.
  // Flyer campaign: "Missie Curaçao 2026 – Hoop & Liefde in Actie".
  gofundmeUrl: 'https://gofund.me/42303c937',
  bank: {
    accountHolder: 'Stichting Hope & Love Foundation',
    iban: 'NL11 RABO 0175 3000 03',
    bic: 'RABONL2U',
  },
};

/** Contact details. Leave empty to render a "coming soon" state. */
export const contact = {
  email: 'info@hopelovefoundation.nl',
  phone: '+31 6 18 08 49 14', // 0031618084914
  social: {
    instagram: 'https://www.instagram.com/hope_love_foundation',
    facebook: '', // PLACEHOLDER
    linkedin: '', // PLACEHOLDER
  },
};

/** Next mission. Date/location below are taken from the official flyer. */
export const nextMission = {
  title: 'Curaçao 2026',
  eyebrow: 'Our first pilot mission',
  date: 'October 2026', // From the official flyer ("Oktober 2026").
  location: 'Curaçao',
  childrenRange: '60–75 children',
};

/** Leadership — names from the foundation vision document. */
export const founder = {
  name: 'Esther Macnack',
  role: 'Founder & Vision Bearer',
  photo: '/images/founder-1400.jpg',
};

export const board = [
  { name: 'Roxana Stephanie Telgt', role: 'Chair' },
  { name: 'David Anema', role: 'Secretary' },
  { name: 'Bianca Patricia Derveld-Macnack', role: 'Treasurer' },
  { name: 'Conor Peter Oisin Lont', role: 'Board Member' },
];

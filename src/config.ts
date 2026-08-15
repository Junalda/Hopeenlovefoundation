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
  kvk: '42012653', // Dutch Chamber of Commerce (KvK) registration number
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

/**
 * Leadership — names from the foundation vision document.
 * Roles are translated per language in src/i18n/ui.ts (leadership.roles),
 * matched to this list by order.
 */
export const founder = {
  name: 'Esther Macnack',
  photo: '/images/founder-1400.jpg',
};

export const board = [
  { name: 'Roxana Stephanie Telgt', photo: '/images/board-roxana-320.jpg' },
  { name: 'David Anema', photo: '/images/board-david-320.jpg' },
  { name: 'Bianca Patricia Macknack', photo: '/images/board-bianca-320.jpg' },
  { name: 'Conor Peter Oisin Lont', photo: '/images/board-conor-320.jpg' },
];

/** Official registration details (public KvK register). */
export const foundationInfo = {
  legalName: 'Stichting Hope & Love Foundation',
  kvk: '42012653',
  address: 'Beneluxlaan 668, 1363 DA Almere',
};

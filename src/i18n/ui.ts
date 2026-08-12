/**
 * Hope & Love Foundation — bilingual content.
 * Dutch (nl) is the primary language; English (en) is the option.
 *
 * Factual data (bank details, contact, GoFundMe, names) lives in src/config.ts
 * and is language-neutral. Everything a visitor reads lives here.
 */

export const languages = {
  nl: "Nederlands",
  en: "English",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "nl";

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split("/");
  return seg === "en" ? "en" : "nl";
}

/** Prefix a path for the given language (nl = root, en = /en/). */
export function localizedPath(lang: Lang, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === "nl" ? clean : `/en${clean === "/" ? "/" : clean}`;
}

export const ui = {
  nl: {
    meta: {
      title: "Hope & Love Foundation | Hoop en liefde voor kinderen",
      description:
        "Stichting Hope & Love Foundation helpt kinderen hun identiteit ontdekken, eigenwaarde opbouwen en hoop, liefde en betekenisvolle verbondenheid ervaren.",
    },
    nav: {
      mission: "Missie",
      story: "Ons verhaal",
      nextMission: "Volgende missie",
      leadership: "Bestuur",
      donate: "Doneren",
      switchLabel: "English",
      switchShort: "EN",
      home: "Hope & Love Foundation — home",
      openMenu: "Menu openen",
      closeMenu: "Menu sluiten",
    },
    hero: {
      titleHtml:
        'Kinderen helpen ontdekken <span class="hero__accent">wie ze zijn</span>, wat ze waard zijn, en dat ze <span class="hero__accent hero__accent--gold">erbij horen</span>.',
      lead: "Wij bestaan om kinderen hoop te geven, hun identiteit en eigenwaarde te versterken en betekenisvolle verbindingen te creëren tussen kinderen, gezinnen en hun gemeenschappen.",
      donate: "Doneer nu",
      discover: "Ontdek onze missie",
      scroll: "Scroll",
    },
    pillars: {
      kicker: ["Kinderen", "Identiteit", "Hoop", "Liefde"],
      items: [
        { title: "Eigenwaarde", body: "Elk kind leert geloven: “Ik ben waardevol.”" },
        { title: "Identiteit", body: "Kinderen helpen ontdekken wie ze echt zijn." },
        { title: "Verbondenheid", body: "De band tussen kinderen en ouders versterken." },
        { title: "Hoop", body: "Een toekomst om naar uit te kijken, met liefde." },
      ],
    },
    mission: {
      eyebrow: "Onze missie",
      title: "Elk kind verdient het om te weten dat het gezien, gewaardeerd en geliefd is.",
      intro:
        "We richten ons op kinderen die opgroeien in armoede, gebroken gezinnen en moeilijke omstandigheden, en creëren ervaringen waarin elk kind diep van binnen mag voelen:",
      quote: "Ik mag er zijn. Ik ben waardevol. Ik ben geliefd.",
      activities: [
        { title: "Workshops", body: "Identiteit, zelfvertrouwen en durven dromen." },
        { title: "Sport & spel", body: "Spel, samenwerking en het plezier van samen bewegen." },
        { title: "Creativiteit", body: "Kunst, muziek en knutselen waarmee kinderen zichzelf uiten." },
        { title: "Zelfbeeld", body: "Werken aan een gezond, hoopvol zelfbeeld." },
        { title: "Ouder & kind", body: "De gezinsband versterken en herstellen." },
        { title: "Educatie", body: "Leren, nieuwsgierigheid en groei aanmoedigen." },
      ],
    },
    story: {
      eyebrow: "Ons verhaal",
      titleHtml: 'Geboren uit pijn.<br /><span class="hl">Gebouwd op hoop.</span>',
      journey: ["Verlies", "Heling", "Geloof", "Bestemming", "Kinderen", "Hoop"],
      p1: "Na zeven miskramen liep oprichter Esther een lange weg van verdriet en heling. Onderweg ontdekte ze dat moederschap ook kan betekenen: een moederlijke aanwezigheid en een bron van liefde zijn voor andere kinderen.",
      p2: "Ongeveer negen jaar geleden legde God een visie in haar hart: hoop en liefde brengen aan kinderen op de Caribische eilanden, in Suriname en in Nederland. Die visie werd Stichting Hope & Love Foundation.",
      readMore: "Lees Esthers verhaal",
      more1: "Wat begon als persoonlijk verlies werd langzaam een roeping. Esther ontdekte dat de liefde die ze wilde geven zich niet tot één kind hoefde te beperken. Ze kon velen bereiken. Waar pijn was geweest, ontstond een bestemming.",
      more2: "Vandaag is die bestemming een beweging van hoop: kinderen en gezinnen bereiken die zware lasten dragen, en hun door daden laten zien dat ze gezien en gewaardeerd worden en er nooit alleen voor staan.",
      sigRole: "Oprichter, Hope & Love Foundation",
      photoAlt: "Esther Macnack, oprichter van Stichting Hope & Love Foundation",
    },
    faith: {
      eyebrow: "Ons fundament",
      statementHtml:
        'Wij geloven dat elk kind geschapen is met <span>waarde, bestemming en waardigheid</span>, en we willen de liefde van Jezus laten zien in de manier waarop we kinderen en gezinnen dienen.',
      verse:
        "“Zo blijven dan geloof, hoop en liefde, deze drie; maar de meeste van deze is de liefde.”",
      verseRef: "1 Korintiërs 13:13",
    },
    next: {
      eyebrow: "Volgende missie",
      title: "Curaçao 2026",
      pilot: "Onze eerste pilotmissie: een dag die volledig in het teken staat van kinderen.",
      metaDate: "Datum",
      metaLocation: "Locatie",
      metaChildren: "Kinderen",
      date: "Oktober 2026",
      location: "Curaçao",
      children: "60–75 kinderen",
      experience: [
        "Workshops",
        "Creativiteit",
        "Sport & spel",
        "Identiteit",
        "Eigenwaarde",
        "Verbondenheid",
        "Een warme maaltijd",
        "Cadeaus",
        "Feest",
      ],
      support: "Steun deze missie",
      donate: "Doneer nu",
      flyerAlt: "Flyer Hope & Love Foundation — missie Curaçao, oktober 2026",
    },
    donate: {
      eyebrow: "Doneren",
      title: "Help ons een dag te maken die ze nooit vergeten.",
      lead: "Jouw bijdrage helpt ons ervaringen te creëren waarin kinderen zich gezien, gewaardeerd, aangemoedigd en geliefd voelen.",
      option: "Optie",
      onlineTitle: "Doneer online",
      onlineCopy:
        "De snelste manier om te geven. Steun onze campagne veilig via GoFundMe en deel hem met anderen.",
      gofundme: "Doneer via GoFundMe",
      pending: "Campagnelink komt binnenkort. Kom later terug.",
      bankTitle: "Doneer rechtstreeks",
      bankCopy: "Liever een bankoverschrijving? Geef direct aan de stichting met de gegevens hieronder.",
      accountHolder: "Rekeninghouder",
      iban: "IBAN",
      bic: "BIC / SWIFT",
      copy: "Kopiëren",
      copied: "Gekopieerd",
      tbc: "Volgt binnenkort",
      reference: "Vermeld bij je gift a.u.b. ",
      referenceTag: "“Curaçao 2026”",
      referenceEnd: ".",
    },
    support: {
      eyebrow: "Waarom doneren",
      title: "Waar gaat jouw steun naartoe?",
      lead: "Elke gift gaat rechtstreeks naar betekenisvolle ervaringen voor kinderen en praktische hulp voor hun gezinnen.",
      items: [
        { title: "Kinderen & activiteiten", body: "Een dag vol zorg, aandacht en vreugde voor elk kind." },
        { title: "Workshops", body: "Materiaal en ruimte om identiteit en zelfvertrouwen te bouwen." },
        { title: "Sport & creativiteit", body: "Materiaal voor spel, kunst, muziek en beweging." },
        { title: "Maaltijden & zorg", body: "Warme maaltijden en voedselpakketten voor gezinnen in nood." },
        { title: "Cadeaus", body: "Rugzakken, kleine cadeaus en bemoediging om mee naar huis te nemen." },
        { title: "Toekomstige missies", body: "Meer eilanden en meer gezinnen bereiken, jaar na jaar." },
      ],
    },
    leadership: {
      eyebrow: "Bestuur",
      title: "Ontmoet de mensen achter de missie",
      lead: "Een toegewijd bestuur dat Hope & Love Foundation leidt met zorg, integriteit en gedeelde overtuiging.",
      founderTag: "Oprichter",
      founderRole: "Oprichter & visiedrager",
      founderQuote: "“Elk kind verdient het om te weten dat het waardevol en geliefd is en er nooit alleen voor staat.”",
      roles: ["Voorzitter", "Secretaris", "Penningmeester", "Bestuurslid"],
    },
    transparency: {
      eyebrow: "Transparantie",
      title: "Openheid waarop je kunt bouwen",
      lead: "We doen dit met integriteit. Onze stichtingsdocumenten worden afgerond en hier gepubliceerd.",
      view: "Bekijk document",
      inPrep: "In voorbereiding",
      info: {
        name: "Naam",
        kvk: "KvK-nummer",
        legalForm: "Rechtsvorm",
        legalFormValue: "Stichting",
        location: "Vestiging",
      },
      docs: [
        { title: "Beleidsplan", desc: "Onze visie, missie en meerjarenplan." },
        { title: "Jaarverslagen", desc: "Wat we deden en welke impact we maakten." },
        { title: "Financiële informatie", desc: "Hoe middelen binnenkomen en besteed worden." },
        { title: "Stichtingsinformatie", desc: "Rechtsvorm, bestuur en governance." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Laten we samen meer hoop creëren.",
      lead: "Vragen, ideeën voor samenwerking of wil je je inzetten? We horen graag van je.",
      email: "E-mail",
      phone: "Telefoon",
      social: "Social",
      comingSoon: "Volgt binnenkort",
      ctaEmail: "Neem contact op",
      ctaAlt: "Steun de missie",
    },
    final: {
      eyebrow: "Bringers of hope, carriers of love",
      title: "Elk kind verdient hoop.",
      copy: "Help ons plekken te creëren waar kinderen hun waarde ontdekken, hun stem vinden en liefde ervaren.",
      donate: "Doneer nu",
    },
    footer: {
      nav: ["Missie", "Ons verhaal", "Volgende missie", "Bestuur", "Doneren", "Contact"],
      donate: "Doneer nu",
      rights: "Alle rechten voorbehouden.",
      verse: "“De meeste van deze is de liefde.” · 1 Korintiërs 13:13",
    },
  },

  en: {
    meta: {
      title: "Hope & Love Foundation | Creating Hope for Children",
      description:
        "Hope & Love Foundation helps children discover their identity, build self-worth and experience hope, love and meaningful connection.",
    },
    nav: {
      mission: "Mission",
      story: "Our Story",
      nextMission: "Next Mission",
      leadership: "Leadership",
      donate: "Donate",
      switchLabel: "Nederlands",
      switchShort: "NL",
      home: "Hope & Love Foundation — home",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      titleHtml:
        'Helping children discover <span class="hero__accent">who they are</span>, what they are worth, and that they <span class="hero__accent hero__accent--gold">belong</span>.',
      lead: "We exist to give children hope, strengthen identity and self-worth, and create meaningful connections between children, families and their communities.",
      donate: "Donate Now",
      discover: "Discover Our Mission",
      scroll: "Scroll",
    },
    pillars: {
      kicker: ["Children", "Identity", "Hope", "Love"],
      items: [
        { title: "Self-worth", body: "Every child learns to believe: “I am valuable.”" },
        { title: "Identity", body: "Helping children discover who they truly are." },
        { title: "Family connection", body: "Strengthening the bond between children and parents." },
        { title: "Hope", body: "A future worth looking forward to, with love." },
      ],
    },
    mission: {
      eyebrow: "Our Mission",
      title: "Every child deserves to know they are seen, valued and loved.",
      intro:
        "We focus on children growing up in poverty, broken families and difficult circumstances, creating experiences where each child can feel, deep down:",
      quote: "I am allowed to be here. I am valuable. I am loved.",
      activities: [
        { title: "Workshops", body: "Identity, self-confidence and daring to dream." },
        { title: "Sports & games", body: "Play, teamwork and the joy of moving together." },
        { title: "Creativity", body: "Art, music and craft that let children express who they are." },
        { title: "Self-image", body: "Building a healthy, hopeful sense of self." },
        { title: "Parent & child", body: "Strengthening and restoring the family bond." },
        { title: "Education", body: "Encouraging learning, curiosity and growth." },
      ],
    },
    story: {
      eyebrow: "Our Story",
      titleHtml: 'Born from pain.<br /><span class="hl">Built on hope.</span>',
      journey: ["Loss", "Healing", "Faith", "Purpose", "Children", "Hope"],
      p1: "After experiencing seven miscarriages, founder Esther walked a long road of grief and healing. Along the way, she came to understand that motherhood could also mean being a motherly presence, a source of love, for other children.",
      p2: "About nine years ago, she felt God place a vision in her heart: to bring hope and love to children across the Caribbean islands, Suriname and the Netherlands. That vision became Hope & Love Foundation.",
      readMore: "Read Esther’s story",
      more1: "What began as personal loss slowly became a calling. Esther discovered that the love she longed to give did not have to be confined to one child. It could reach many. Where there had been pain, a purpose took root.",
      more2: "Today that purpose is a movement of hope: reaching children and families who carry heavy burdens, and showing them, through action, that they are seen, valued and never alone.",
      sigRole: "Founder, Hope & Love Foundation",
      photoAlt: "Esther Macnack, founder of Hope & Love Foundation",
    },
    faith: {
      eyebrow: "Our Foundation",
      statementHtml:
        'We believe every child is created with <span>value, purpose and dignity</span>, and we seek to show the love of Jesus through the way we serve children and families.',
      verse:
        "“And now these three remain: faith, hope and love. But the greatest of these is love.”",
      verseRef: "1 Corinthians 13:13",
    },
    next: {
      eyebrow: "Next Mission",
      title: "Curaçao 2026",
      pilot: "Our first pilot mission: a day built entirely around children.",
      metaDate: "Date",
      metaLocation: "Location",
      metaChildren: "Children",
      date: "October 2026",
      location: "Curaçao",
      children: "60–75 children",
      experience: [
        "Workshops",
        "Creativity",
        "Sports & games",
        "Identity",
        "Self-worth",
        "Family connection",
        "A warm meal",
        "Gifts",
        "Celebration",
      ],
      support: "Support This Mission",
      donate: "Donate Now",
      flyerAlt: "Hope & Love Foundation mission flyer — Curaçao, October 2026",
    },
    donate: {
      eyebrow: "Donate",
      title: "Help us create a day they will never forget.",
      lead: "Your contribution helps us create experiences where children feel seen, valued, encouraged and loved.",
      option: "Option",
      onlineTitle: "Donate online",
      onlineCopy:
        "The fastest way to give. Support our campaign securely through GoFundMe and share it with others.",
      gofundme: "Donate via GoFundMe",
      pending: "Campaign link coming soon. Check back shortly.",
      bankTitle: "Donate directly",
      bankCopy: "Prefer a bank transfer? Give directly to the foundation using the details below.",
      accountHolder: "Account holder",
      iban: "IBAN",
      bic: "BIC / SWIFT",
      copy: "Copy",
      copied: "Copied",
      tbc: "To be confirmed",
      reference: "Please reference ",
      referenceTag: "“Curaçao 2026”",
      referenceEnd: " with your gift.",
    },
    support: {
      eyebrow: "Why donate",
      title: "Where does your support go?",
      lead: "Every gift goes directly into creating meaningful experiences for children and practical support for their families.",
      items: [
        { title: "Children & activities", body: "A full day of care, attention and joy for every child." },
        { title: "Workshops", body: "Materials and space for identity and confidence building." },
        { title: "Sports & creativity", body: "Equipment for games, art, music and movement." },
        { title: "Meals & care", body: "Warm meals and food packages for families in need." },
        { title: "Gifts", body: "Backpacks, small gifts and encouragement to take home." },
        { title: "Future missions", body: "Reaching more islands, more families, year after year." },
      ],
    },
    leadership: {
      eyebrow: "Leadership",
      title: "Meet the people behind the mission",
      lead: "A dedicated board guiding Hope & Love Foundation with care, integrity and shared conviction.",
      founderTag: "Founder",
      founderRole: "Founder & Vision Bearer",
      founderQuote: "“Every child deserves to know they are valuable, loved and never alone.”",
      roles: ["Chair", "Secretary", "Treasurer", "Board Member"],
    },
    transparency: {
      eyebrow: "Transparency",
      title: "Openness you can trust",
      lead: "We’re committed to doing this with integrity. Our foundation documents are being finalised and will be published here.",
      view: "View document",
      inPrep: "In preparation",
      info: {
        name: "Name",
        kvk: "Chamber of Commerce (KvK)",
        legalForm: "Legal form",
        legalFormValue: "Foundation (Stichting)",
        location: "Registered office",
      },
      docs: [
        { title: "Policy Plan", desc: "Our vision, mission and multi-year plan." },
        { title: "Annual Reports", desc: "What we did and the impact we made." },
        { title: "Financial Information", desc: "How funds are received and spent." },
        { title: "Foundation Information", desc: "Legal name, board and governance." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s create more hope together.",
      lead: "Questions, partnership ideas or want to get involved? We’d love to hear from you.",
      email: "Email",
      phone: "Phone",
      social: "Social",
      comingSoon: "Coming soon",
      ctaEmail: "Get in Touch",
      ctaAlt: "Support the Mission",
    },
    final: {
      eyebrow: "Bringers of hope, carriers of love",
      title: "Every child deserves hope.",
      copy: "Help us create spaces where children can discover their worth, find their voice and experience love.",
      donate: "Donate Now",
    },
    footer: {
      nav: ["Mission", "Our Story", "Next Mission", "Leadership", "Donate", "Contact"],
      donate: "Donate Now",
      rights: "All rights reserved.",
      verse: "“The greatest of these is love.” · 1 Corinthians 13:13",
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return ui[lang] ?? ui[defaultLang];
}

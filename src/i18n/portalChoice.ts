export type PortalLang = 'fr' | 'ar' | 'no' | 'en';

export const portalChoice = {
  fr: {
    overline: 'BIENVENUE CHEZ SYNAPSE',
    title: 'Choisissez votre',
    titleHighlight: 'univers',
    subtitle: "Deux plateformes, une même exigence : simplifier la gestion et libérer du temps pour l'essentiel.",
    education: {
      name: 'Synapse Education',
      tagline: 'Pour les établissements scolaires',
      description: "Gestion académique, administrative et financière, portails dédiés et intelligence artificielle au service de l'école.",
      cta: 'Découvrir Education',
    },
    association: {
      name: 'Synapse Associations',
      tagline: 'Pour les associations et fondations',
      description: "Adhérents, projets, dons et reporting : la gestion associative réunie dans une plateforme moderne.",
      cta: 'Découvrir Associations',
      badge: 'Bientôt disponible',
    },
    footer: 'Une solution ScandiTek — Casablanca & Oslo',
  },
  en: {
    overline: 'WELCOME TO SYNAPSE',
    title: 'Choose your',
    titleHighlight: 'universe',
    subtitle: 'Two platforms, one ambition: simplify management and free up time for what matters.',
    education: {
      name: 'Synapse Education',
      tagline: 'For schools and institutions',
      description: 'Academic, administrative and financial management, dedicated portals and AI built for education.',
      cta: 'Explore Education',
    },
    association: {
      name: 'Synapse Associations',
      tagline: 'For associations and foundations',
      description: 'Members, projects, donations and reporting — association management in one modern platform.',
      cta: 'Explore Associations',
      badge: 'Coming soon',
    },
    footer: 'A ScandiTek solution — Casablanca & Oslo',
  },
  no: {
    overline: 'VELKOMMEN TIL SYNAPSE',
    title: 'Velg ditt',
    titleHighlight: 'univers',
    subtitle: 'To plattformer, én ambisjon: forenkle driften og frigjøre tid til det som betyr noe.',
    education: {
      name: 'Synapse Education',
      tagline: 'For skoler og utdanningsinstitusjoner',
      description: 'Faglig, administrativ og økonomisk styring, egne portaler og kunstig intelligens for skolen.',
      cta: 'Utforsk Education',
    },
    association: {
      name: 'Synapse Assosiations',
      tagline: 'For foreninger og stiftelser',
      description: 'Medlemmer, prosjekter, gaver og rapportering — foreningsdrift samlet i én moderne plattform.',
      cta: 'Utforsk Assosiations',
      badge: 'Kommer snart',
    },
    footer: 'En ScandiTek-løsning — Casablanca og Oslo',
  },
  ar: {
    overline: 'مرحبًا بكم في سينابس',
    title: 'اختر',
    titleHighlight: 'عالمك',
    subtitle: 'منصتان بطموح واحد: تبسيط التسيير وتوفير الوقت لما هو أهم.',
    education: {
      name: 'سينابس للتعليم',
      tagline: 'للمؤسسات التعليمية',
      description: 'التسيير البيداغوجي والإداري والمالي، بوابات مخصصة وذكاء اصطناعي في خدمة المدرسة.',
      cta: 'اكتشف التعليم',
    },
    association: {
      name: 'سينابس للجمعيات',
      tagline: 'للجمعيات والمؤسسات',
      description: 'المنخرطون، المشاريع، التبرعات والتقارير — تسيير الجمعيات في منصة عصرية واحدة.',
      cta: 'اكتشف الجمعيات',
      badge: 'قريبًا',
    },
    footer: 'حل من سكانديتيك — الدار البيضاء وأوسلو',
  },
} as const;

export default portalChoice;

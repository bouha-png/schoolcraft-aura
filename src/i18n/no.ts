const no = {
  dir: 'ltr' as const,
  // Navigation
  nav: {
    platform: 'Plattform',
    modules: 'Moduler',
    ai: 'AI-intelligens',
    pricing: 'Priser',
    contact: 'Kontakt',
    cta: 'Be om en demo',
    openMenu: 'Åpne meny',
    closeMenu: 'Lukk meny',
  },
  // Contact
  contact: {
    title: 'Kontakt oss',
    subtitle: 'Fyll ut skjemaet, så svarer teamet vårt innen 24 timer.',
    name: 'Fullt navn',
    namePlaceholder: 'Ditt navn',
    email: 'E-post',
    emailPlaceholder: 'din@epost.com',
    phone: 'Telefon',
    phonePlaceholder: '+47 XXX XX XXX',
    school: 'Skole/institusjon',
    schoolPlaceholder: 'Navn på din institusjon',
    message: 'Melding',
    messagePlaceholder: 'Hvordan kan vi hjelpe deg?',
    submit: 'Send',
    successTitle: 'Melding sendt!',
    successMessage: 'Teamet vårt tar kontakt med deg så snart som mulig.',
    info: {
      title: 'Kontaktinformasjon',
      email: 'contact@scanditek.com',
      phone: '+212 5XX XXX XXX',
      location: 'Casablanca, Marokko',
    },
  },
  // Hero
  hero: {
    overline: 'SYNAPSE EDUCATION',
    title1: 'Intelligent',
    titleHighlight: 'løsning for skoler.',
    subtitle: 'Den intelligente alt-i-ett-plattformen designet for å dekke hele økosystemet til din utdanningsinstitusjon.',
    cta: 'Be om en demo',
    discover: 'Utforsk plattformen',
    imgAlt: 'Elever som bruker teknologi i et moderne klasserom',
  },
  // Social Proof
  social: {
    metrics: [
      { suffix: '+', label: 'institusjoner' },
      { suffix: '+', label: 'elever' },
      { suffix: '', label: 'univers' },
      { suffix: '', label: 'AI-systemer' },
    ],
  },
  // Platform Overview
  platform: {
    overline: 'DET SOM SKILLER OSS UT',
    title: 'Fire grunner til å velge',
    titleHighlight: 'Synapse.',
    subtitle: 'Mye mer enn skoleprogramvare. Et intelligent utdanningsøkosystem for presis styring av din institusjon.',
    cards: [
      {
        overline: 'KUNSTIG INTELLIGENS',
        title: 'Integrert AI som automatiserer prosessene dine.',
        value: 'Spar timer hver uke.',
        description: 'Generering av pedagogisk innhold, retting, timeplanlegging, personlig veiledning — AI-systemer innebygd i hvert lag av plattformen. Teamet ditt kan fokusere på det viktigste: elevene.',
      },
      {
        overline: 'ALT-I-ETT',
        title: 'Én plattform. Null friksjon.',
        value: 'Fjern isolerte verktøy og skjulte kostnader.',
        description: 'Pedagogikk, økonomi, HR, kommunikasjon, tilleggstjenester — alle moduler i ett samlet økosystem. Slutt på skjøre integrasjoner, datasiloer og stadig økende abonnementer.',
      },
      {
        overline: 'PEDAGOGISK KONTINUITET',
        title: 'Undervisningen stopper aldri.',
        value: 'Beskytt skolegangen uansett hva som skjer.',
        description: 'Hver planlagte økt er klar for fysisk og digital undervisning. Helsekriser, lengre fravær, familiesituasjoner — bytt med ett klikk. Ingen undervisningsdager tapt.',
      },
      {
        overline: 'OPPLÆRING OG KOMPETANSE',
        title: 'Kvalitet begynner med kompetanse.',
        value: 'Lær opp, følg opp, utvikle — kontinuerlig.',
        description: 'Via Min Portal får hver lærer og ansatt tilgang til e-læring, onboarding-moduler og videreutdanning. Ledelsen følger i sanntid hvem som har fullført hva — fordi utdanningskvalitet avhenger av kompetansen til de som leverer den.',
      },
    ],
  },
  // Modules
  modules: {
    overline: 'MODULER',
    title: 'Alt institusjonen din',
    titleHighlight: 'trenger.',
    subtitle: 'Syv univers. Én plattform. Moduler som kan aktiveres etter behov.',
    swipeHint: 'Sveip for å utforske modulene',
    goToModule: 'Gå til modul',
    items: [
      {
        label: 'Pedagogikk',
        title: 'Det pedagogiske hjertet av institusjonen din.',
        description: 'Læreplaner, kurs, vurderinger, individuell pedagogisk oppfølging — drevet av AI.',
        features: ['Læreplaner og nivåer', 'Integrert LMS', 'Personlig AI-veiledning', 'Intelligent timeplan'],
      },
      {
        label: 'Økonomi',
        title: 'Økonomistyring og full transparens.',
        description: 'Fakturering, innbetalinger, budsjettstyring — i sanntid.',
        features: ['Automatisk fakturering', 'Betalinger og purringer', 'Rapportering og prognoser'],
      },
      {
        label: 'HR og lønn',
        title: 'Forenklet personaladministrasjon.',
        description: 'Rekruttering, administrasjon, lønnsbehandling, opplæring.',
        features: ['Personaldatabase', 'Automatisert lønn', 'Biometrisk tidsregistrering', 'Fravær og opplæring'],
      },
      {
        label: 'Kommunikasjon',
        title: 'Smidig kommunikasjon med familiene.',
        description: 'Meldinger, smarte varsler, videokonferanse, kalender — sentralisert.',
        features: ['Chat', 'Integrert videokonferanse', 'Smarte varsler', 'Delt kalender'],
      },
      {
        label: 'Tjenester',
        title: 'Automatiserte tilleggstjenester.',
        description: 'Transport, kantine, fritidsaktiviteter — oppfølging i sanntid.',
        features: ['Transport og GPS', 'Kantine og allergier', 'Fritidsaktiviteter', 'Sikker fildeling'],
      },
      {
        label: 'Portaler',
        title: 'Et dedikert område for hver bruker.',
        description: 'En portal tilpasset hver rolle i institusjonen.',
        features: ['Foreldreportal', 'Elevområde', 'Ansattportal', 'Min Portal'],
      },
      {
        label: 'Administrasjon',
        title: 'Konfigurasjon og styring av plattformen.',
        description: 'Innstillinger, organisasjoner, integrasjoner, datasikkerhet.',
        features: ['Super Admin-konsoll', 'Roller og tilganger', 'API Gateway', 'Flerfaktor-autentisering'],
      },
    ],
  },
  // Portals / Users
  portals: {
    overline: 'TILKOBLET ØKOSYSTEM',
    title: 'Et dedikert område for',
    titleHighlight: 'hver bruker.',
    subtitle: 'Hver bruker får tilgang til sin personlige portal — på web og mobil. Koblet sammen via skolefellesskapet, chat, delte kalendere og gruppesamarbeid.',
    imgAlt: 'Tilkoblet utdanningsøkosystem som viser de ulike brukerne i institusjonen',
    roles: [
      { title: 'Ledelse og eiere', description: 'Strategisk styring, beslutningsdashboard, helhetlig oversikt over institusjonen.', icon: 'crown' },
      { title: 'Lærere', description: 'Klasseledelse, pedagogisk innhold, vurderinger og individuell elevoppfølging.', icon: 'graduationCap' },
      { title: 'Elever', description: 'Kurs, lekser, timeplan, resultater og samarbeidsområde.', icon: 'bookOpen' },
      { title: 'Foreldre', description: 'Oppfølging av skolegangen, kommunikasjon med lærere, betalinger og varsler.', icon: 'heart' },
      { title: 'Administrasjon og sekretariat', description: 'Opptak, innskriving, dokumenthåndtering og mottak.', icon: 'clipboardList' },
      { title: 'HR', description: 'Personaladministrasjon, lønn, fravær, rekruttering og evaluering.', icon: 'users' },
      { title: 'Økonomi og regnskap', description: 'Fakturering, innbetalinger, finansrapportering og budsjettprognoser.', icon: 'wallet' },
      { title: 'Transport og sjåfører', description: 'Ruter, GPS-sporing i sanntid, registrering og elevsikkerhet.', icon: 'bus' },
      { title: 'Driftstjenester', description: 'Kantine, sikkerhet, vedlikehold og bygningsadministrasjon.', icon: 'wrench' },
      { title: 'IT-avdeling', description: 'Konfigurasjon, integrasjoner, datasikkerhet og teknisk administrasjon.', icon: 'server' },
    ],
    features: [
      { title: 'Mobil- og nettapp', description: 'Full tilgang fra alle enheter, overalt, til enhver tid.' },
      { title: 'Skolefellesskap', description: 'Nyhetsstrøm, kunngjøringer og institusjonslivet i sanntid.' },
      { title: 'Chat og meldinger', description: 'Diskusjonskanaler per gruppe, klasse, avdeling eller rolle.' },
      { title: 'Samarbeid', description: 'Delte kalendere, arbeidsgrupper og samarbeidsdokumenter.' },
    ],
  },
  // AI Section
  ai: {
    overline: 'KUNSTIG INTELLIGENS',
    title: 'Integrert AI som jobber',
    titleHighlight: 'for deg.',
    subtitleShort: 'AI-systemer innebygd i hvert lag av Synapse.',
    subtitle: 'AI-systemer innebygd i hvert lag av Synapse.',
    systems: [
      { title: 'Generering av pedagogisk innhold', description: 'Leksjoner, øvelser, vurderinger — generert på minutter.', badge: 'Lærere' },
      { title: 'Personlig AI-veiledning', description: 'Adaptive læringsløp, kalibrerte eksamenssimuleringer.', badge: 'Elever' },
      { title: 'AI-generert timeplan', description: 'Begrensninger og tilgjengelighet — løst på minutter.', badge: 'Administrasjon' },
      { title: "Syn'IA — Assistent", description: 'Kontekstuell assistent integrert i hver modul.', badge: 'Alle' },
      { title: 'Kunnskapsmotor', description: 'Semantisk søk og tilkoblet intelligens.', badge: 'Plattform' },
      { title: 'Økonomi og AI-statistikk', description: 'Prediktiv analyse, intelligente dashboards og automatisert finansrapportering.', badge: 'Økonomi' },
    ],
  },
  // Continuity
  continuity: {
    overline: 'PEDAGOGISK KONTINUITET',
    title: 'Undervisningen',
    titleHighlight: 'stopper aldri.',
    subtitle: 'Langvarig sykdom, familiesituasjon, helsekrise — hybrid undervisning er innebygd i plattformen.',
    imgAlt: 'Elev som følger undervisning på avstand',
    cards: [
      { title: 'Umiddelbar overgang', description: 'Fra fysisk til digital undervisning med ett klikk.' },
      { title: 'Direktesendte timer', description: 'BigBlueButton og Jitsi innebygd.' },
      { title: 'Opptak av økter', description: 'Elevene tar igjen i eget tempo.' },
      { title: 'Koblet til økosystemet', description: 'Digital undervisning er en integrert del av systemet.' },
    ],
  },
  // Adoption
  adoption: {
    overline: 'OPPFØLGING',
    title: 'Implementering er',
    titleHighlight: 'vårt ansvar.',
    subtitle: 'Den viktigste årsaken til feil er ikke programvaren — det er motstand mot endring. Vi leder denne overgangen.',
    imgAlt: 'Team som følger opp utrullingen av Synapse',
    steps: [
      { number: '01', title: 'Strukturert opplæring', description: 'Tilpasset opplæring per rolle. Hver bruker mestrer sine funksjoner fra dag én.' },
      { number: '02', title: 'Endringsledelse', description: 'Sertifiserte fagfolk. Organisatorisk transformasjon, ikke bare teknisk støtte.' },
      { number: '03', title: 'Kontinuerlig optimalisering', description: 'Regelmessige gjennomganger, nye funksjoner, måling av adopsjon og løpende oppfølging.' },
    ],
  },
  // ScandiTek
  scanditek: {
    overline: 'HVEM ER VI',
    title: 'Hvem er',
    titleHighlight: 'ScandiTek.',
    description: 'Over to tiår med ekspertise innen IT, telekom, produktutvikling, endringsledelse og fjernundervisning — fra Norge.',
    quote: '«Skandinavisk presisjon, tilpasset virkeligheten i det private utdanningssektoren i Marokko.»',
    values: [
      { title: 'Sikkerhet', description: 'Databeskyttelse og compliance på skandinavisk nivå.' },
      { title: 'Presisjon', description: 'Hver funksjon løser et spesifikt problem.' },
      { title: 'Tilpasningsevne', description: 'Lokale behov, internasjonal arkitektur.' },
      { title: 'Ansvarlighet', description: 'Vi tar fullt ansvar for resultatet av utrullingen.' },
    ],
  },
  // Pricing
  pricing: {
    overline: 'PRISER',
    title: 'En pris tilpasset',
    titleHighlight: 'din institusjon.',
    subtitle: 'Hver institusjon er unik. Vi analyserer dine behov, størrelse og mål for å bygge det tilbudet som passer deg — uten kompromisser.',
    ctaTitle: 'Be om ditt skreddersydde tilbud',
    ctaDescription: 'Teamet vårt hjelper deg med å definere den ideelle konfigurasjonen — moduler, antall brukere, integrasjoner og oppfølging.',
    ctaButton: 'Kontakt oss',
  },
  // Final CTA
  finalCta: {
    overline: 'KLAR TIL Å STARTE?',
    title: 'Se det',
    titleHighlight: 'selv.',
    subtitle: 'Be om en personlig demonstrasjon. Oppdag hvordan Synapse forenkler styringen av din utdanningsinstitusjon.',
    cta: 'Be om din demonstrasjon',
  },
  // Footer
  footer: {
    tagline: 'Intelligent løsning for skoler av ScandiTek.',
    sections: {
      Produkt: ['Funksjoner', 'Moduler', 'AI-intelligens', 'Priser'],
      Selskap: ['Om oss', 'Kontakt'],
      Ressurser: ['Dokumentasjon', 'Sikkerhet', 'Juridisk'],
    },
    copyright: '© 2026 ScandiTek · Scandinavian Tecknologie · Education · Innovation',
  },
};

export default no;

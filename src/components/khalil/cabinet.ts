/**
 * Informations du Cabinet Dr Khalil — source unique à compléter.
 * Toute valeur `null` est considérée comme NON CONFIRMÉE et n'est pas affichée
 * au public (un encadré « à fournir » apparaît à la place).
 */

import soinSkonnhet from "@/assets/khalil/soin-skonnhetsmedisin.jpg.asset.json";
import soinSkonnhetMobile from "@/assets/khalil/soin-skonnhetsmedisin-mobile.jpg.asset.json";
import soinGenerale from "@/assets/khalil/soin-generale-v9-d.jpg";
import soinGeneraleMobile from "@/assets/khalil/soin-generale-v9-m.jpg";
import soinAcupuncture from "@/assets/khalil/soin-acupuncture-v13-d.jpg";
import soinAcupunctureMobile from "@/assets/khalil/soin-acupuncture-v13-mobile.jpg";
import soinHijama from "@/assets/khalil/soin-hijama-v9-d.jpg";
import soinHijamaMobile from "@/assets/khalil/soin-hijama-v9-mobile.jpg";
import soinNutrition from "@/assets/khalil/soin-nutrition-v4.jpg";
import soinNutritionMobile from "@/assets/khalil/soin-nutrition-v4-mobile.jpg";
import drMohamed from "@/assets/khalil/dr-mohamed-edge.jpg.asset.json";
import drMohamedMobile from "@/assets/khalil/dr-mohamed-edge-mobile.jpg.asset.json";
import drHajar from "@/assets/khalil/dr-hajar-edge.jpg.asset.json";
import drHajarMobile from "@/assets/khalil/dr-hajar-edge-mobile.jpg.asset.json";

/** Photo réelle d'un médecin : petite et grande version, servies selon l'écran. */
export type DoctorPhoto = {
  src: string;
  srcSet: string;
  sizes: string;
  alt: string;
};

export type Doctor = {
  id: string;
  name: string;
  /** Spécialités distinctes, chacune affichée comme une ligne propre. Vide = à préciser. */
  specialties: string[];
  /** Présentation validée par le médecin. */
  bio: string | null;
  /** Photo réelle du médecin. `null` = non fournie. */
  photo: DoctorPhoto | null;
};

export type Motif = {
  id: string;
  label: string;
  durationMin: number;
  /** Nombre de patients pouvant réserver le même créneau. 1 par défaut. */
  capacity: number;
  doctorIds: string[];
};

export const CABINET = {
  name: "Cabinet Dr Khalil",
  city: "Casablanca",
  district: "Maârif",
  address: {
    line1: "Résidence Ribh, porte A, 3e étage",
    line2: "Angle boulevard Bir Anzarane et rue Kaïd Al Achetar",
    line3: "Maârif, Casablanca",
  },
  /** Coordonnées publiées : à vérifier avant lancement. Passer `verified` à true une fois confirmé. */
  phones: [
    { display: "05 22 23 00 09", href: "tel:+212522230009", verified: false },
    { display: "05 22 25 87 56", href: "tel:+212522258756", verified: false },
  ],
  email: { value: "dr.hajarkhalil@gmail.com", verified: false },
  /** Horaires confirmés, ex. [{ days: "Lundi – Vendredi", hours: "09:00 – 18:00" }] */
  hours: null as { days: string; hours: string }[] | null,
  /** Lien d'itinéraire confirmé (Google Maps). */
  mapsUrl: null as string | null,
  /** Lien de réservation Synapse E-Santé réel. Tant qu'il est null, la réservation reste une démonstration. */
  synapseUrl: null as string | null,
  legal: {
    inpe: null as string | null,
    ordre: null as string | null,
    mentions: null as string | null,
  },
};

export const DOCTORS: Doctor[] = [
  {
    id: "mohamed",
    name: "Dr Mohamed Khalil",
    specialties: ["Médecine générale", "Médecine traditionnelle chinoise"],
    bio: null,
    photo: {
      src: drMohamed.url,
      srcSet: `${drMohamedMobile.url} 560w, ${drMohamed.url} 800w`,
      sizes: "(min-width: 640px) 160px, 38vw",
      alt: "Dr Mohamed Khalil, en blouse blanche, photographié sur un fond brun.",
    },
  },
  {
    id: "hajar",
    name: "Dr Hajar Khalil",
    specialties: ["Médecine chinoise", "Médecine esthétique", "Nutrition & diététique"],
    bio: null,
    photo: {
      src: drHajar.url,
      srcSet: `${drHajarMobile.url} 560w, ${drHajar.url} 800w`,
      sizes: "(min-width: 640px) 160px, 38vw",
      alt: "Dr Hajar Khalil, en blouse blanche et foulard, photographiée sur un fond brun.",
    },
  },
];

/** Motifs de rendez-vous : intitulés, durées et capacités à confirmer par le cabinet. */
export const MOTIFS: Motif[] = [
  { id: "consultation", label: "Consultation", durationMin: 30, capacity: 1, doctorIds: ["mohamed", "hajar"] },
  { id: "controle", label: "Consultation de suivi", durationMin: 20, capacity: 1, doctorIds: ["mohamed", "hajar"] },
];

export const phonesConfirmed = () => CABINET.phones.filter((p) => p.verified);

/**
 * Soins présentés sur l'accueil, groupés comme sur Cabinet Aura
 * (catégorie → cartes avec description, durée/tarif et bouton « Réserver »).
 * Tant qu'un champ est null, la carte affiche « à compléter ». Ne rien inventer.
 */
export type Soin = {
  id: string;
  category: string | null;
  title: string | null;
  description: string | null;
  durationMin: number | null;
  price: string | null;
  /** Motif de rendez-vous associé (MOTIFS) pour pré-remplir la réservation. */
  motifId: string;
};

export type SoinGroup = {
  heading: string | null;
  /** Texte de présentation affiché sous le bandeau, dépliable (« Lire la suite »). */
  intro?: string;
  about: string | null;
  /** Illustration de catégorie. `null` = aucune image tant qu'elle n'est pas fournie. */
  /** `pos` règle le plan de coupe du bandeau (mobile / desktop) quand le cadrage par défaut ne suffit pas. */
  image: { src: string; srcSet: string; sizes: string; alt: string; mobileSrc?: string; pos?: { m?: string; d?: string } } | null;
  soins: Soin[];
};

export const SOIN_GROUPS: SoinGroup[] = [
  {
    heading: "Médecine générale",
    intro: "Consultations, prévention et suivi médical au quotidien.",
    about: "La consultation de médecine générale permet de faire le point sur votre santé, d’évaluer vos symptômes et d’assurer votre suivi. Elle comprend un entretien et un examen clinique adapté à votre situation.\n\nSelon vos besoins, le médecin peut vous proposer des conseils, prescrire un traitement ou des examens complémentaires, et vous orienter vers un spécialiste si nécessaire.",
    image: {
      src: soinGenerale,
      mobileSrc: soinGeneraleMobile,
      pos: { m: "50% 92%" },
      srcSet: `${soinGeneraleMobile} 928w, ${soinGenerale} 1376w`,
      sizes: "100vw",
      alt: "Consultation de médecine générale : gros plan sur la prise de tension artérielle — manchon gris sur le bras d'une patiente marocaine en pull crème, stéthoscope placé dans le pli du coude, main du médecin en blouse blanche, sur un mur crème peint d'une branche fleurie en lumière dorée, aucun visage visible.",
    },
    soins: [
      { id: "mg-1", category: "Médecine générale", title: "Consultation générale", description: null, durationMin: null, price: null, motifId: "consultation" },
      { id: "mg-2", category: "Médecine générale", title: "Consultation de suivi", description: null, durationMin: null, price: null, motifId: "controle" },
    ],
  },
  {
    heading: "Acupuncture & médecine chinoise",
    intro: "Une approche complémentaire, proposée en fonction de vos besoins et de votre situation médicale.",
    about: "Issue de la médecine traditionnelle chinoise, l’acupuncture consiste à stimuler des points précis du corps à l’aide de fines aiguilles. Elle peut être envisagée dans certaines indications, en complément d’une prise en charge médicale.\n\nLa première consultation permet d’évaluer vos symptômes, vos antécédents et les traitements en cours. Le médecin détermine avec vous l’intérêt de cette approche et les modalités des séances. L’acupuncture ne se substitue pas aux traitements médicaux nécessaires.",
    image: {
      src: soinAcupuncture,
      mobileSrc: soinAcupunctureMobile,
      srcSet: `${soinAcupunctureMobile} 928w, ${soinAcupuncture} 1376w`,
      sizes: "100vw",
      alt: "Séance d'acupuncture : aiguilles fines en net sur le dos d'une patiente allongée, serviette crème, paravent en bois miel doux en arrière-plan, lumière chaude et lumineuse, sans praticien visible.",
    },
    soins: [
      { id: "ac-1", category: "Acupuncture & médecine chinoise", title: "Première consultation", description: null, durationMin: null, price: null, motifId: "consultation" },
      { id: "ac-2", category: "Acupuncture & médecine chinoise", title: "Séance d'acupuncture", description: null, durationMin: null, price: null, motifId: "consultation" },
      { id: "ac-3", category: "Acupuncture & médecine chinoise", title: "Séance de suivi", description: null, durationMin: null, price: null, motifId: "controle" },
    ],
  },
  {
    heading: "Hijama – thérapie par ventouses",
    intro: "Une technique traditionnelle par ventouses, précédée d’une évaluation médicale.",
    about: "La thérapie par ventouses consiste à appliquer des cupules sur la peau afin de créer une aspiration localisée. Une consultation préalable permet de rechercher d’éventuelles contre-indications et de préciser les précautions à prendre.\n\nLa méthode utilisée, le déroulement de la séance et les effets indésirables possibles, notamment les marques cutanées, vous sont expliqués avant le soin. Les données scientifiques sur l’efficacité de cette pratique restent limitées. Elle ne remplace pas les soins médicaux nécessaires.",
    image: {
      src: soinHijama,
      mobileSrc: soinHijamaMobile,
      pos: { m: "50% 72%" },
      srcSet: `${soinHijamaMobile} 760w, ${soinHijama} 1376w`,
      sizes: "100vw",
      alt: "Séance de hijama : gros plan sur les ventouses en verre posées sur le dos d’un patient, serviette crème, lumière chaude.",
    },
    soins: [
      { id: "hj-1", category: "Hijama – thérapie par ventouses", title: "Première consultation", description: null, durationMin: null, price: null, motifId: "consultation" },
      { id: "hj-2", category: "Hijama – thérapie par ventouses", title: "Séance de ventouses", description: null, durationMin: null, price: null, motifId: "consultation" },
    ],
  },
  {
    heading: "Médecine esthétique",
    intro: "Une consultation personnalisée pour évaluer votre peau et envisager les soins adaptés à vos attentes.",
    about: "La consultation de médecine esthétique est un temps d’échange consacré à vos attentes et à l’évaluation de votre peau. Le médecin prend en compte vos antécédents, vos traitements et les éventuelles contre-indications avant d’envisager un soin.\n\nLes options possibles vous sont présentées, ainsi que les résultats attendus, leurs limites, les risques et les suites à prévoir. Cette information vous permet de prendre une décision éclairée, avant tout acte.",
    image: {
      src: soinSkonnhet.url,
      srcSet: `${soinSkonnhetMobile.url} 560w, ${soinSkonnhet.url} 1000w`,
      sizes: "100vw",
      alt: "Patiente installée dans le fauteuil de consultation, le praticien examine son visage, branche fleurie peinte au plafond.",
    },
    soins: [
      { id: "me-1", category: "Médecine esthétique", title: "Consultation esthétique", description: null, durationMin: null, price: null, motifId: "consultation" },
      { id: "me-2", category: "Médecine esthétique", title: "Soins esthétiques personnalisés", description: null, durationMin: null, price: null, motifId: "consultation" },
      { id: "me-3", category: "Médecine esthétique", title: "Consultation de suivi", description: null, durationMin: null, price: null, motifId: "controle" },
    ],
  },
  {
    heading: "Nutrition & diététique",
    intro: "Un accompagnement nutritionnel adapté à votre santé, à vos habitudes et à votre mode de vie.",
    about: "La première consultation permet de faire le point sur vos habitudes alimentaires, vos besoins et vos objectifs. Les conseils sont personnalisés en tenant compte de votre état de santé, de vos préférences et de vos contraintes quotidiennes.\n\nLes consultations de suivi permettent d’évaluer les changements mis en place, d’aborder les difficultés rencontrées et d’ajuster les recommandations. L’accompagnement s’inscrit dans une démarche progressive, avec des objectifs réalistes définis avec vous.",
    image: {
      src: soinNutrition,
      srcSet: `${soinNutritionMobile} 800w, ${soinNutrition} 1600w`,
      pos: { d: "50% 22%" },
      sizes: "100vw",
      alt: "Consultation de nutrition : une nutritionniste en blouse blanche présente un plan alimentaire sur un presse-papiers, brochures sur l’alimentation sur la table en bois miel, paravent en cannage en arrière-plan, sans visage visible.",
    },
    soins: [
      { id: "nu-1", category: "Nutrition & diététique", title: "Consultation nutritionnelle", description: null, durationMin: null, price: null, motifId: "consultation" },
      { id: "nu-2", category: "Nutrition & diététique", title: "Suivi nutritionnel", description: null, durationMin: null, price: null, motifId: "controle" },
    ],
  },
];

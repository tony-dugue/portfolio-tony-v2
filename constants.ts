export const METADATA = {
  title: "Portfolio | Tony Dugué",
  description: "Mon portfolio",
  siteUrl: "https://tonydugue.fr/",
}

export const NAVLINKS = [
  {
    name: 'Accueil',
    ref: 'accueil'
  },
  {
    name: 'Projets',
    ref: 'projets'
  },
  {
    name: 'Compétences',
    ref: 'competences'
  },
  {
    name: 'Parcours',
    ref: 'parcours'
  },
  {
    name: 'Contact',
    ref: 'contact'
  }
]

export const TITLE_HERO = 'Tony Dugué'

export const EMAIL = 'hello@tonydugue.fr'

export const SOCIAL_LINKS = [
  { name: 'linkedin', url: '#'},
  { name: 'github', url: 'https://github.com/tony-dugue'},
  { name: 'instagram', url: 'https://www.instagram.com/tony_dugue/'},
  { name: 'facebook', url: 'https://www.facebook.com/tony.dugue'},
  { name: 'mail', url: 'mailto:hello@duguetony.fr'}
]

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: string[];
  url: string;
  techs: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: 'Firmain',
    image: '/images/projects/firmain.png',
    blurImage: '/images/projects/firmain-blur.png',
    description: 'Plateforme numérique pour gérer avec simplicité les process RH de gestion des formations internes ou externes et des compétences',
    gradient: ['#172839', '#334659'],
    url: 'https://app.escaledescompetences.fr/',
    techs: ['react', 'sass', 'redux', 'symfony']
  },
  {
    name: 'MotooPlanner',
    image: '/images/projects/motooplanner.png',
    blurImage: '/images/projects/motooplanner-blur.png',
    description: 'Application web pour faciliter la planification de road trip en moto en groupe',
    gradient: ['#00765F', '#238975'],
    url: 'https://motooplanner.tonydugue.fr/',
    techs: ['react', 'redux', 'sass', 'symfony']
  },
  {
    name: 'Lemona Food Truck',
    image: '/images/projects/lemona.jpg',
    blurImage: '/images/projects/lemona-blur.jpg',
    description: 'Site vitrine présentant l\'activité d\'une chaine de Food Truck vintage spécialisé dans les produits à base de Citron.',
    gradient: ["#d1c97c", "#b6af6c"],
    url: '#',
    techs: ['pug', 'html', 'sass']
  },
  {
    name: 'Airmdrone',
    image: '/images/projects/airmdrone.png',
    blurImage: '/images/projects/airmdrone-blur.png',
    description: 'Site vitrine pour améliorer la visibilité d\'un pilote de drone professionnel',
    gradient: ['rgba(15,44,109, 0.5)', 'rgb(15,44,109)'],
    url: 'https://www.airmdrone.com/',
    techs: ['html', 'sass', 'javascript', 'gsap']
  },
]

export const SKILLS = {
  frontend: ['javascript', 'typescript', 'react', 'next', 'redux', 'graphql', 'tailwind', 'gsap', 'gatsby', 'sass', 'html', 'css'],
  backend: ['nodejs', 'nestjs', 'express', 'php', 'symfony', 'mongodb', 'mysql'],
  userInterface: ['xd', 'illustrator', 'photoshop', 'blender', 'threejs'],
  other: ['git', 'docker', 'webpack', 'gulp', 'postman', 'idea', 'vscode']
}

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNode> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "Aujourd'hui",
    size: ItemSize.SMALL,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Développeur web & mobile FullStack (Insaniam)",
    size: ItemSize.LARGE,
    period: "De avril 2021 à aujourd'hui",
    subtitle: "Développement de site, d'application web / mobile & API (React/Native/Redux/Saga, Symfony, Ghost, WordPress).",
    image: "/images/logos/logo-insaniam.png",
    slideImage: "/images/timeline/insaniam.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Diplôme Développeur Web & Web Mobile",
    size: ItemSize.LARGE,
    period: "Juillet 2021",
    subtitle: "Niveau V (RNCP) - Digital Campus Rennes (35)",
    slideImage: "/images/timeline/exam.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.SMALL,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Motoo Planner (Projet personnel)",
    size: ItemSize.LARGE,
    period: "Février à Juillet 2021",
    subtitle: "Application web pour faciliter la planification de road trip à moto en groupe avec une approche collaborative et une expérience utilisateur intuitive.",
    image: "/images/logos/logo-motooplanner.png",
    slideImage: "/images/timeline/motoo.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Digital Campus Rennes (35)",
    size: ItemSize.LARGE,
    period: "De sept 2020 à avril 2021",
    subtitle: "Formation Développeur Web & Mobile",
    image: "/images/logos/logo-dc.png",
    slideImage: "/images/timeline/digitalcampus.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Société Airmdrone (www.airmdrone.com)",
    size: ItemSize.LARGE,
    period: "2018-2019",
    subtitle: "Création d'un site vitrine pour un pilote de drone professionnel afin d'apporter une présence en ligne et faciliter les demandes de clients potentiels.",
    image: "/images/logos/logo-airmdrone.png",
    slideImage: "/images/timeline/airmdrone.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Chef de quart (Sémaphore de Saint-Cast (22) - Marine Nationale)",
    size: ItemSize.LARGE,
    period: "De septembre 2018 à août 2020",
    subtitle: "Surveillance du trafic maritime et sauvetage en mer",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/saint-cast.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Chef de quart (Sémaphore de Ouessant (29) - Marine Nationale)",
    size: ItemSize.LARGE,
    period: "De septembre 2015 à août 2018",
    subtitle: "Surveillance du trafic maritime et sauvetage en mer",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/stiff.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Chef de quart (Sémaphore de Batz (29) - Marine Nationale)",
    size: ItemSize.LARGE,
    period: "De août 2012 à août 2015",
    subtitle: "Surveillance du trafic maritime et sauvetage en mer",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/batz.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    period: "De 2009 à 2011",
    title: "Inspecteur des pêches embarqué (Commission de l'Océan Indien)",
    size: ItemSize.LARGE,
    subtitle: "Participation à des missions embarquées de coopération de surveillance des pêches sur des patrouilleurs de Madagascar / Ile Maurice / Seychelles",
    image: "/images/logos/logo-coi.jpg",
    slideImage: "/images/timeline/coi-2.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    period: "De juillet 2008 à août 2012",
    title: "CROSS Réunion (île de la Réunion) - Affaires Maritimes",
    size: ItemSize.LARGE,
    subtitle: "Surveillance des pêches & exploitation d'imagerie satellite pour lutter contre la pêche illicite dans l'Océan Indien.",
    image: "/images/logos/logo-cross.png",
    slideImage: "/images/timeline/reunion.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Opérateur (Sémaphore de Belle-île-en-mer (56) - Marine Nationale)",
    size: ItemSize.LARGE,
    period: "De septembre 2005 à juillet 2008",
    subtitle: "Surveillance du trafic maritime et sauvetage en mer",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/le-talut.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Opérateur (Sémaphore de Bear (66) - Marine Nationale)",
    size: ItemSize.LARGE,
    period: "De septembre 2001 à août 2005",
    subtitle: "Surveillance du trafic maritime et sauvetage en mer",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/bear.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Niveau IV - Bac Scientifique",
    size: ItemSize.LARGE,
    period: "2001",
    subtitle: "Lycée René Cassin - Montfort-sur-Meu (35)",
    slideImage: "/images/timeline/examen.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2001",
    size: ItemSize.SMALL,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
];

export type TimelineNode = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title?: string;
  period?: string,
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = ''
export const CHAPORT_APP_ID = ''

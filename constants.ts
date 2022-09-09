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

export const TYPED_STRINGS = [
  'Développement Frontend',
  'Développement Backend',
  'Développement FullStack JS'
]

export const EMAIL = 'duguetony@gmail.com'

export const SOCIAL_LINKS = [
  { name: 'linkedin', url: 'https://duguetony.fr'},
  { name: 'github', url: 'https://duguetony.fr'},
  { name: 'instagram', url: 'https://duguetony.fr'},
  { name: 'facebook', url: 'https://duguetony.fr'}
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
    techs: ['react', 'sass', 'symfony']
  },
  {
    name: 'MotooPlanner',
    image: '/images/projects/motooplanner.png',
    blurImage: '/images/projects/motooplanner-blur.png',
    description: 'Application web pour faciliter la planification de road trip en moto en groupe',
    gradient: ['#00765F', '#238975'],
    url: 'https://motooplanner.tonydugue.fr/',
    techs: ['react', 'sass', 'symfony']
  },
  {
    name: 'Lemona Food Truck',
    image: '/images/projects/lemona.jpg',
    blurImage: '/images/projects/lemona-blur.png',
    description: 'Site vitrine présentant l\'activité d\'une chaine de Food Truck vintage spécialisé dans les produits à base de Citron.',
    gradient: ["#17007B", "#3A2C79"],
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
  frontend: ['javascript', 'next', 'react', 'redux', 'gsap', 'tailwind', 'sass', 'svg', 'html', 'css'],
  userInterface: ['figma', 'sketch', 'illustrator', 'photoshop'],
  other: ['git', 'webpack', 'gulp', 'aftereffects']
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
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "title ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/timeline-1.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "title ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/timeline-2.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "title ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/timeline-3.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "title ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/timeline-4.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "title ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/timeline-5.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "title ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/timeline-6.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "title ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/timeline-7.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "title ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/timeline-8.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "title ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    slideImage: "/images/timeline/timeline-9.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "title ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    slideImage: "/images/timeline/timeline-10.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "title ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    slideImage: "/images/timeline/timeline-11.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "title ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    slideImage: "/images/timeline/timeline-12.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "title s ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    slideImage: "/images/timeline/timeline-13.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "title ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/timeline-14.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2014",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "title ...",
    size: ItemSize.SMALL,
    subtitle: "Description ...",
    image: "/images/logos/logo-marine.jpg",
    slideImage: "/images/timeline/timeline-15.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNode = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
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

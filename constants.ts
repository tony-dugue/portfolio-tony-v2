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

export const PROJECTS = [
  {
    name: 'Firmain',
    image: '/images/projects/firmain.png',
    description: 'Plateforme numérique pour gérer avec simplicité les process RH de gestion des formations internes ou externes et des compétences',
    gradient: ['#172839', '#334659'],
    url: 'https://app.escaledescompetences.fr/',
    tech: ['react', 'sass', 'symfony']
  },
  {
    name: 'MotooPlanner',
    image: '/images/projects/motooplanner.png',
    description: 'Application web pour faciliter la planification de road trip en moto en groupe',
    gradient: ['#00765F', '#238975'],
    url: 'https://motooplanner.tonydugue.fr/',
    tech: ['react', 'sass', 'symfony']
  },
  {
    name: 'Lemona Food Truck',
    image: '/images/projects/lemona.jpg',
    description: 'Site vitrine présentant l\'activité d\'une chaine de Food Truck vintage spécialisé dans les produits à base de Citron.',
    gradient: ["#17007B", "#3A2C79"],
    url: '#',
    tech: ['pug', 'html', 'sass']
  },
  {
    name: 'Airmdrone',
    image: '/images/projects/airmdrone.png',
    description: 'Site vitrine pour améliorer la visibilité d\'un pilote de drone professionnel',
    gradient: ['rgba(15,44,109, 0.5)', 'rgb(15,44,109)'],
    url: 'https://www.airmdrone.com/',
    tech: ['html', 'sass', 'javascript', 'gsap']
  },
]

export const SKILLS = {
  frontend: ['javascript', 'next', 'react', 'gsap', 'tailwind', 'sass', 'svg', 'html', 'css'],
  userInterface: ['figma', 'sketch', 'illustrator', 'photoshop'],
  other: ['git', 'webpack', 'gulp', 'aftereffects']
}

export const TIMELINE: TimelineNode[] = [
  {
    content: '2020',
    branch: 1,
    type: 'year'
  },
  {
    content: {
      title: 'UI Engineer (freelance)',
      description: 'Building solutions for employee engagement, productivity and performance 🎯',
      logo: 'huminos'
    },
    branch: 2,
    type: 'checkpoint',
    diverge: true
  },
  {
    content: {
      title: 'Motion Graphics (freelance)',
      description: 'Motion Graphics content for Product Launch 🚀',
      logo: 'octanner'
    },
    branch: 2,
    type: 'checkpoint',
    converge: true
  },
  {
    content: '2019',
    branch: 1,
    type: 'year'
  },
  {
    content: {
      title: 'UI Engineer',
      description: 'Working on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Building a design system.',
      logo: 'dltlabs'
    },
    branch: 1,
    type: 'checkpoint'
  },
  {
    content: {
      title: 'UX Engineer (freelance)',
      description: 'Product design and development for employee engagement chatbot suite for workplace by facebook',
      logo: 'huminos'
    },
    branch: 1,
    type: 'checkpoint'
  },
  {
    content: {
      title: 'Graduated from College 🎓',
      description: 'Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!',
      logo: 'akgec'
    },
    branch: 1,
    type: 'checkpoint',
    diverge: true
  },
  {
    content: '2018',
    branch: 1,
    type: 'year',
  },
  {
    content: {
      title: 'Student lead at SDC-SI',
      description: 'Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.',
      logo: 'si'
    },
    branch: 1,
    type: 'checkpoint'
  },
  {
    content: {
      title: 'Lecture on SVG animations',
      description: 'Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI'
    },
    branch: 1,
    type: 'checkpoint'
  },
  {
    content: '2017',
    branch: 2,
    type: 'year'
  },
  {
    content: {
      title: '1st position in Web Designing, IMSU',
      description: 'Competed against 20+ teams for design and development of web project from scratch'
    },
    branch: 2,
    type: 'checkpoint'
  },
  {
    content: {
      title: 'Lecture on Javascript',
      description: 'Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI'
    },
    branch: 1,
    type: 'checkpoint'
  },
  {
    content: {
      title: '1st position in Web Design, ABES ACM',
      description: 'Competed in web and graphic design challenge with 100+ participants.'
    },
    branch: 2,
    type: 'checkpoint'
  },
  {
    content: {
      title: 'Lecture on Web Technologies',
      description: 'Guided 300+ students on getting started with web technologies like HTML/CSS and JS'
    },
    branch: 1,
    type: 'checkpoint'
  },
  {
    content: '2016',
    branch: 2,
    type: 'year'
  },
  {
    content: {
      title: '1st position in Web Designing, IMSU',
      description: 'Secured 1st prize in Web design challenge against 50+ teams'
    },
    branch: 2,
    type: 'checkpoint',
    converge: true
  },
  {
    content: {
      title: 'UI/UX, Frontend Engineer',
      description: 'Started journey in SDC-SI, where I got to work on 10+ web projects. Learnt the fundamentals of Frontend, UI/UX,  Graphic design and more...',
      logo: 'si'
    },
    branch: 1,
    type: 'checkpoint'
  },
  {
    content: '2014',
    branch: 1,
    type: 'year'
  },
  {
    content: {
      title: 'Recognized Themer',
      description: 'Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.',
      logo: 'xda'

    },
    branch: 1,
    type: 'checkpoint'
  }
]

export interface TimelineNode {
  content: string | TimelineContent,
  branch: 1 | 2,
  type: 'year' | 'checkpoint',
  converge?: boolean,
  diverge?: boolean
}

interface TimelineContent {
  title: string,
  description: string,
  logo?: string
}

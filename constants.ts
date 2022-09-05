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
      title: 'title ...',
      description: 'Description ...',
      logo: ''
    },
    branch: 2,
    type: 'checkpoint',
    diverge: true
  },
  {
    content: {
      title: 'title ...',
      description: 'Description ...',
      logo: ''
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
      title: 'title ...',
      description: 'Description ...',
      logo: ''
    },
    branch: 1,
    type: 'checkpoint'
  },
  {
    content: {
      title: 'title ...',
      description: 'Description ...',
      logo: ''
    },
    branch: 1,
    type: 'checkpoint'
  },
  {
    content: {
      title: 'title ...',
      description: 'Description ...',
      logo: ''
    },
    branch: 1,
    type: 'checkpoint'
  },
  {
    content: '2018',
    branch: 1,
    type: 'year',
  },
  {
    content: {
      title: 'title ...',
      description: 'Description ...',
      logo: ''
    },
    branch: 1,
    type: 'checkpoint',
    diverge: true
  },
  {
    content: {
      title: 'title ...',
      description: 'Description ...',
    },
    branch: 1,
    type: 'checkpoint',
    parallel: 2
  },
  {
    content: '2017',
    branch: 2,
    type: 'year'
  },
  {
    content: {
      title: 'title ...',
      description: 'Description ...',
    },
    branch: 2,
    type: 'checkpoint',
    parallel: 1
  },
  {
    content: {
      title: 'title ...',
      description: 'Description ...',
    },
    branch: 1,
    type: 'checkpoint',
    parallel: 2
  },
  {
    content: {
      title: 'title ...',
      description: 'Description ...',
    },
    branch: 2,
    type: 'checkpoint',
    parallel: 1
  },
  {
    content: {
      title: 'title ...',
      description: 'Description ...',
    },
    branch: 1,
    type: 'checkpoint',
    parallel: 2
  },
  {
    content: '2016',
    branch: 2,
    type: 'year'
  },
  {
    content: {
      title: 'title ...',
      description: 'Description ...',
    },
    branch: 2,
    type: 'checkpoint',
    converge: true
  },
  {
    content: '',
    branch: 1,
    type: 'year'
  },
  {
    content: {
      title: 'title ...',
      description: 'Description ...',
      logo: ''
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
      title: 'title ...',
      description: 'Description ...',
      logo: ''

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
  diverge?: boolean,
  parallel?: 1 | 2
}

export interface TimelineContent {
  title: string,
  description: string,
  logo?: string
}

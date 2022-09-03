export const METADATA = {
  title: "Portfolio | Tony Dugué",
  description: "Mon portfolio",
  siteUrl: "https://tonydugue.fr/",
}

export const NAVLINKS = [
  {
    name: 'Accueil',
    ref: 'home'
  },
  {
    name: 'Projets',
    ref: 'works'
  },
  {
    name: 'Compétences',
    ref: 'skills'
  },
  {
    name: 'Parcours',
    ref: 'timeline'
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
    name: 'Airmdrone',
    image: '/images/projects/airmdrone.png',
    description: 'Site vitrine pour améliorer la visibilité d\'un pilote de drone professionnel',
    gradient: ['rgba(15,44,109, 0.5)', 'rgb(15,44,109)'],
    url: 'https://www.airmdrone.com/',
    tech: ['html', 'sass', 'javascript', 'gsap']
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
    name: 'Firmain',
    image: '/images/projects/firmain.png',
    description: 'Plateforme numérique pour gérer avec simplicité les process RH de gestion des formations internes ou externes et des compétences',
    gradient: ['#172839', '#334659'],
    url: 'https://app.escaledescompetences.fr/',
    tech: ['react', 'sass', 'symfony']
  },
  {
    name: 'Lemona Food Truck',
    image: '/images/projects/lemona.jpg',
    description: 'Site vitrine présentant l\'activité d\'une chaine de Food Truck vintage spécialisé dans les produits à base de Citron.',
    gradient: ["#17007B", "#3A2C79"],
    url: '#',
    tech: ['pug', 'html', 'sass']
  }
]

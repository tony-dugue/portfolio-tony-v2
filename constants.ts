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
  frontend: [
    {id: 1, filename: 'javascript', name: 'JavaScript (JS)', description: 'Souvent abrégé « JS », langage de script léger, orienté objet, principalement connu comme le langage de script des pages' +
        ' web'},
    {id: 2, filename: 'typescript', name: 'TypeScript (TS)', description: 'Langage de programmation libre et open source développé par Microsoft qui a pour but d\'améliorer et de sécuriser la' +
        ' production de code JavaScript. Il s\'agit d\'un sur-ensemble syntaxique strict de JavaScript.'},
    {id: 3, filename: 'react', name: 'React', description: 'Bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création' +
        ' d\'application web monopage, via la création de composants dépendant d\'un état et générant une page HTML à chaque changement d\'état.'},
    {id: 4, filename: 'next', name: 'NextJS', description: 'Framework gratuit et open source s\'appuyant sur la bibliothèque JavaScript React et sur la technologie Node.js.'},
    {id: 5, filename: 'redux', name: 'Redux', description: 'Bibliothèque open-source JavaScript de gestion d\'état pour applications web. Elle est plus couramment utilisée avec des bibliothèques' +
        ' comme React ou Angular pour la construction d\'interfaces utilisateur. Semblable à l\'architecture Flux, elle a été créée par Dan Abramov et Andrew Clark.'},
    {id: 6, filename: 'graphql', name: 'GraphQL', description: 'Langage de requêtes et un environnement d\'exécution, créé par Facebook en 2012, avant d\'être publié comme projet open-source en' +
        ' 2015. Inscrit dans le modèle Client-Serveur, il propose une alternative aux API REST.'},
    {id: 7, filename: 'tailwind', name: 'Tailwind CSS', description: 'Framework CSS open source. La principale caractéristique de cette bibliothèque est que, contrairement à d\'autres frameworks' +
        ' CSS comme Bootstrap, elle ne fournit pas une série de classes prédéfinies pour des éléments tels que des boutons ou des tableaux.'},
    {id: 8, filename: 'gsap', name: 'GSAP (Greensock)', description: 'Bibliothèque d\'animation pour HTML5 et Flash. Cela permet d\'animer tout ce à quoi JavaScript peut accéder (propriétés CSS,' +
        ' SVG, objets de la bibliothèque canevas, objets génériques...). GSAP est constitué de plusieurs outils de bases, associés à quelques extensions.'},
    {id: 9, filename: 'gatsby', name: 'Gatsby', description: 'Générateur de site statique open source construit sur Node.js en utilisant React et GraphQL. Utilisé en JamStack.'},
    {id: 10, filename: 'sass', name: 'SASS', description: 'Préprocesseur qui ajoute des fonctionnalités à CSS. Il permet, entre autres, de mieux structurer et simplifier le code, d\'éviter les' +
        ' répétitions et plus encore. Le code SASS doit être dans des fichiers ayant l\'extension.'},
    {id: 11, filename: 'html', name: 'HTML', description: 'Le HyperText Markup Language, généralement abrégé HTML ou, dans sa dernière version, HTML5, est le langage de balisage conçu pour' +
        ' représenter les pages web. Ce langage permet : d’écrire de l’hypertexte, d’où son nom, de structurer sémantiquement la page, de mettre en forme le contenu.'},
    {id: 12, filename: 'css', name: 'CSS', description: 'Les feuilles de style en cascade, généralement appelées CSS de l\'anglais Cascading Style Sheets, forment un langage informatique qui décrit' +
        ' la présentation des documents HTML et XML.'}
  ],
  backend: [
    {id: 1, filename: 'nodejs', name: 'NodeJS', description: 'Plateforme logicielle libre en JavaScript, orientée vers les applications réseau évènementielles hautement concurrentes qui doivent' +
        ' pouvoir monter en charge. Elle utilise la machine virtuelle V8, la librairie libuv pour sa boucle d\'évènements, et implémente sous licence MIT les spécifications CommonJS.'},
    {id: 2, filename: 'nestjs', name: 'NestJS', description: 'Frameworks Node.js pour construire des applications backend efficaces, évolutives et de niveau entreprise en utilisant' +
        ' Node.js. Il est connu pour produire des applications hautement testables, maintenables et évolutives à l’aide de JavaScript et TypeScript modernes.'},
    {id: 3, filename: 'express', name: 'express', description: 'Framework pour construire des applications web basées sur Node.js. C\'est de fait le framework standard pour le développement de' +
        ' serveur en Node.js.'},
    {id: 4, filename: 'php', name: 'PHP', description: 'Le PHP (PHP Hypertext Preprocessor ) est un langage de scripts généraliste et Open' +
        ' Source, spécialement conçu pour le développement d\'applications web. Il peut être intégré facilement au HTML.'},
    {id: 5, filename: 'symfony', name: 'Symfony', description: 'Framework MVC libre écrit en PHP avec un ensemble de composants PHP. Fournit des fonctionnalités modulables et adaptables qui' +
        ' permettent de faciliter et d’accélérer le développement d\'un site web.'},
    {id: 6, filename: 'mongodb', name: 'MongoDB', description: 'Système de gestion de base de données orienté documents, répartissable sur un nombre quelconque d\'ordinateurs et ne nécessitant pas' +
        ' de schéma prédéfini des données.'},
    {id: 7, filename: 'mysql', name: 'MySQL', description: 'Système de gestion de bases de données relationnelles.'}
  ],
  userInterface: [
    {id: 1, filename: 'xd', name: 'ADOBE XD', description: 'Outil de conception vectorielle pour les applications Web et mobiles, développé et publié par Adobe Inc'},
    {id: 2, filename: 'illustrator', name: 'Adobe Illustrator', description: 'Logiciel de création graphique vectorielle. Il fait partie de la gamme Adobe, peut être utilisé indépendamment ou en' +
        ' complément de Photoshop, et offre des outils de dessin vectoriel puissants. Les images vectorielles sont constituées de courbes générées par des formules mathématiques.'},
    {id: 3, filename: 'photoshop', name: 'Adobe Photoshop', description: 'Logiciel de retouche, de traitement et de dessin assisté par ordinateur développé et publié par Adobe Inc'},
    {id: 4, filename: 'blender', name: 'Blender', description: 'Logiciel libre de modélisation, d’animation par ordinateur et de rendu en 3D, créé en 1998. Il est actuellement développé par la' +
        ' Fondation Blender. Depuis 2019 le logiciel Blender est de plus en plus reconnu par les entreprises du secteur de l\'animation 3D, comme Epic Games, Ubisoft et NVIDIA.'},
    {id: 5, filename: 'threejs', name: 'ThreeJS', description: 'Bibliothèque JavaScript pour créer des scènes 3D dans un navigateur web. Elle peut être utilisée avec la balise canvas du HTML5 sans' +
        ' avoir besoin d\'un plugin.'}
  ],
  other: [
    {id: 1, filename: 'git', name: 'Git', description: 'Système de contrôle de version permettant de gérer et de suivre l\'historique d\'un code source.'},
    {id: 2, filename: 'docker', name: 'Docker', description: 'Plateforme permettant de lancer certaines applications dans des conteneurs logiciels. Permet de faciliter la coordination des' +
        ' comportements entre les conteneurs, et de les connecter entre eux pour créer des stacks d\'applications.'},
    {id: 3, filename: 'webpack', name: 'Webpack', description: 'Outil logiciel open-source de type « module bundler », conçu pour faciliter le développement et la gestion de sites et' +
        ' d\'applications web modernes.'},
    {id: 4, filename: 'gulp', name: 'Gulp', description: 'Automatiseur de tâches en JavaScript (task runner) utilisé en développement web frontend.'},
    {id: 5, filename: 'postman', name: 'Postman', description: 'Application  créée en 2012 permettant de tester des API. Permet de construire des collections de requête HTTP et de lancer cette' +
        ' série de requêtes en une fois'},
    {id: 6, filename: 'idea', name: 'PhpStorm', description: 'Outil de développement pour les projets web. Editeur de code pour PHP, HTML, CSS et JavaScript, édité par JetBrains.'},
    {id: 7, filename: 'vscode', name: 'VsCode', description: 'Editeur de code open-source, gratuit et multi-plateforme (Windows, Mac et Linux), développé par Microsoft'}
  ]
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
    title: "Société Airmdrone",
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

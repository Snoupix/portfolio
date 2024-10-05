import type { SiteConfig } from '$src/types/Config';

const config: SiteConfig = {
  title: 'Snoupix',
  description: 'aka Samuel Dewaele',
  source: 'https://github.com/Snoupix/portfolio',
  baseUrl: 'https://snoupix.dev',
  initialFeeds: [{ label: 'Notes', url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/blog.atom' }],
  additionalFeeds: [
    { label: 'Notes', url: 'https://notes.aliciasykes.com/feed' },
    {
      label: 'Dev.to',
      url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/dev-to.atom',
    },
    {
      label: 'GitHub',
      url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/github.atom',
    },
    {
      label: 'StackOverflow',
      url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/stackoverflow.atom',
    },
    {
      label: 'Reddit',
      url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/reddit.atom',
    },
    {
      label: 'Mastodon',
      url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/mastodon.atom',
    },
  ],

  routeLinks: [
    { label: 'Home', route: '/', color: 'var(--accent-1, #ff0099)' },
    {
      label: 'Blog',
      route: '/blog',
      color: 'var(--accent-2, #b45eff)',
      description: 'Published articles, notes, tutorials and updates',
    },
    {
      label: 'Projects',
      route: '/projects',
      color: 'var(--accent-3, #01c0f0)',
      description: 'Personal projects and open source work',
    },
    {
      label: 'Contact',
      route: '/contact',
      color: 'var(--accent-1, #ff0099)',
      description: 'Social profile links and contact form',
    },
    {
      label: 'About',
      route: '/about',
      color: 'var(--accent-4, #1de691)',
      description: 'Bio and professional experience',
    },
  ],
  footerInfo: {
    author: 'Snoupix',
    authorSite: 'https://github.com/Snoupix',
    license: 'MIT',
    licenseLink: '',
    copyright: true,
  },
  githubUser: 'Snoupix',
  defaultTheme: 'callisto',
  defaultLanguage: 'en',
  colorSchemes: {
    dark: {
      background: '#101010',
      foreground: '#fafafa',
      'dimmed-text': '#808080',
      'card-background': '#1b1b1b',
      'card-border': '1px solid #2a2a2a',
      'code-background': '#333',
      accent: '#01c0f0',
      'accent-1': '#ff0099',
      'accent-2': '#b45eff',
      'accent-3': '#01c0f0',
      'accent-4': '#1de691',
      'home-accent-background': '#2a3367',
      'home-accent-foreground': 'var(--foreground)',
    },
    light: {
      background: '#ededed',
      foreground: '#2a3367',
      'card-background': '#F8F8FF',
      'card-border': '1px solid #0000001a',
      'home-accent-background': '#2a3367',
      'home-accent-foreground': 'var(--foreground)',
    },
    callisto: {
      background: '#0a192f',
      foreground: '#dcdcdc',
      'dimmed-text': '#8892b0',
      'card-background': '#0b1021',
      'card-border': '1px solid #ffffff1a',
      'accent-1': '#00ccb4',
      'accent-2': '#00ccb4',
      'accent-3': '#00ccb4',
      'accent-4': '#00ccb4',
      'voronoi-background': '#0a192f',

      'home-accent-background': '#601ae0',
      'home-tile-background': '#0B1021',
      'voronoi-lines': '#4ee8d61a',

      'voronoi-c1': '#141B33',
      'voronoi-c2': '#131A31',
      'voronoi-c3': '#12192F',
      'voronoi-c4': '#11182D',
      'voronoi-c5': '#10172B',
      'voronoi-c6': '#0F1629',
      'voronoi-c7': '#0E1527',
      'voronoi-c8': '#0D1425',
      'voronoi-c9': '#0C1323',
      'voronoi-c10': '#0B1221',

      'voronoi-r0': '#141b33',
      'voronoi-r1': '#141b33',
      'voronoi-r2': '#12182e',
      'voronoi-r3': '#101629',
      'voronoi-r4': '#0e1324',
      'voronoi-r5': '#0c101f',
      'voronoi-r6': '#0c101f',
      'voronoi-r7': '#0a0e1a',
      'voronoi-r8': '#0a0e1a',
      'voronoi-r9': '#080b14',
      'voronoi-r10': '#06080f',
    },
  },
  workExperience: [
    {
      company: 'Point Vermeil',
      companyUrl: 'https://pointvermeil.fr/',
      companyLogo: 'https://pointvermeil.fr/wp-content/uploads/2020/02/Logo-couleur-7-1.png', // TODO :'))'
      jobTitle: 'Fullstack web developer',
      datesWorked: 'April 2023 - April 2024',
      responsibilities: 'As a member of the Practice Group within Hamilton Club, '
      + 'I work across several client projects, ensuring that '
      + 'code quality, maintainability and security are top notch. '
      + 'I\'m responsible for training up our developers, helping them gain '
      + 'the skills necessary to best support our clients. '
      + 'I\'m always up for trying out new tech, so that I\'m in a good position '
      + 'to choose the best tech stacks on a per-client basis.',
      projectType: 'Clients',
      projects: [
        { name: 'Reemployez', logo: 'https://i.ibb.co/WgKKMFQ/Isos.jpg', url: 'https://reemployez.fr/', description: 'Reemployez.fr met en lien sur le territoire les acteurs de projet de construction incluant du réemploi. C’est l’outil qui connecte l’offre et la demande d’éléments, composants et matériaux de réemploi dans la construction. Leur approvisionnement, fiable en quantité et en qualité, est ainsi sécurisé. Mais avant tout, Reemployez.fr offre la visibilité dont le réemploi a besoin aujourd’hui.', },
        { name: 'Salamandre assurances', logo: 'https://i.ibb.co/sQcvxmG/Frasers.png', url: 'https://salamandre-assurances.fr/', description: '', },
      ],
      technologies: [ 'TypeScript', 'React Native', 'Azure' ], // TODO
    },
    {
      company: 'Web tech enthusiast',
      companyUrl: '',
      companyLogo: '',
      jobTitle: 'Self-taught',
      datesWorked: 'June 2020 - Today',
      responsibilities: 'Worked on developing a Java application which would calculate the most '
        + 'effective mg of antimalarial drug, per kg or patient body weight, to prevent vaccine resistance building up. '
        + 'Involved dealing with millions of patient records, which were often in varying formats and units.',
        projectType: 'Projects',
        projects: [
        { name: 'GitHub', logo: '', url: 'https://github.com/Snoupix?tab=repositories', description: '' },
      ],
      technologies: [ 'Java', 'apachetomcat', 'junit', 'gradle' ],
    },
  ],
  projectComplimentaryData: [],
  postComplimentaryData: [],
  contact: {
    name: 'Samuel Dewaele',
    email: 'samu.dewaele@gmail.com',
    website: 'https://snoupix.dev',
    socials: {
      GitHub: 'Snoupix',
      'Dev.to': 'snoupix',
      Mastodon: '@Snoupix',
      LinkedIn: 'in/samuel-dewaele-94ba7b1a2',
      Reddit: 'Snoupix',
    },
    socialButtonLimit: 6,
    mailerConfig: {
      service_id: 'gmail',
      template_id: 'website-contact-form',
      user_id: 'user_K6F041q1dQvz8SJLSOZCR',
      template_params: {},
    },
  },
  about: {
    intro: 'A passionate tech enthusiast',
    bio: [
      "Hi, my name Samuel Dewaele, I'm also known as Snoupix on internet",

      `I have a particular interest in privacy-respecting software, as well as security.
      I've carried out a few audits, and authored the initial versions of
      <a href="https://github.com/Lissy93/personal-security-checklist">Personal Security Checklist</a>
      and <a href="https://github.com/Lissy93/awesome-privacy">Awesome Privacy</a>.`,

      `I enjoy going to (<a href="https://notes.aliciasykes.com/p/0s5s3uOtKj">and sometimes winning!</a>) hackathons.
      And if you're London-based, you'll probably have bumped into me at a tech meetup.`,

      `I love Linux, and (imo) have a neat
      <a href="https://github.com/lissy93/dotfiles">dotfiles setup</a> which I'm always tweaking.
      And I have a small homelab, that I'm using to learn more about system administration,
      and host my own services to (attempt to) escape big tech.
      I made <a href="https://github.com/Lissy93/dashy">dashboard app</a> for it.
      `,

      `For work, I'm a principal software engineer at <a href="https://and.digital/">AND.Digital</a>,
      where I work across various client projects, help to upskill and mentor junior and mid-level
      developers and ensure that the code we're delivering is the best it can be.`,

      `Away from the keyboard, I like sports, hanging out with friends, and going to Church.`,
    ],
    picture: 'https://i.ibb.co/svxHFMD/alicia-sykes-3.jpg',
  },
  techStack: {
    backend: [
      {
        language: 'Rust',
        projects: ['AdGuardian-Term'],
      },
      {
        language: 'Go',
        projects: ['who-dat', 'go-apod', 'OLD_AdGuardian-Term'],
      },
      {
        language: 'Node',
        projects: ['twitter-sentiment-visualisation', 'quick-example-of-testing-in-nodejs'],
      },
      {
        language: 'Python',
        projects: ['portainer-templates', 'gh-trending-no-cors', 'tfl-lift-availability-dash', 'pax'],
      },
      {
        language: 'Java',
        projects: ['Minesweper', 'AlternativeVoteSystem', 'TuneSender', 'TreasureHunt'],
      },
      {
        language: 'PHP',
        projects: [ 'revision-quizzes', 'intern-magnet', 'usermonkey' ],
      },
    ],
    frontend: [
      {
        language: 'Vue',
        projects: ['dashy', 'all-the-countries', 'alicia-sykes-website', 'tfl-lift-availability-dash'],
      },
      {
        language: 'Svelte',
        projects: ['my-website', 'cheat-code'],
      },
      {
        language: 'React',
        projects: ['web-check'],
      },
      {
        language: 'Solid',
        projects: ['cso'],
      },
      {
        language: 'Angular',
        projects: ['happy-app', 'realtime-speech-analytics'],
      },
      {
        language: 'Astro',
        projects: ['git-into-open-source'],
      },
      {
        language: 'D3',
        projects: ['twitter-sentiment-visualisation', 'happy-app', 'realtime-speech-analytics'],
      },
      {
        language: 'Alpine',
        projects: ['who-dat'],
      },
      {
        language: 'CoffeeScript',
        projects: ['sentiment-analysis'],
      },
      {
        language: 'HTML',
        projects: ['repo-badge-maker ', 'bullet-convertor', 'md-toc-generator', 'email-extractor', 'cyber-defence-presentation', 'web-dev-school', 'md-cv-maker'],
      },
    ],
    mobile: [
      {
        language: 'Swift',
        projects: ['hasami-shogi', 'Spotter'],
      },
      {
        language: 'Kotlin',
        projects: ['anti-theft-charge'],
      },
      {
        language: 'Flutter',
        projects: ['nfu'],
      },
      {
        language: 'Android',
        projects: ['Minesweper', 'anti-theft-charge', 'TuneSender', 'TreasureHunt', 'got-home-safe', 'Study-Time'],
      },
      // {
      //   language: 'React Native',
      //   projects: [''],
      // },
    ],
    other: [
      {
        language: 'Bash',
        projects: ['minimal-terminal-prompt'],
      },
      {
        language: 'Docker',
        projects: ['docker-tcpdump', 'dashy'],
      },
      {
        language: 'Config',
        projects: ['dotfiles', 'espanso-config', 'conky-system-stats-widget', 'Brewfile'],
      },
      {
        language: 'Markdown',
        projects: ['personal-security-checklist', 'awesome-privacy'],
      },
    ],
  },
  techStackExtras: {
    devOps: [
      'Docker', 'GitHubActions', 'GitLabCI/CD',
    ],
    cloud: [
      'OVH', 'Vercel', 'Cloudflare', 'AWS', 'GCP', 'Hetzner',
    ],
    databases: [
      'MariaDB', 'SQLite', 'Redis', 'MySQL', 'MongoDB', 'ArangoDB'
    ],
    testing: [
      'Jest', 'Puppeteer', 'Cypress',
    ],
  },
};

export default config;

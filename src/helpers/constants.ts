import type { SocialNetwork } from '$src/types/Socials';

export const emailJsEndpoint = 'https://api.emailjs.com/api/v1.0/email/send';

export const socialNetworks: SocialNetwork[] = [
  {
    name: 'GitHub',
    icon: 'github2',
    tone: '#585858',
    link: 'https://github.com/',
  },
  { name: 'Dev.to', icon: 'dev-to', tone: '#f1f155', link: 'https://dev.to/' },
  {
    name: 'Mastodon',
    icon: 'mastodon',
    tone: '#6364FF',
    link: 'https://mastodon.social/',
    noAt: true,
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    tone: '#0A66C2',
    link: 'https://www.linkedin.com/',
    noAt: true,
  },
  {
    name: 'Reddit',
    icon: 'reddit',
    tone: '#FF4500',
    link: 'https://www.reddit.com/user/',
  },
];

import type {
  NavBarLink,
  Identity,
  AboutPageContent,
  FeaturedPageContent,
  HomePageContent,
  NowPageContent,
} from '../types/index.type';

import { hobbyLinks } from './hobby';
import { communityLinks } from './community';
import { socialLinks, homeSocialLinks } from './social';
import { sourceLinks } from './source';

export const identity: Identity = {
  name: 'Tommy Vu',
  logo: '/img/voxel-capy.jpg',
  email: 'vu.thomas023@gmail.com',
  logoName: 'TeeV',
};

export const openGraphImage: string = '/img/capy.jpg'; // TODO: update

export const navBarLinks: NavBarLink[] = [
  { title: 'Home', url: '/' },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Now',
    url: '/now',
  },
  {
    title: 'Reads',
    url: '/under_construction', // live; local is under dev
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: 'Home | Tommy Vu',
    description: "Tinkerer",
    image: openGraphImage,
    domain: 'teevu',
    url: 'teevu.netlify.app',
  },
  role: 'Tinkerer',
  description:
    'Software Engineer specializing in building scalable, secure, and performant applications',
  homeSocialLinks: homeSocialLinks,
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: 'About | Tommy Vu | Software Engineer',
    description:
      'Former Sonar Technician on a submarine, pursuing his next career in the Software sector.',
    image: openGraphImage,
    domain: 'teevu',
    url: 'teevu.netlify.app',
  },
  subtitle: "Thanks for stopping by! Here's a bit about me.",
  about: {
    description:
      'Former Sonar Technician on a submarine, pursuing his next career in the Software sector',
  },
  work: {
    description: 'TODO: add descriptions',
    items: [
      {
        title: 'Building Automation Controls',
        company: {
          name: 'ATS Automation',
          url: 'https://novo.co/', // TODO: update
        },
        date: 'Aug 2023 - Present',
      },
      {
        title: 'Sonar Technician Submarines',
        company: {
          name: 'US Navy',
          url: 'https://postman.com/', // TODO: update
        },
        date: 'Mar 2018 - Mar 2023',
      },
    ],
  },
  project: {
    description: '',
    items: [
      {
        title: 'Logistics E-Commerce Application',
        description: 'Currently working on',
        date: '2024',
        url: 'https://github.com/tommyyv/full-stack-v1',
      },
      {
        title: 'Vacation E-Commerce Application',
        description: 'description',
        date: '2024',
        url: 'https://github.com/tommyyv/vacation-ecommerce-app',
      },
      {
        title: 'Vacation Booking Application',
        description: 'descrip',
        date: '2023',
        url: 'https://github.com/tommyyv/vacation-booking-application',
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`,
    links: socialLinks,
  },
};

// Reads (/reads)
export const featuredPageContent: FeaturedPageContent = {
  seo: {
    title: 'Articles & Stories | Tommy Vu',
    description:
      'Explore a curated collection of articles and insightful stories',
    image: openGraphImage,
    domain: 'teevu',
    url: 'teevu.netlify.app',
  },
  subtitle: 'Articles and Stories',
};

// Now (/now) TODO: update
export const nowPageContent: NowPageContent = {
  seo: {
    title: 'Now | Tommy Vu',
    description:
      "A updated log of what I'm building, learning, reading or exploring at different points of time.",
    image: openGraphImage,
    domain: 'teevu',
    url: 'teevu.netlify.app',
  },
  title: 'Now (Recently)',
  subtitle: "Where I’m at, what I'm focused on, and where I want to be at",
  sourceLinks,
  hobbyLinks,
  communityLinks,
};

export * from './music';
export * from './social';
export * from './featured';
export * from './source';
export * from './analytics';
export * from './github';

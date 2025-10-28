export type NavBarLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
};

export type SourceLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type CommunityLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type HobbyLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type Identity = {
  name: string;
  logo: string;
  email: string;
  logoName: string;
};

export type SEOInfo = {
  title: string;
  description: string;
  image: string;
  domain: string;
  url: string;
};

export type HomePageContent = {
  seo: SEOInfo;
  role: string;
  description: string;
  homeSocialLinks: SocialLink[];
};

export type ResumeItem = {
  title: string;
  company: {
    name: string;
    url: string;
  };
  date: string;
};

export type MusicPlaylist = {
  title: string;
  url: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  date: string;
  url: string;
  image?: string;
};

export type AboutPageContent = {
  seo: SEOInfo;
  subtitle: string;
  about: {
    description: string;
  };
  work: {
    description: string;
    items: ResumeItem[];
  };
  project: {
    description: string;
    items: ProjectItem[];
  };
  connect: {
    description: string;
    links: SocialLink[];
  };
};

export type NowPageContent = {
  seo: SEOInfo;
  subtitle: string;
  title: string;
  sourceLinks: SocialLink[];
  communityLinks: CommunityLink[];
  hobbyLinks: HobbyLink[];
};

export type FeaturedPageContent = {
  seo: SEOInfo;
  subtitle: string;
};

export type FeaturedPost = {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  date: string;
  url: string;
  author: string;
  publisher: string;
};

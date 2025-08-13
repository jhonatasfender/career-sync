export type ProfileBasics = {
  name: string | null;
  email: string | null;
  phone: string | null;
  url: string | null;
  location: string | null;
  headline: string | null;
  summary: string | null;
};

export type ProfileSummary = {
  content: string | null;
};

export type ProfileExperience = {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
  summary: string | null;
  website: string | null;
};

export type ProfileSkill = {
  name: string;
  keywords: string[];
  level: number | null;
  description: string | null;
};

export type ProfileEducation = {
  institution: string;
  area: string;
  studyType: string | null;
  startDate: Date;
  endDate: Date | null;
  gpa: number | null;
};

export type ProfileProject = {
  name: string;
  description: string | null;
  keywords: string[];
  summary: string | null;
  website: string | null;
};

export type ProfileCertification = {
  name: string;
  issuer: string;
  date: Date | null;
  summary: string | null;
  website: string | null;
};

export type ProfileLanguage = {
  name: string;
  level: number | null;
  description: string | null;
};

export type ProfileAward = {
  title: string;
  date: Date | null;
  awarder: string | null;
  summary: string | null;
  website: string | null;
};

export type ProfileVolunteer = {
  organization: string;
  position: string;
  startDate: Date | null;
  endDate: Date | null;
  location: string | null;
  summary: string | null;
};

export type ProfileSocial = {
  network: string;
  username: string;
  url: string;
  icon: string | null;
};

export type BuildProfileSummary = {
  basics: ProfileBasics | null;
  summary: ProfileSummary | null;
  experiences: ProfileExperience[];
  skills: ProfileSkill[];
  educations: ProfileEducation[];
  projects: ProfileProject[];
  certifications: ProfileCertification[];
  languages: ProfileLanguage[];
  awards: ProfileAward[];
  volunteer: ProfileVolunteer[];
  profiles: ProfileSocial[];
};

// Tipos de carta de apresentação
export type ExpressionType = "formal" | "informal" | "professional" | "casual";
export type ChannelType = "email" | "whatsapp" | "linkedin";

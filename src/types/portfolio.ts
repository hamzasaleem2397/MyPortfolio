export interface Settings {
  isSplash: boolean;
  useCustomCursor: boolean;
  googleTrackingID: string;
}

export interface Greeting {
  title: string;
  title2: string;
  logo_name: string;
  nickname: string;
  full_name: string;
  subTitle: string;
  resumefile: string;
  mail: string;
}

export interface SocialMediaLinks {
  github?: string;
  linkedin?: string;
  gmail?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

export interface SoftwareSkill {
  skillName: string;
  fontAwesomeClassname: string;
  style?: {
    color?: string;
    backgroundColor?: string;
  };
}

export interface SkillCategory {
  title: string;
  fileName: string;
  skills: string[];
  softwareSkills: SoftwareSkill[];
}

export interface Skills {
  data: SkillCategory[];
}

export interface Degree {
  title: string;
  subtitle: string;
  logo_path: string;
  alt_name: string;
  duration: string;
  descriptions: string[];
  website_link: string;
}

export interface Degrees {
  degrees: Degree[];
}

export interface Certification {
  title: string;
  subtitle: string;
  logo_path: string;
  certificate_link: string;
  alt_name: string;
  color_code: string;
}

export interface Certifications {
  certifications: Certification[];
}

export interface WorkExperience {
  title: string;
  company: string;
  company_url: string;
  logo_path: string;
  duration: string;
  location: string;
  description: string;
  color: string;
}

export interface ExperienceSection {
  title: string;
  experiences: WorkExperience[];
}

export interface Experience {
  title: string;
  subtitle: string;
  description: string;
  header_image_path: string;
  sections: ExperienceSection[];
}

export interface ProjectsHeader {
  title: string;
  description: string;
  avatar_image_path: string;
}

export interface ContactPageData {
  contactSection: {
    title: string;
    profile_image_path: string;
    description: string;
  };
  blogSection?: {
    title: string;
    subtitle: string;
    link: string;
    avatar_image_path: string;
  };
}

export interface ProjectLanguage {
  name: string;
  image: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  images: string[];
  logo: string;
  playstore?: string;
  appstore?: string;
  github?: string;
  languages: ProjectLanguage[];
}

export interface Projects {
  data: Project[];
}

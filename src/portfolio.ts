import {
  Settings,
  Greeting,
  SocialMediaLinks,
  Skills,
  Degrees,
  Certifications,
  Experience,
  ProjectsHeader,
  ContactPageData,
  Projects,
} from "./types/portfolio";

export const settings: Settings = {
  isSplash: true,
  useCustomCursor: true,
  googleTrackingID: "UA-174238252-2",
};

export const greeting: Greeting = {
  title: "Hello 👋.",
  title2: "Muhammad Hamza Saleem",
  logo_name: "hamza.()",
  nickname: "Hmxa",
  full_name: "Muhammad Hamza Saleem",
  subTitle:
    "Senior React Native & Full-Stack Developer 🔥. Passionate about building high-performance mobile applications and interactive web experiences.",
  resumefile: "Muhammad_Hamza_Saleem_React_Native_Developer_4yr_resume.pdf",
  mail: "mailto:hamzasaleem2397@gmail.com",
};

export const socialMediaLinks: SocialMediaLinks = {
  github: "https://github.com/hamzasaleem2397",
  linkedin: "https://www.linkedin.com/in/hamza-saleem2397/",
  gmail: "hamzasaleem2397@gmail.com",
};

export const skills: Skills = {
  data: [
    {
      title: "Full Stack & Mobile Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for web & mobile applications",
        "⚡ Building scalable cross-platform mobile apps using React Native & TypeScript",
        "⚡ Designing dynamic web applications using ReactJS, Next.js & Tailwind CSS",
        "⚡ Creating robust application backends with Node.js, NestJS, Supabase & Firebase",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#FFFFFF", color: "#F7DF1E" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "ReactJS / Native",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { color: "#FFFFFF" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: { color: "#339933" },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: { color: "#3ECF8E" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#439743" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#E94E32" },
        },
      ],
    },
  ],
};

export const degrees: Degrees = {
  degrees: [
    {
      title: "Bahria University Karachi Campus",
      subtitle: "Bachelor in Computer Science",
      logo_path: "bahria.jpg",
      alt_name: "BUKC",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Graduated with a Bachelor's Degree in Computer Science in 2021.",
        "⚡ Core coursework included Data Structures & Algorithms, DBMS, Software Engineering, Mobile Computing & Security.",
        "⚡ Completed multiple advanced courses in Web & Mobile Application Development.",
        "⚡ Developed & published production-ready mobile applications to Google Play & Apple App Store.",
      ],
      website_link: "https://www.bahria.edu.pk/",
    },
  ],
};

export const certifications: Certifications = {
  certifications: [
    {
      title: "Introduction to Game Development",
      subtitle: "University of Michigan via Coursera",
      logo_path: "coursera.png",
      certificate_link: "https://coursera.org/verify/6P9T2EAPD6YV",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
  ],
};

export const experience: Experience = {
  title: "Experience",
  subtitle: "Work & Professional History",
  description:
    "4+ years of professional experience building production-grade React Native & Full-Stack applications for iOS, Android, and Web. Proven record owning architecture, monetization, performance optimization, and team mentorship.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior React Native Developer",
          company: "Zenkoders",
          company_url: "https://zenkoders.com/",
          logo_path: "zenkoders.png",
          duration: "Jun 2023 – May 2026",
          location: "Karachi, Pakistan",
          description: `• Owned mobile architecture and end-to-end delivery of scalable React Native applications (iOS & Android)
• Built production-grade apps with modular architecture, improving maintainability and development velocity (React Native, TypeScript)
• Implemented monetization features using In-App Purchases and AdMob integration, contributing directly to revenue generation
• Contributed to the company's internal React Native boilerplate, reducing new project setup time by nearly 60%
• Designed real-time communication systems using Agora SDK with custom native modules
• Developed Android native widgets and bridged them with React Native for dynamic user engagement
• Built and optimized backend systems using Firebase Cloud Functions and scheduled Cron Jobs
• Developed serverless APIs using Supabase (Edge Functions, RPC, RLS)
• Implemented real-time chat with low-latency socket communication
• Improved app performance using React Query, RTK Query, and MMKV caching strategies
• Built global state architecture using Zustand and custom hooks
• Integrated secure authentication flows (Google, Apple, Facebook)
• Managed full App Store and Google Play release lifecycle
• Mentored junior developers through code reviews, architecture guidance, and debugging support`,
          color: "#6C63FF",
        },
        {
          title: "React Native Developer",
          company: "VISECH Technologies Pvt Ltd",
          company_url: "https://visech.com/",
          logo_path: "visech.jpg",
          duration: "Oct 2022 – May 2023",
          location: "Karachi, Pakistan",
          description: `• Developed and maintained production mobile applications using React Native
• Integrated REST APIs and optimized data flow for performance and scalability
• Implemented state management using Zustand for complex application flows
• Collaborated in agile teams for feature delivery and sprint execution`,
          color: "#3644af",
        },
        {
          title: "React Native Developer",
          company: "SAS Solutions",
          company_url: "https://www.linkedin.com/company/sassolution/",
          logo_path: "sas.jpg",
          duration: "Jun 2022 – Oct 2022",
          location: "Karachi, Pakistan",
          description: `• Built and deployed cross-platform mobile applications for iOS and Android
• Integrated payment gateways including Stripe, Razorpay, and Paystack
• Implemented push notification systems using OneSignal
• Developed multilingual applications supporting RTL and LTR layouts
• Integrated social authentication systems (Apple, Google, Facebook)
• Improved app stability through debugging and performance optimization
• Managed version control and collaboration using GitHub`,
          color: "#0071C5",
        },
        {
          title: "React Native Developer – Intern",
          company: "SAS Solutions",
          company_url: "https://www.linkedin.com/company/sassolution/",
          logo_path: "sas.jpg",
          duration: "Jan 2022 – Apr 2022",
          location: "Karachi, Pakistan",
          description: `• Assisted in development of React Native applications and feature implementation
• Worked on API integration, debugging, and UI improvements
• Gained experience in mobile architecture and deployment workflows`,
          color: "#00B4D8",
        },
      ],
    },
  ],
};

export const projectsHeader: ProjectsHeader = {
  title: "Projects Showcase",
  description:
    "A collection of production mobile applications and full-stack platforms I have built. Featuring React Native, Supabase, NestJS, Firebase, AI integrations, and real-time streaming.",
  avatar_image_path: "projects_image.svg",
};

export const contactPageData: ContactPageData = {
  contactSection: {
    title: "Get In Touch",
    profile_image_path: "hamza.png",
    description:
      "Available for Senior React Native, Mobile Architecture, and Full-Stack Development opportunities. Let's create something extraordinary together!",
  },
  blogSection: {
    title: "Tech Articles & Insights",
    subtitle:
      "I occasionally share tech insights, mobile architecture patterns, and React Native tutorials on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

export const projects: Projects = {
  data: [
    {
      id: "0",
      name: "Studio Grow",
      description:
        "Cycle-based wellness platform designed to provide personalized nutrition, workout plans, and progress tracking tailored to a user's menstrual cycle. Features dynamic meal plans, phase-adapted workouts, and real-time progress insights synced with hormonal phases.",
      images: [
        "studiogrow1.webp",
        "studiogrow2.webp",
        "studiogrow3.webp",
        "studiogrow4.webp",
        "studiogrow5.webp",
      ],
      logo: "studiogrowicon.webp",
      playstore:
        "https://play.google.com/store/apps/details?id=com.wellnesscycle.app&hl=en&pli=1",
      languages: [
        { name: "React Native", image: "rn.jpg" },
        { name: "TypeScript", image: "ts.png" },
        { name: "Supabase", image: "supabase.jpg" },
      ],
    },
    {
      id: "1",
      name: "NXR Mobile",
      description:
        "AI-powered restaurant management companion app. Features an AI assistant named Nexy, real-time sales analytics, labor cost tracking, and instant push notifications for critical restaurant events.",
      images: [
        "nx1.webp",
        "nx2.webp",
        "nx3.webp",
        "nx4.webp",
        "nx5.webp",
      ],
      logo: "nxlogo.png",
      appstore: "https://apps.apple.com/us/app/nxr-mobile/id6575389161",
      playstore:
        "https://play.google.com/store/apps/details?id=com.nx_restaurant.nx_android",
      languages: [
        { name: "React Native", image: "rn.jpg" },
        { name: "TypeScript", image: "ts.png" },
      ],
    },
    {
      id: "2",
      name: "TaleMaster",
      description:
        "Interactive storytelling and creative writing platform. Blends AI technology with creative writing tools to generate custom interactive stories and audio narrations.",
      images: [
        "talemaster8.png",
        "talemaster7.png",
        "talemaster6.png",
        "talemaster5.png",
        "talemaster4.png",
        "talemaster3.png",
        "talemaster2.png",
        "talemaster1.png",
      ],
      logo: "talemasterlogo.jpg",
      playstore: "https://talemaster.en.aptoide.com/app",
      languages: [
        { name: "React Native", image: "rn.jpg" },
        { name: "JavaScript", image: "js.png" },
        { name: "Firebase", image: "firebase.png" },
        { name: "OpenAI API", image: "openai.png" },
        { name: "Amazon Polly", image: "amazonpolly.jpg" },
      ],
    },
    {
      id: "3",
      name: "Flash Review",
      description:
        "Exam preparation flashcard application designed to help students study smarter. Features spaced repetition flashcard decks, progress analytics, and timed practice sessions for certification exams.",
      images: [
        "flash1.webp",
        "flash2.webp",
        "flash4.webp",
        "flash5.webp",
        "flash6.webp",
      ],
      logo: "flashreviewlogo.webp",
      playstore:
        "https://play.google.com/store/apps/details?id=com.flash_review_ma&hl=en",
      appstore: "https://apps.apple.com/us/app/nxr-mobile/id6575389161",
      languages: [
        { name: "React Native", image: "rn.jpg" },
        { name: "TypeScript", image: "ts.png" },
        { name: "MongoDB", image: "mongo.png" },
        { name: "Nest.js", image: "nest.png" },
      ],
    },
    {
      id: "4",
      name: "Meta Healthcare",
      description:
        "Healthcare accessibility app allowing users to request support workers, Occupational Therapists, and Physiotherapists, track upcoming appointments, and chat directly with customer support.",
      images: ["meta1.webp", "meta2.webp", "meta3.webp", "meta4.webp"],
      logo: "metalogo.webp",
      appstore: "https://apps.apple.com/au/app/meta-healthcare/id6602893403",
      playstore:
        "https://play.google.com/store/apps/details?id=com.meta_heathcare_mobileapp",
      languages: [
        { name: "React Native", image: "rn.jpg" },
        { name: "TypeScript", image: "ts.png" },
        { name: "Nest.js", image: "nest.png" },
        { name: "Zendesk API", image: "zendesk.jpg" },
      ],
    },
    {
      id: "5",
      name: "Runback",
      description:
        "Behavioral fitness app helping users build running habits through financial accountability. Users pledge refundable stakes verified automatically via Strava GPS tracking.",
      images: [
        "runback1.webp",
        "runback2.webp",
        "runback3.webp",
        "runback4.webp",
        "runback5.webp",
      ],
      logo: "runbacklogo.webp",
      appstore: "https://apps.apple.com/us/app/run-back/id6752663984",
      languages: [
        { name: "React Native", image: "rn.jpg" },
        { name: "TypeScript", image: "ts.png" },
        { name: "Supabase", image: "supabase.jpg" },
        { name: "Strava API", image: "strava.png" },
        { name: "Stripe API", image: "stripe.jpg" },
      ],
    },
    {
      id: "6",
      name: "Fitso",
      description:
        "Smart nutrition tracking application that creates personalized calorie and macronutrient targets. Features barcode scanning, AI meal photo recognition, and full nutrition history.",
      images: [
        "fitso1.webp",
        "fitso2.webp",
        "fitso3.webp",
        "fitso4.webp",
        "fitso5.webp",
        "fitso6.webp",
      ],
      logo: "fitso.webp",
      playstore:
        "https://play.google.com/store/apps/details?id=com.fitso_mobile_app&hl=en",
      languages: [
        { name: "React Native", image: "rn.jpg" },
        { name: "TypeScript", image: "ts.png" },
        { name: "Firebase", image: "firebase.png" },
        { name: "Open Food Facts", image: "openfoodfacts.png" },
      ],
    },
    {
      id: "7",
      name: "Aqua Matrix",
      description:
        "Bilingual (German & English) e-commerce application allowing users to browse products, manage multi-item shopping carts, and place seamless purchases with user account management.",
      images: [
        "aquamatrix1.webp",
        "aquamatrix2.webp",
        "aquamatrix3.webp",
        "aquamatrix4.webp",
        "aquamatrix5.webp",
      ],
      logo: "aqualogo.webp",
      playstore: "https://apkpure.com/aqua-matrix/com.coral.aquamatrixn",
      languages: [
        { name: "React Native", image: "rn.jpg" },
        { name: "JavaScript", image: "js.png" },
        { name: "WooCommerce API", image: "woocommerce.png" },
      ],
    },
  ],
};

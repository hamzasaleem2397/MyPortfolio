/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Muhammad Hamza Saleem",
  logo_name: "hamza.()",
  nickname: "Hmxa",
  full_name: "Muhammad Hamza Saleem",
  subTitle:
    "React / ReactNative Developer 🔥. Always learning.",
  resumefile:
    "Muhammad_Hamza_Saleem_React_Native_Developer_4yr_resume.pdf",
  mail: "mailto:hamzasaleem2397@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/hamzasaleem2397",
  linkedin: "https://www.linkedin.com/in/hamza-saleem2397/",
  gmail: "hamzasaleem2397@gmail.com",
  
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node, Express & Mongodb",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },

        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },

        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bahria University Karachi Campus",
      subtitle: "Bachelor in Computer Science",
      logo_path: "bahria.jpg",
      alt_name: "SSEC",
      duration: "2021 - Present",
      descriptions: [
        "⚡ I've completed my Bachelor degree in 2021.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have worked on various mobile applications which are live in playstore and appstore ",
      ],
      website_link: "https://www.bahria.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Game developement",
      subtitle: "Michigen University from Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://coursera.org/verify/6P9T2EAPD6YV",
      alt_name: "Coursera",
      color_code: "#0056D2",
      // color_code: "#47A048",
    },
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  description:
    "3+ years of professional experience building production-grade React Native applications for iOS and Android. I've worked across multiple companies, growing from intern to Senior Developer, owning full mobile architecture, performance optimization, and team mentorship.",
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

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create ReactNative Projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hamza.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};


const projects = {
  data: [
    {
      id: "1",
      name: "NXR Mobile",
      description:
        "A restaurant management companion app powered by AI. Chat with your restaurant's AI assistant Nexy, track real-time sales data, monitor labor costs, and get instant push notifications of critical events — all from your phone. Built for restaurant owners who need to stay on top of their business anytime, anywhere.",
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
        {
          name: "React Native",
          image: "rn.jpg",
        },
        {
          name: "Type Script",
          image: "ts.png",
        },
      ],
    },
    {
      id: "2",
      name: "TaleMaster",
      description:
        "An engaging storytelling and creative writing app that helps users craft interactive tales and narratives. TaleMaster blends creativity with technology to make storytelling fun and accessible for all ages.",
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
   playstore:"https://talemaster.en.aptoide.com/app",
      languages: [
        {
          name: "React Native",
          image: "rn.jpg",
        },
        {
          name: "JavaScript",
          image: "js.png",
        },
        {name:"Firebase", image:"firebase.png"},
        {name:"OpenAI API", image:"openai.png"},
        {name:"Amazon Polly Api", image:"amazonpolly.jpg"},
      ],
    },
    {
      id: "3",
      name: "Flash Review",
      description:
        "Flash Review is an exam preparation app designed to help you study smarter, not harder. Create and review flashcards, track your progress, and ace your exams with focused study sessions. An ideal companion for students and professionals preparing for certification exams.",
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
        {
          name: "React Native",
          image: "rn.jpg",
        },
        {
          name: "Type Script",
          image: "ts.png",
        },
        {name:"MongoDB", image:"mongo.png"},
        {name:"Nest.js", image:"nest.png"},
      ],
    },
    {
      id: "4",
      name: "Meta Healthcare",
      description:
        "Meta Healthcare is committed to making it easier for you to access the care and support you need. Request support workers and allied health professionals including Occupational Therapists and Physiotherapists, stay informed about upcoming events, chat directly with our customer service team, and build a personalised profile for a seamless experience. Your well-being is our priority.",
      images: [
        "meta1.webp",
        "meta2.webp",
        "meta3.webp",
        "meta4.webp",
      ],
      logo: "metalogo.webp",
      appstore:
        "https://apps.apple.com/au/app/meta-healthcare/id6602893403",
      playstore:
        "https://play.google.com/store/apps/details?id=com.meta_heathcare_mobileapp",
      languages: [
        {
          name: "React Native",
          image: "rn.jpg",
        },
        {name: "Type Script",
          image: "ts.png",
        },
        {name:"Nest.js", image:"nest.png"},
        {name:"Zendesk API", image:"zendesk.jpg"},
      
      ],
    },
    {
      id: "5",
      name: "Runback",
      description:
        "RunBack is a behavioral fitness app that helps you build running habits through financial accountability. Set running goals, pledge refundable money, and earn it back only when you follow through — verified automatically via Strava. No gambling, no betting — just your own money and your own effort. RunBack turns procrastination into consistency using behavioral science.",
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
        {
          name: "React Native",
          image: "rn.jpg",
        },
        {
          name: "Supabase",
          image: "supabase.jpg",
        },
        {name: "Type Script",
          image: "ts.png",
        },
        {name:"Strava API", image:"strava.png"},
        {name:"Stripe API", image:"stripe.jpg"},
      ],
    },
    {
      id: "6",
      name: "Fitso",
      description:
        "Fitso is a free smart nutrition tracking app that creates personalized calorie and macronutrient plans based on your goals, lets you easily log food using barcode scanning, AI photo recognition, or manual entry, and helps you stay consistent with features like meal saving, recipe creation, and full nutrition tracking history in a simple, user-friendly interface.et obsessed with your nutrition journey! Whether you want to lose weight, gain muscle, or maintain a healthy lifestyle, Fitso provides all the tools you need, with no hidden costs."
,
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
      languages: 
        
          [
            {
              name: "React Native",
              image: "rn.jpg",
            },
            {
              name: "Type Script",
              image: "ts.png",
            },
            {name:"Firebase", image:"firebase.png"},
            {name:"Open Food Facts API", image:"openfoodfacts.png"},
      ]
        
      
    },
    {
      id: "7",
      name: "Aqua Matrix",
      description:
        "Aqua Matrix is an e-commerce Application which allows user to easily purchase their desired products.It provide two language option which is Deutsch and English.User can add product to their cart which allow user to setup multiple product on single purchase.User can edit create, login and edit account.",
      images: [
        "aquamatrix1.webp",
        "aquamatrix2.webp",
        "aquamatrix3.webp",
        "aquamatrix4.webp",
        "aquamatrix5.webp",
        "aquamatrix6.webp",
      ],
      logo: "aqualogo.webp",
      playstore:
        "https://apkpure.com/aqua-matrix/com.coral.aquamatrixn",
      languages: 
        
          [
            {
              name: "React Native",
              image: "rn.jpg",
            },
            {
              name: "JavaScript",
              image: "js.png",
            },
          
            {name:"WooCommerce API", image:"woocommerce.png"},
      ]
        
      
    }
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  tesla,
  steadyApply,
  comityhub,
  keenagile,
  amazon,
  blogSite,
  blogSummarizer,
  disney,
  NDEAR,
  WHISPER,
  LMS,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  // {
  //   id: "./resume/Himanshu_resume.pdf",
  //   title: "Resume",
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Comity Hub",
    icon: comityhub,
    iconBg: "#383E56",
    date: "July 2025 – February 2026",
    points: [
      "Rebuilt an auction platform for refurbished electronics, migrating from a legacy Java/Laravel stack to Next.js + Express.js + PostgreSQL; implemented real-time bidding, bulk listing management, and an integration-ready architecture for Salesforce.",
      "Architected and deployed a full-stack Learning Management System using Next.js, Strapi CMS, and PostgreSQL on AWS to deliver Salesforce tutorial content, streamlining vendor onboardingand reducing user support load.",
      "Independently owned the complete SDLC across both platforms — UI/UX design, frontend development, RESTful API design, PostgreSQL schema design, and production deployment — whilepartnering with the legacy development team to validate business logic.",
      "Configured a dual-environment AWS setup with 2 EC2 instances, S3 for media storage, PostgreSQL RDS, and IAM role-based access control; tuned deployment configuration and used Elastic IPaddressing to keep infrastructure lean and cost-efficient.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Keenagile",
    icon: keenagile,
    iconBg: "#383E56",
    date: "December 2024 –Jun 2025",
    points: [
      "Built multiple campaign-specific landing pages for healthcare marketing clients using HTML, CSS, JavaScript, React, Bootstrap, and Tailwind CSS, creating targeted conversion paths from social media ads to specialized content addressing patient-specific concerns.",
      "Developed responsive, mobile-optimized interfaces for Instagram and Facebook ad campaigns supporting healthcare providers, clinics, and wellness businesses across India in a fast-paced startup environment.",
      "Collaborated with senior developers on design updates and client modifications using Git/GitHub for version control, ensuring code quality and rapid deployment of marketing assets.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Whisper",
    description: `A real-time one-to-one chat application with persistent conversations, online 
  presence, typing indicators, and per-chat unread notifications. Built with an optimistic UI for 
  near-zero perceived latency and integrated with Terminal47 to offer users a choice between 
  authenticated persistent messaging and ephemeral end-to-end encrypted private rooms.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "orange-text-gradient",
      },
      {
        name: "clerk-auth",
        color: "cyan-text-gradient",
      },
    ],
    image: WHISPER,
    source_code_link:
      "https://github.com/BlackWatch021/FullStack-react-native-chat-app",
    website_link: "https://chat-app-web-c6zn.onrender.com/",
  },
  {
    name: "LearnHub — Full-Stack LMS",
    description: `A full-stack Learning Management System where instructors publish paid video courses and students enroll, pay, and track
   their progress through each chapter. Built with Next.js, Clerk auth, Stripe Checkout, and a Express + DynamoDB backend.`,
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "cyan-text-gradient",
      },
      {
        name: "clerk-auth",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "yellow-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "aws-dynamodb",
        color: "orange-text-gradient",
      },
    ],
    image: LMS,
    source_code_link: "https://github.com/BlackWatch021/Nextjs-LMS-Client",
    website_link: "https://nextjs-lms-client.vercel.app/search",
  },
  {
    name: "NDEAR Portal",
    description: `Created this winning solution with my team "VI QR Coders" during the Smart India Hackathon 2022, problem statement was given by Ministry of Education, India to help teachers/faculty of schools. Due to certain restrictions, source code and website link is not availalbe in public domain`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "yellow-text-gradient",
      },
      {
        name: "OCR (for image recognition)",
        color: "orange-text-gradient",
      },
      {
        name: "React native",
        color: "cyan-text-gradient",
      },
    ],
    image: NDEAR,
    source_code_link: "",
    website_link: "",
  },
  {
    name: "QuickReads",
    description:
      "It's an AI based application, which can summarize long articles/blogs/texts in a very short period of time. You just have to place the link of the article/blog in the provided field and you will get the summary. To do so, I have utilized one of the API provided by GPT-4. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Component",
        color: "orange-text-gradient",
      },
    ],
    image: blogSummarizer,
    source_code_link:
      "https://github.com/BlackWatch021/Blog-summarizer-OpenAI-",
    website_link: "https://blogsummarizer.netlify.app/",
  },
  {
    name: "Blog Site",
    description:
      "Made this app so that I can organize all of my blogs in a single place. It has the feature of comments, so that readers can give their insights about the blogs but to do so they have to first login. Currently the project is underway as I will be putting my blogs in some time. TILL THEN DUMMY DATA HAS BEEN USED",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "styled Component",
        color: "orange-text-gradient",
      },
      {
        name: "Google Auth(firebase)",
        color: "cyan-text-gradient",
      },
    ],
    image: blogSite,
    source_code_link: "https://github.com/BlackWatch021/Blog-site-nextJS",
    website_link: "https://personalblognextjs.vercel.app/",
  },
  {
    name: "Disney Clone",
    description:
      "Cloned the Disney+ streaming application. Included the User Authentication feature using Google Firebase. I have made the app fully responsive for all of the major devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Styled Component",
        color: "orange-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Google Auth(firebase)",
        color: "cyan-text-gradient",
      },
    ],
    image: disney,
    source_code_link: "https://github.com/BlackWatch021/Disney-clone",
    website_link: "https://himanshu-disneyplus-clone.netlify.app/",
  },

  {
    name: "Tesla Clone",
    description:
      "Cloned the TESLA electric's website. The whole application is fully responsive, so that user may get better experience across all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Component",
        color: "orange-text-gradient",
      },
    ],
    image: tesla,
    source_code_link: "https://github.com/BlackWatch021/tesla-clone",
    website_link: "https://himanshu-tesla-clone.netlify.app/",
  },
  {
    name: "Amazon Clone",
    description:
      "It's amazon's clone with included features like user authentication, product selection and production summary page. Redux is used here to improve state management for the application",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Styled Component",
        color: "orange-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Google Auth(firebase)",
        color: "cyan-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/BlackWatch021/amazon-clone",
    website_link: "https://himanshu-amazon-clone.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

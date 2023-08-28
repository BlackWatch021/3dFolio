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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  steadyApply,
  carrent,
  jobit,
  tripguide,
  threejs,
  amazon,
  blogSite,
  blogSummarizer,
  disney,
  NDEAR,
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
    title: "Front End Developer (Intern)",
    company_name: "Steady Apply",
    icon: steadyApply,
    iconBg: "#383E56",
    date: "15 December 2022 - 31 March 2023",
    points: [
      "Responsible for creating UI/UX designs of the project.",
      "Developing and maintaining web application using React.js and other tools.",
      "Collaborating with other developer to create high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Provided constructive feedback to help shape a better project.",
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

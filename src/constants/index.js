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
  threejs,
  dexlock,
  recsys,
  yieldsterscreen,
  java,
  spring,
  python,
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Dexlock",
    icon: dexlock,
    iconBg: "#E6DEDD",
    date: "September 2020 - October 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Dexlock",
    icon: dexlock,
    iconBg: "#E6DEDD",
    date: "October 2021 - August 2022",
    points: [
      "Developing and maintaining backend and API's using Spring Boot other related technologies.",
      "Collaborating with cross-functional teams including frontend engineers, product managers, and other developers to create high-quality products.",
      "Implementing Test Driven Development",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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

const education_obtained = [
  {
    university_name: "University of Birmingham",
    course: "MSc. Advanced Computer Science",
    speciality: "with Merit",
    course_duration: "2022-2023",
    subjects: [
      "Human Computer Interaction",
      "Computer Aided Verification",
      "Computer Vision",
      "Advanced Computer Networks",
      "Mobile & Ubiquitous Computing",
      "Secure Software & Hardware",
    ],
    dissertation: [
      "Hybrid Recommendation Engine using Graph Neural Networks and BERT",
    ],
    mark: "2:1",
    logo: "src/assets/uob-logo.jpeg",
    logo_alt: "uob_logo",
    url: "https://www.bham.ac.uk",
  },
  {
    university_name: "Rajagiri School of Engineering and Technology",
    course: "Computer Science and Engineering",
    speciality: "",
    course_duration: "2016-2020",
    subjects: [
      "Data Structures & Algorithms",
      "Computer Vision",
      "Design & Analysis of Algorithms",
      "Theory of Computation",
      "Compiler Design",
      "Databases",
      "Soft Computing",
      "Calculus",
      "Differential Equation",
      "Linear Algebra & Complex Analysis",
      "Graph Theory",
      "Data Mining & Warehousing",
      "+30",
    ],
    dissertation: ["Password Managing System using Ethereum Blockchain"],
    mark: "7.2/10",
    logo: "src/assets/rajagiri-logo.jpeg",
    logo_alt: "rset_logo",
    url: "https://www.rajagiritech.ac.in/Home/Index.asp",
  },
];

const projects = [
  {
    name: "Hybrid Recommendation Engine",
    description:
      "A hybrid recommendation system build using Graph Convolutional Network for collaborative filtering and a combination of BERT feature extraction and TF-IDF & Cosine Similarity for content based filtering, combined to yield better results.",
    tags: [
      {
        name: "Python",
        color: "orange-text-gradient",
      },
      {
        name: "Natural Language Processing",
        color: "green-text-gradient",
      },
      {
        name: "Content Based Filtering",
        color: "pink-text-gradient",
      },
      {
        name: "Collaborative Based Filtering",
        color: "blue-text-gradient",
      },
      {
        name: "GCN",
        color: "orange-text-gradient",
      },
    ],
    image: recsys,
    source_code_link: "https://github.com/abilmanoj1/recommendation-engine",
    showLink: false,
  },
  {
    name: "DeFi Automated Asset Management System",
    description:
      "Developed desktop user interface for a DeFi automated asset management system where users can deposit and withdraw crypto asset to vaults and strategies(automated tasks) running on each vault will divest these deposited assets into different liquidity pools to maximise users profit.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Material-UI",
        color: "orange-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
    ],
    image: yieldsterscreen,
    source_code_link: "https://v1.yieldster.finance/",
    showLink: true,
  },
  {
    name: "DeFi Automated Asset Management System - V2",
    description:
      "Co-developed the backend logic that allows to store 10000+ crypto assets in memory and fetch cost effective and high profitable path for token swapping and integrating AI based order balancer system for fractional swapping in order to maximise profits even more.",
    tags: [
      {
        name: "Spring-Boot",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "Swagger",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "pink-text-gradient",
      },
    ],
    image: yieldsterscreen,
    source_code_link: "https://yieldster.finance/",
    showLink: true,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  education_obtained,
};

import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import portfolio from "../assets/projects/project-portfolio-website.svg";
import kitScanFeat from "../assets/projects/project-kit-scan-feature.svg";

export const HERO_CONTENT = `I am a passionate Frontend Engineer with over 3 years of hands-on experience building scalable and user-friendly web applications. My expertise lies in Angular, TypeScript, JavaScript, HTML, and CSS — crafting modular, reusable, and performance-optimized UIs. Having worked extensively in the e-commerce domain at EasyEcom, I specialize in turning complex requirements into intuitive solutions that enhance customer experience and drive business growth.`;

export const ABOUT_TEXT = `I am a dedicated and detail-oriented Frontend Engineer currently working at EasyEcom, where I started as an intern and grew into a Software Development Engineer Level 2. Over the past 3+ years, I have been deeply involved in revamping legacy UIs, building new features from scratch, and ensuring code quality through modular design and reusable components. My core strength is in Angular and TypeScript, with strong proficiency in HTML, CSS, and JavaScript. I thrive in collaborative environments, enjoy solving complex UI challenges, and continuously seek ways to improve scalability and maintainability of applications. Outside of work, I actively engage in community service, fitness, and personal growth.`

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Development Engineer II (Frontend)",
    company: "EasyEcom",
    description: `Spearheaded the design and development of new UI features for the e-commerce platform, enabling onboarding of new users and improving adoption of advanced features. Migrated and modernized legacy PHP UIs to Angular, ensuring consistency and scalability across the application. Built reusable components, modular code structures, and global CSS frameworks to optimize development speed and maintainability.`,
    technologies: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    year: "2022 - 2023",
    role: "Software Development Engineer I (Frontend)",
    company: "EasyEcom",
    description: `Developed multiple user-facing features for the platform, collaborating closely with product and backend teams. Focused on responsive design, clean architecture, and enhancing the overall user experience. Improved performance and reliability of existing modules through optimization and refactoring.`,
    technologies: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    year: "2022",
    role: "Frontend Engineer Intern",
    company: "EasyEcom",
    description: `Contributed to building and enhancing web application UIs using Angular. Gained foundational experience in writing scalable code, understanding product requirements, and implementing real-world business logic in the e-commerce domain.`,
    technologies: ["Angular", "JavaScript", "HTML", "CSS"],
  },
];


export const PROJECTS = [
  {
    title: "Inventory Assignment Rule Builder",
    image: project1,
    description:
      "A dynamic Angular-based modal that allows users to configure complex inventory assignment rules with multiple conditions. Built with Reactive Forms, reusable components, and custom validations to ensure scalability and maintainability.",
    technologies: ["Angular", "TypeScript", "Reactive Forms", "HTML", "CSS"],
  },
  {
    title: "ASN Details & Workflow UI",
    image: project2,
    description:
      "Revamped the Advance Shipping Notice (ASN) interface with modular Angular components, optimized data handling, and global styling. Enhanced usability and consistency across workflows, reducing onboarding time and improving adoption.",
    technologies: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Kit Scan Feature",
    image: kitScanFeat,
    description:
      "Implemented a real-time kit scanning feature to validate SKUs instantly and prevent duplicate entries. Optimized for performance using Angular form controls and event handling, reducing processing time for warehouse teams.",
    technologies: ["Angular", "TypeScript", "JavaScript", "jQuery"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website to showcase my professional experience, projects, and technical skills, designed with a clean UI and responsive layout.",
    technologies: ["HTML", "CSS", "React", "TailwindCSS"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

import Cardify from "../assets/Cardify.png";
import Together from "../assets/Together.png";
import SocialMedia from "../assets/SocialMedia.png";

import { FaHtml5, FaCss3, FaJs, FaReact, SiNextdotjs } from "react-icons/fa";

export const skills = {
  Languages: [
    {
      name: "HTML",
      level: "Intermediate",
    },
    {
      name: "CSS",
      level: "Intermediate",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
    },
    {
      name: "C",
      level: "Intermediate",
    },
    {
      name: "C++",
      level: "Intermediate",
    },
  ],
  Frameworks: [
    {
      name: "React",
      level: "Intermediate",
    },
    {
      name: "NextJS",
      level: "Intermediate",
    },
    {
      name: "TailwindCSS",
      level: "Beginner",
    },
    {
      name: "NodeJS",
      level: "Intermediate",
    },
    {
      name: "ExpressJS",
      level: "Intermediate",
    },
  ],
  Tools: [
    {
      name: "Git",
      level: "Beginner",
    },
    {
      name: "GitHub",
      level: "Beginner",
    },
    {
      name: "VSCode",
      level: "Intermediate",
    },
    {
      name: "Postman",
      level: "Beginner",
    },
    {
      name: "MongoDB",
      level: "Beginner",
    },
    {
      name: "MySQL",
      level: "Beginner",
    },
  ],
};
export const projects = [
  {
    name: "Together",
    github: "https://github.com/swapnil0601/Together",
    live: "",
    liveAvailable: false,
    image: Together,
    description:
      "Users can Create communities and Join communities. General Feed and Search Community functionality available.",
  },
  {
    name: "Cardify",
    github: "https://github.com/swapnil0601/cardify",
    live: "",
    liveAvailable: false,
    image: Cardify,
    description:
      "Developed a Spaced Repetition Application focused on optimizing knowledge retention for MesoHacks Hackathon 2022.",
  },
  {
    name: "Social Media App",
    github: "https://github.com/swapnil0601/social-media",
    live: "https://simplysocial1.netlify.app/",
    liveAvailable: true,
    image: SocialMedia,
    description:
      "Developed a full-stack social media web application using the MERN stack. Implemented user profile creation and authentication functionalities. Integrated CRUD operations for seamless post sharing.",
  },
];

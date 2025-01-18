import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "HTML, CSS, JavaScript, TailwindCSS, React.js, MongoDB, Bootstrap,";

export const PROJECTS = [
  {
    id: 1,
    title: "Prescripto",
    description:
      "Prescripto is an online appointment booking website where users can schedule appointments with doctors or hospitals. ",
    imgSrc: project1,
    demoLink: "https://doctor-appointment-booking-website-prescripto.vercel.app/",
    githubLink: "https://github.com/rajaram2003/Doctor-Appointment-Booking-Website",
  },
  {
    id: 2,
    title: "Pizza-Website",
    description: "A Responsive Pizza Website Design Using HTML CSS And JavaScript.",
    imgSrc: project2,
    demoLink: "https://rajaram2003.github.io/Responsive-pizza-website/",
    githubLink: "https://github.com/rajaram2003/Responsive-pizza-website",
  },
  {
    id: 3,
    title: "FlavorFusion",
    description: "FlavorFusion is a modern and responsive Food Recipe App built with React.js, Tailwind CSS, and the Edamam API.",
    imgSrc: project3,
    demoLink: "https://flavor-fusion-recipe-website.vercel.app/",
    githubLink: "https://github.com/rajaram2003/Flavor-Fusion-Recipe-Website",
  },
  {
    id: 4,
    title: "Restaurant Website",
    description:
      "Modern restaurant landing page built with React, styled with Tailwind CSS.",
    imgSrc: project4,
    demoLink: "https://crisp-seven.vercel.app",
    githubLink: "https://github.com/rajaram2003/CRISP",
  },
  {
    id: 5,
    title: "Ecommerce Website",
    description: "Ecommerce Website Landing page Using React, styled with Tailwind CSS.",
    imgSrc: project5,
    demoLink: "https://ecommerce-landing-page-gdhy7hf30-rajaram2003s-projects.vercel.app",
    githubLink: "https://github.com/rajaram2003/Ecommerce-landing-page",
  },
  {
    id: 6,
    title: "Responsive-Watch-Website",
    description:
      "Responsive Watch Website Design Using HTML, CSS & JavaScript.",
    imgSrc: project6,
    demoLink: "https://rajaram2003.github.io/Responsive-Watch-Website/",
    githubLink: "https://github.com/rajaram2003/Responsive-Watch-Website",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description: "This Personal-Portfolio website made with HTML, CSS and JS.",
    imgSrc: project7,
    demoLink: "https://rajaram2003.github.io/Personal-Portfolio/#",
    githubLink: "https://github.com/rajaram2003/Personal-Portfolio",
  },
  {
    id: 8,
    title: "Real Estate Website",
    description: "A responsive Real Estate Developer website built with React JS and Tailwind CSS.",
    imgSrc: project8,
    demoLink: "https://real-estate-prime-nest.vercel.app/",
    githubLink: "https://github.com/rajaram2003/Real-Estate-Website-",
  },
  {
    id: 9,
    title: "Thar Roxx: Premium SUV Seller Web Design",
    description: "This is a modern, responsive HTML, CSS & Js Web designed for showcasing the Thar Roxx SUV.",
    imgSrc: project9,
    demoLink: "https://rajaram2003.github.io/Thar-SUV-Web-Design/",
    githubLink: "https://github.com/rajaram2003/Thar-SUV-Web-Design",
  },
];

export const ABOUT = 
  "I am a B.Tech graduate in <span style='color: lightgreen;'>Computer Science and Information Technology (CSIT)</span>. With a <span style='color: lightgreen;'>strong foundation in web development</span> from academic and personal projects, I’m eager to contribute to a professional team, bring fresh perspectives, and <span style='color: lavender;'>grow my skills as a web developer</span>.";


export const EXPERIENCES = [
  {
    company: "Gandhi Institute for Technological Advancement, Bhubaneswar B.Tech(CSIT)",
    role: "CGPA: 7.8 ",
    year: "2021-2024 - Present",
    description:
      "Worked on projects and internship while in college, gained hands-on experience in real-world web development.A passionate and ambitious fresher, ready to bring creativity and web development skills to exciting projects and grow professionally.",
  },
  {
    company: "MountLitera Zee School, Danagadi, Jajpur Road CBSE(Class XII)",
    role: "Grade: 63%",
    year: "2019-2020",
  },
  {
    company: "St. Xavier’s Sr. Secondary School, Jajpur Road CBSE(Class X)",
    role: "Grade: 75%",
    year: "2018",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/share/5F4AoGWVhM5Ey7Gj/?mibextid=qi2Omg",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://api.whatsapp.com/send?phone=917854984157&text=Hello",
    icon: <FaWhatsapp fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/rajaram_biswal_?igsh=MTAxaTJ4em0wdHAzcA==",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/rajaram2003",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://linkedin.com/in/rajaram-biswal-462272320",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I'm excited to work on new projects and take on challenges. If you have an idea or just want to chat about opportunities, I’d love to hear from you! Let’s team up and create something great together. Feel free to reach out!",
  email: "rajarambiswal123@gmail.com",
  phone: "(+91 785498415)",
};

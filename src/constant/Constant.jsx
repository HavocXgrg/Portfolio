import { FaReact, FaHtml5, FaDatabase } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contacts", href: "#contact" },
];

export const skillIcons = [
  { icon: <FaHtml5 size={40} />, name: "HTML", color: " text-orange-600 " },
  {
    icon: <RiJavascriptFill size={40} />,
    name: "JavaScript",
    color: "text-[#F7DF1E] ",
  },
  { icon: <FaReact size={40} />, name: "React", color: "text-blue-400" },
  {
    icon: <RiTailwindCssFill size={40} />,
    name: "Tailwind",
    color: "text-blue-400",
  },

  { icon: <FaDatabase size={40} />, name: "SQL", color: "text-blue-600" },
];

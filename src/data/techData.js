import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaPhp,
  FaPython,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiNestjs,
  SiMysql,
  SiVercel,
} from 'react-icons/si';
import { BiCodeCurly } from 'react-icons/bi';

export const techStack = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'Bootstrap', icon: FaBootstrap },
  { name: 'React', icon: FaReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'PHP', icon: FaPhp },
  { name: 'Python', icon: FaPython },
  { name: 'Java', icon: FaJava },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'C++', icon: SiCplusplus },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'REST APIs', icon: BiCodeCurly },
  { name: 'WebSockets', icon: BiCodeCurly },
  { name: 'TanStack Query', icon: BiCodeCurly },
  { name: 'Vercel', icon: SiVercel },
];

export const layers = [
  {
    label: 'Front-end (Presentation Layer)',
    key: 'front-end',
    tech: ['HTML', 'CSS', 'Bootstrap', 'React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'TanStack Query'],
  },
  {
    label: 'Back-end (Application Layer)',
    key: 'back-end',
      tech: ['PHP', 'Python', 'Java', 'C++', 'Node.js', 'NestJS', 'REST APIs', 'WebSockets'],
  },
  {
    label: 'Database Layer',
    key: 'database',
    tech: ['MySQL'],
  },
  {
    label: 'Infrastructure Layer',
    key: 'infrastructure',
    tech: ['Git', 'GitHub', 'Vercel'],
  },
];

const techData = {
  techStack,
  layers,
};

export default techData;


import { Project, Skill, Language } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: { en: 'Nebula Dashboard', zh: '星云控制面板' },
    description: {
      en: 'A real-time data visualization platform for cloud infrastructure monitoring.',
      zh: '用于云基础设施监控的实时数据可视化平台。'
    },
    image: 'https://picsum.photos/seed/nebula/800/450',
    tags: ['React', 'D3.js', 'Tailwind'],
    link: 'https://lingyi.tools'
  },
  {
    id: '2',
    title: { en: 'Lumina Social', zh: '光影社交' },
    description: {
      en: 'A decentralized social media application focused on privacy and encryption.',
      zh: '专注于隐私和加密的去中心化社交媒体应用。'
    },
    image: 'https://picsum.photos/seed/lumina/800/450',
    tags: ['TypeScript', 'Solidity', 'Next.js'],
    link: 'https://lingyi.tools'
  },
  {
    id: '3',
    title: { en: 'Eon AI Engine', zh: '永恒 AI 引擎' },
    description: {
      en: 'High-performance inference engine for large language models at the edge.',
      zh: '用于边缘侧大语言模型的高性能推理引擎。'
    },
    image: 'https://picsum.photos/seed/eon/800/450',
    tags: ['Python', 'Rust', 'TensorFlow'],
    link: 'https://lingyi.tools'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React/Next.js', icon: '⚛️', level: 95 },
  { name: 'TypeScript', icon: '🟦', level: 90 },
  { name: 'Node.js', icon: '🟢', level: 85 },
  { name: 'Python/AI', icon: '🐍', level: 80 },
  { name: 'UI/UX Design', icon: '🎨', level: 88 },
];

export const UI_STRINGS: Record<Language, any> = {
  en: {
    nav: { about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Get in Touch' },
    hero: {
      status: 'AVAILABLE FOR NEW PROJECTS',
      title1: 'Crafting Digital',
      title2: 'Experiences',
      description: 'Full-stack engineer specializing in high-performance web apps and AI-integrated solutions. Building the future of the web, one pixel at a time.',
      ctaWork: 'View My Work',
      ctaChat: 'Chat with My AI Twin'
    },
    about: {
      badge: 'WHO I AM',
      title: 'Architecting interfaces for the next generation of digital humans.',
      desc: 'With a background in both Fine Arts and Computer Science, I bridge the gap between imagination and execution. I don\'t just write code; I design systems that feel organic and intuitive.',
      stats: ['Years Exp.', 'Projects Done', 'Design Awards'],
      more: 'View Full Bio'
    },
    projects: { title: 'Selected Work', desc: 'A collection of projects that define my technical expertise and design philosophy.', more: 'Case Study' },
    skills: { title: 'Technical Arsenal', desc: 'My toolkit is diverse but focused. I believe in choosing the right tool for the job, focusing on performance, maintainability, and user-centric design.' },
    chat: {
      title: 'Chat with My Digital Twin',
      desc: 'Powered by Gemini AI, my digital twin knows everything about my career.',
      placeholder: 'Ask me about React, career path, or philosophy...',
      status: 'Online | Gemini 3 Flash',
      intro: "Hello! I'm the AI version of me. Ask me anything about my projects, skills, or experience!",
      thinking: 'Thinking'
    },
    footer: { cta: 'Ready to Build Something?', copyright: 'All rights reserved.', built: 'Built with' }
  },
  zh: {
    nav: { about: '关于', projects: '项目', skills: '技能', contact: '联系我' },
    hero: {
      status: '承接新项目',
      title1: '打造卓越数字',
      title2: '体验',
      description: '全栈工程师，专注于高性能 Web 应用和 AI 集成解决方案。一砖一瓦，构建 Web 的未来。',
      ctaWork: '查看作品',
      ctaChat: '与我的 AI 分身聊天'
    },
    about: {
      badge: '关于我',
      title: '为下一代数字人类构建交互架构。',
      desc: '凭借艺术与计算机科学的双重背景，我弥合了想象与执行之间的鸿沟。我不只是编写代码；我设计那些充满生命力且直观的系统。',
      stats: ['年经验', '已完成项目', '设计奖项'],
      more: '查看完整简介'
    },
    projects: { title: '精选作品', desc: '这些项目定义了我的技术专长和设计理念。', more: '案例研究' },
    skills: { title: '技术栈', desc: '我的工具箱多元而专注。我坚信为具体任务选择最合适的工具，注重性能、可维护性和以用户为中心的设计。' },
    chat: {
      title: '与我的 AI 分身对话',
      desc: '由 Gemini AI 驱动，我的数字分身了解我职业生涯的一切。',
      placeholder: '问问我关于 React、职业路径或设计理念...',
      status: '在线 | Gemini 3 Flash',
      intro: '你好！我是 AI 版的我。关于我的项目、技能或经验，欢迎随时提问！',
      thinking: '思考中'
    },
    footer: { cta: '准备好开始新项目了吗？', copyright: '版权所有。', built: '构建于' }
  }
};

export const BIO: Record<Language, string> = {
  en: `I am a Senior Software Engineer with over 8 years of experience building scalable web architectures and AI-driven applications. I specialize in the React ecosystem and have a passion for creating seamless user experiences that blend technical excellence with aesthetic beauty.`,
  zh: `我是一名拥有 8 年以上经验的高级软件工程师，专注于构建可扩展的 Web 架构和 AI 驱动的应用。我擅长 React 生态系统，热衷于创造技术卓越与美学兼备的无缝用户体验。`
};

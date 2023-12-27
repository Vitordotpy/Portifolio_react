import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  androidstudio,
  apachetomcat,
  apex,
  aws,
  c,
  c_plus_plus,
  dart,
  filezilla,
  firebase,
  flutter,
  insomnia,
  java_logo,
  lua,
  miro,
  postgresql,
  postman,
  python,
  salesforce,
  springboot,
  sql,
  sqlite,
  trello,
  mserv,
  siehp,
  sincroneasy,
  mtm,
voidmovies
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
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
    name: "docker",
    icon: docker,
  },
  { name: 'Android Studio',
   icon: androidstudio },
  { name: 'Apache Tomcat',
   icon: apachetomcat },
  { name: 'Apex',
   icon: apex },
  { name: 'AWS',
   icon: aws },
  { name: 'C',
   icon: c },
  { name: 'C++',
   icon: c_plus_plus },
  { name: 'Dart',
   icon: dart },
  { name: 'Filezilla',
   icon: filezilla },
  { name: 'Firebase',
   icon: firebase },
  { name: 'flutter',
   icon: flutter },
  { name: 'Insomnia',
   icon: insomnia },
  { name: 'Java',
   icon: java_logo },
  { name: 'Lua',
   icon: lua },
  { name: 'Miro',
   icon: miro },
  { name: 'PostgreSQL',
   icon: postgresql },
  { name: 'Postman',
   icon: postman },
  { name: 'Python',
   icon: python },
  { name: 'Salesforce',
   icon: salesforce },
  { name: 'SpringBoot',
  icon: springboot },
  { name: 'SQL', 
  icon: sql },
  { name: 'SQLite', 
  icon: sqlite },
  { name: 'Trello', 
  icon: trello },
];

const experiencespt = [
  {
    title: "Desenvolvedor Mobile",
    company_name: "Sincroneasy",
    icon: sincroneasy,
    iconBg: "#F4A259",
    date: "Maio 2021 - Maio 2022",
    points: [
      "Desenvolver e manter aplicações móveis utilizando Java, Flutter e outras tecnologias relacionadas.",
      "Colaborar com equipas multifuncionais, incluindo designers, gestores de produto e outros programadores, para criar produtos de alta qualidade",
      "Implementar um design reativo e garantir a compatibilidade dos dispositivos.",
      "Participar em revisões de código e fornecer feedback construtivo a outros programadores.",
    ],
  },
  {
    title: "Salesforce Developer",
    company_name: "MSERV TI",
    icon: mserv,
    iconBg: "#2A628F",
    date: "Maio 2023 - Hoje",
    points: [
      "Desenvolver e manter soluções Salesforce utilizando Apex e outras tecnologias relacionadas.",
      "Colaborar com outros programadores para obter soluções rápidas e excelentes para todo o tipo de problemas e produtos.",
      "Participar em revisões de código e fornecer feedback construtivo a outros programadores.",
    ],
  },
  {
    title: "Backend and QA",
    company_name: "SIEHP",
    icon: siehp,
    iconBg: "#AA20AC",
    date: "Nov 2023 - Dez 2024",
    points: [
      "Desenvolver e manter aplicações web utilizando React.js, Next.js e outras tecnologias relacionadas.",
      "Colaborar com equipas multifuncionais, incluindo designers, gestores de produto e outros programadores, para criar produtos de alta qualidade.",
      "Implementar um design reativo e garantir a compatibilidade entre browsers.",       
      "Participar em testes e revisões de código como QA.",
    ],
  },
];
const experiencesen = [
  {
    title: "Mobile Developer",
    company_name: "Sincroneasy",
    icon: sincroneasy,
    iconBg: "#F4A259",
    date: "May 2021 - May 2022",
    points: [
      "Developing and maintaining mobile applications using Java, Flutter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring devices compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Salesforce Developer",
    company_name: "MSERV TI",
    icon: mserv,
    iconBg: "#2A628F",
    date: "May 2023 - Today",
    points: [
      "Developing and maintaining Salesforce solutions using Apex and other related technologies.",
      "Collaborating with other developers to achieve fast and great solutions for every kind of problems and products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend and QA",
    company_name: "SIEHP",
    icon: siehp,
    iconBg: "#AA20AC",
    date: "Nov 2023 - Dec 2024",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in tests and code reviews as QA.",
    ],
  },
];

const projectsen = [
  {
    name: "Masters Trade Market",
    description:
      "Mobile application that allows players to trade items through an interactive catalog and chat between Digimon Masters Online players.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "blue-text-gradient",
      },{
        name: "firebase",
        color: "orange-text-gradient"
      }
,
    ],
    image: mtm,
    source_code_link: "https://play.google.com/store/apps/details?id=com.void_tech.masters_trade_market",
  },
  {
    name: "Void Movies",
    description:
      "Web application that allows users to view and give their opinions on today's top films.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },{
        name: "javascript",
        color: "orange-text-gradient",
      }
    ],
    image: voidmovies,
    source_code_link: "https://voidmovies.web.app/",
  },
];
const projectspt = [
  {
    name: "Masters Trade Market",
    description:
      "Aplicação móvel que permite que jogadores possam realizar trocas de itens através de um catálogo e chat interativos entre jogadores de Digimon Masters Online.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "blue-text-gradient",
      },{
        name: "firebase",
        color: "orange-text-gradient"
      }
,
    ],
    image: mtm,
    source_code_link: "https://play.google.com/store/apps/details?id=com.void_tech.masters_trade_market",
  },
  {
    name: "Void Movies",
    description:
      "Aplicação web que permite o usuário visualizar e opinar sobre os principais filmes da atualidade.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },{
        name: "javascript",
        color: "orange-text-gradient",
      }
    ],
    image: voidmovies,
    source_code_link: "https://voidmovies.web.app/",
  },
];

const texts = {
  hellopt: "Oi, sou ",
  helloen: "Hi, i'm ",
  jobpt: "Engenheiro de Software",
  joben: "Software Engineer",
  overviewheaderpt: "Introdução",
  overviewheaderen: "Introduction",
  overviewpt: "Visão Geral.",
  overviewen: "Overview.",
  overtexten: `I thrive on challenges and constantly seek opportunities to
  expand my skill set. My journey in the world of software
  engineering has equipped me with a solid foundation in various
  programming languages, software development methodologies,
  and a knack for problem-solving. I am deeply committed to
  delivering high-quality, scalable, and efficient software solutions
  that leave a lasting impact.`,
  overtextpt: `Olá, sou Vitor Moura, um engenheiro de software apaixonado
   especializado em soluções para mobile, web e inteligência artificial. 
   Ao longo da minha carreira dinâmica, destaco-me por contribuições 
   significativas em projetos inovadores que impactam positivamente a 
   vida das pessoas. Minha motivação reside na transformação de ideias 
   em realidade, impulsionada pela crença no poder da tecnologia para 
   resolver desafios complexos. Adoto uma filosofia de trabalho centrada 
   na eficiência, qualidade e colaboração, buscando constantemente a 
   excelência. Trabalho não apenas como uma carreira, mas como uma vocação,
   comprometido em aplicar a tecnologia com ética e propósito para 
   construir um futuro mais inovador e inclusivo. Vamos juntos construir o futuro.`,
  workheaderpt: "O que ja fiz até agora",
  workheaderen: "What i have done so far",
  workexppt: "Experiência.",
  workexpen: "Work Experience.",
  myworkpt: "Meu Trabalho",
  myworken: "My Work",
  myworktextpt: "Todo",
  myworktexten: "Todo",
  contactheaderpt: "Entre em contato",
  contactheaderen: "Get in touch",
  contactpt: "Contato",
  contacten: "Contact",
  contactnamept: "Seu Nome",
  contactnameen: "Your Name",
  contactemailpt: "Seu E-mail",
  contactemailen: "Your E-mail",
  contactmessagept: "Mensagem",
  contactmessageen: "Message",
  contactsendpt: "Enviar",
  contactsenden: "Send",
  contactsendingpt: "Enviando...",
  contactsendingen: "Sending...",
  contactnamephpt: "Qual o seu nome ?",
  contactnamephen: "What's your name ?",
  contactemailphpt: "Qual seu e-mail ?",
  contactemailphen: "What's your e-mail ?",
  contactmessagephpt: "Escreva aqui sua mensagem",
  contactmessagephen: "Write your message here.",
  languagept: "Língua",
  languageen: "Language",
  scrolldownpt: "Role Abaixo",
  scrolldownen: "Scroll Down",
  myprojectspt: "Projetos.",
  myprojectsen: "Projects.",
  aboutpt: "Sobre",
  abouten: "About",
  workpt: "Trabalho",
  worken: "Work",
};

export { technologies, experiencesen, experiencespt, projectspt, projectsen, texts };
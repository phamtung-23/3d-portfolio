import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { DiRedis } from "react-icons/di";
import { FaAws } from "react-icons/fa6";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiAngular,
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGitlab,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiSentry,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiSwagger,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BsFiletypeCss, BsFiletypeXml } from "react-icons/bs";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  angular: {
    title: "Angular",
    bg: "black",
    fg: "white",
    icon: <SiAngular />,
  },
  nestjs: {
    title: "NestJS",
    bg: "black",
    fg: "white",
    icon: <SiNestjs />,
  },
  graphql: {
    title: "GraphQL",
    bg: "black",
    fg: "white",
    icon: <SiGraphql />,
  },
  github: {
    title: "GitHub",
    bg: "black",
    fg: "white",
    icon: <SiGithub />,
  },
  gitlab: {
    title: "GitLab",
    bg: "black",
    fg: "white",
    icon: <SiGitlab />,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <FaAws />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <DiRedis />,
  },
  sentry: {
    title: "Sentry",
    bg: "black",
    fg: "white",
    icon: <SiSentry />,
  },
  swagger: {
    title: "Swagger",
    bg: "black",
    fg: "white",
    icon: <SiSwagger />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  xml: {
    title: "XML",
    bg: "black",
    fg: "white",
    icon: <BsFiletypeXml />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <BsFiletypeCss />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "nymusic",
    category: "E-commerce Platform",
    title: "NY Music",
    src: "/assets/projects-screenshots/ny_music/ny_music.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.angular,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.nestjs,
        PROJECT_SKILLS.graphql,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.aws,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.github,
      ],
    },
    live: "https://nymusickr.com",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            NY Music is a scalable e-commerce platform specializing in Korean music products and 
            merchandise from K-pop artists. Built with Vendure framework for enterprise-level performance.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              `${BASE_PATH}/ny_music/ny_music_1.png`,
              `${BASE_PATH}/ny_music/ny_music_2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono mb-2">
              <strong>High Performance:</strong> Optimized to handle over 200 concurrent users
            </li>
            <li className="font-mono mb-2">
              <strong>Scalable Architecture:</strong> Implemented replica databases and Redis caching
            </li>
            <li className="font-mono mb-2">
              <strong>Modern APIs:</strong> Built with NestJS and GraphQL for efficient data fetching
            </li>
            <li className="font-mono mb-2">
              <strong>Enhanced Admin:</strong> Customized admin dashboard using AngularJS
            </li>
            <li className="font-mono mb-2">
              <strong>CI/CD Pipeline:</strong> Multi-stage deployment with GitHub Actions
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technologies Used</TypographyH3>
          <p className="font-mono mb-2">
            Vendure, NestJS, GraphQL, PostgreSQL, Redis, AngularJS, GitHub Actions
          </p>
        </div>
      );
    },
  },
  {
    id: "conceptk",
    category: "E-commerce Platform",
    title: "Concept K",
    src: "/assets/projects-screenshots/conceptk/conceptk.jpg",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
      ],
      backend: [
        PROJECT_SKILLS.nestjs,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.graphql,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.gitlab,
        PROJECT_SKILLS.redis,
      ],
    },
    live: "https://conceptk.vn",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Concept K is a comprehensive e-commerce platform specializing in beauty and cosmetic products. 
            Built with Vendure framework to ensure scalability and maintainability for high-traffic retail operations.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              `${BASE_PATH}/conceptk/cc_1.png`,
              `${BASE_PATH}/conceptk/cc_2.png`,
              `${BASE_PATH}/conceptk/cc_3.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono mb-2">
              <strong>Scalable Architecture:</strong> Built with Vendure for enterprise-level e-commerce
            </li>
            <li className="font-mono mb-2">
              <strong>Modern APIs:</strong> NestJS and GraphQL integration for efficient data management
            </li>
            <li className="font-mono mb-2">
              <strong>Enhanced Admin Panel:</strong> Customized AngularJS admin dashboard
            </li>
            <li className="font-mono mb-2">
              <strong>Logistics Integration:</strong> Integrated with Giao Hang Tiet Kiem via webhooks
            </li>
            <li className="font-mono mb-2">
              <strong>Payment Gateway:</strong> Secure payment processing with Megapay integration
            </li>
            <li className="font-mono mb-2">
              <strong>CI/CD Pipeline:</strong> Streamlined deployment with GitLab CI/CD
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technologies Used</TypographyH3>
          <p className="font-mono mb-2">
            Vendure, NestJS, GraphQL, PostgreSQL, AngularJS, GitLab CI/CD
          </p>
        </div>
      );
    },
  },
  {
    id: "j2c-management",
    category: "Construction Management",
    title: "J2C Management Building Systems",
    src: "/assets/projects-screenshots/j2c/j2c.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.sentry,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.swagger,
      ],
    },
    live: "#",
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            J2C Management Building Systems is a comprehensive construction project management platform 
            that handles over 200 construction projects, monitors more than 300 contractors and material 
            suppliers, and manages over 1,000 invoices. Built for UK clients with modern web technologies.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              `${BASE_PATH}/j2c/j2c.png`,
              `${BASE_PATH}/j2c/j2c_1.png`
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono mb-2">
              <strong>Large Scale Management:</strong> Handles 200+ construction projects and 300+ contractors
            </li>
            <li className="font-mono mb-2">
              <strong>Invoice Management:</strong> Comprehensive system for managing 1,000+ invoices
            </li>
            <li className="font-mono mb-2">
              <strong>UK Client Collaboration:</strong> Direct collaboration with UK clients for requirements
            </li>
            <li className="font-mono mb-2">
              <strong>Modern Architecture:</strong> Next.js with SSR and SSG for optimal performance
            </li>
            <li className="font-mono mb-2">
              <strong>Secure Authentication:</strong> NextAuth.js with secure session management
            </li>
            <li className="font-mono mb-2">
              <strong>Third-party Integrations:</strong> QuickBooks API for invoice management
            </li>
            <li className="font-mono mb-2">
              <strong>AI Integration:</strong> OpenAI chatbot for user support
            </li>
            <li className="font-mono mb-2">
              <strong>Document Processing:</strong> Azure Document Intelligence for invoice scanning
            </li>
            <li className="font-mono mb-2">
              <strong>Error Monitoring:</strong> Sentry integration for log tracking
            </li>
            <li className="font-mono mb-2">
              <strong>Push Notifications:</strong> Firebase Cloud Messaging for real-time notifications
            </li>
            <li className="font-mono mb-2">
              <strong>CI/CD Pipeline:</strong> GitHub Actions for automated testing and deployment
            </li>
            <li className="font-mono mb-2">
              <strong>Quality Assurance:</strong> Unit and integration tests with Jest and React Testing Library
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technologies Used</TypographyH3>
          <p className="font-mono mb-2">
            Next.js, TypeScript, MongoDB, Docker, Material UI, Sentry, GitHub Actions, 
            NextAuth.js, QuickBooks API, OpenAI API, Azure Document Intelligence, Firebase Cloud Messaging
          </p>
        </div>
      );
    },
  },
  {
    id: "ptsc-oil-gas",
    category: "Mobile Application",
    title: "PTSC Oil - Gas Management",
    src: "/assets/projects-screenshots/ptsc/ptsc.jpg",
    screenshots: ["1.png"],
    live: "#",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.swagger,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            PTSC Oil - Gas Management is a comprehensive mobile application for PetroVietnam Technical 
            Services Corporation (PTSC) that provides information on oil and gas rigs in the Vietnamese sea. 
            The platform includes interactive maps with locations of plots, platforms, and available services, 
            supporting over 500 users.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono mb-2">
              <strong>Interactive Maps:</strong> Detailed maps showing oil and gas rig locations in Vietnamese waters
            </li>
            <li className="font-mono mb-2">
              <strong>Platform Information:</strong> Comprehensive data on plots, platforms, and available services
            </li>
            <li className="font-mono mb-2">
              <strong>User Management:</strong> Supports over 500 active users
            </li>
            <li className="font-mono mb-2">
              <strong>API Development:</strong> Built robust APIs using Node.js and Express.js
            </li>
            <li className="font-mono mb-2">
              <strong>Dashboard Management:</strong> Administrative dashboard for data management
            </li>
            <li className="font-mono mb-2">
              <strong>Documentation:</strong> Comprehensive API documentation using Swagger
            </li>
            <li className="font-mono mb-2">
              <strong>CI/CD Pipeline:</strong> Automated build, test, and deployment with GitHub Actions
            </li>
            <li className="font-mono mb-2">
              <strong>Server Monitoring:</strong> Zabbix monitoring with downtime notifications
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technologies Used</TypographyH3>
          <p className="font-mono mb-2">
            Express.js, Node.js, MongoDB, Docker, GitHub Actions, Zabbix, Swagger
          </p>
        </div>
      );
    },
  },
  {
    id: "cocoro-life",
    category: "E-commerce Platform",
    title: "Cocoro Life E-Commerce",
    src: "/assets/projects-screenshots/cocorolife/co.png",
    screenshots: ["1.png"],
    live: "https://www.cocorolife.vn",
    skills: {
      frontend: [
        PROJECT_SKILLS.xml,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.php,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Cocoro Life E-Commerce is a comprehensive e-commerce platform developed in collaboration 
            with Sharp Vietnam using Magento 2 and PHP. The platform manages over 4,000 users and 
            more than 2,000 products with robust server monitoring and management capabilities.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              `${BASE_PATH}/cocorolife/co.png`,
              `${BASE_PATH}/cocorolife/co_1.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono mb-2">
              <strong>Large User Base:</strong> Successfully manages over 4,000 active users
            </li>
            <li className="font-mono mb-2">
              <strong>Extensive Product Catalog:</strong> Handles more than 2,000 products
            </li>
            <li className="font-mono mb-2">
              <strong>Magento 2 Platform:</strong> Built on enterprise-grade Magento 2 framework
            </li>
            <li className="font-mono mb-2">
              <strong>Custom UI Development:</strong> Designed and developed user interface using PHP
            </li>
            <li className="font-mono mb-2">
              <strong>Sharp Vietnam Collaboration:</strong> Collaborated directly with Sharp Vietnam team
            </li>
            <li className="font-mono mb-2">
              <strong>Server Monitoring:</strong> Implemented comprehensive monitoring with Zabbix and New Relic
            </li>
            <li className="font-mono mb-2">
              <strong>Containerized Deployment:</strong> Docker implementation for consistent environments
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technologies Used</TypographyH3>
          <p className="font-mono mb-2">
            Magento 2, PHP, MySQL, Docker, Zabbix, New Relic
          </p>
        </div>
      );
    },
  },
  // {
  //   id: "ghostchat",
  //   category: "Anonymous chat",
  //   title: "GhostChat",
  //   src: "/assets/projects-screenshots/ghostchat/1.png",
  //   screenshots: ["1.png", "2.png", "3.png", "4.png"],
  //   live: "https://ghostchat.vercel.app",
  //   github:"https://github.com/Naresh-Khatri/GhostChat",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
  //     backend: [PROJECT_SKILLS.supabase],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Ghostchat is your go-to spot for sending anonymous messages without
  //           leaving a trace. Powered by Supabase, it&apos;s all about keeping things
  //           low-key and secure. Whether you&apos;re sharing secrets, giving feedback,
  //           or just having some fun, Ghostchat ensures your identity stays
  //           hidden, while your voice is heard. Say what you want, without the
  //           worry.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/ghostchat/1.png`,
  //             `${BASE_PATH}/ghostchat/2.png`,
  //             `${BASE_PATH}/ghostchat/3.png`,
  //             `${BASE_PATH}/ghostchat/4.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "jra",
  //   category: "Result analyzer",
  //   title: "JNTUA Results Analyzer",
  //   src: "/assets/projects-screenshots/jra/1.png",
  //   screenshots: ["1.png"],
  //   live: "https://naresh-khatri.github.io/JNTUA-result-analyser-spa/#/",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.mongo,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.docker,
  //     ],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           JNTUA Results Analyzer was a revolutionary tool designed to simplify
  //           and enhance the experience of accessing academic results. It served
  //           as a powerful proxy between the JNTUA university results website and
  //           its users, offering a range of features that made result analysis
  //           faster and more efficient. Here&apos;s what made it stand out:
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />
  //         <TypographyH3 className="my-4 mt-8">
  //           Effortless Results Retrieval
  //         </TypographyH3>
  //         {/* Effortless Results Retrieval: */}
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Search all your results using a single roll number, eliminating
  //             the tedious task of sifting through thousands of rows on the
  //             official site.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             class-wise results effortlessly by entering a roll number range.
  //             No more manual searches or filtering.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Faculty members could download batch results in Excel format,
  //             making administrative tasks a breeze.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">
  //           Enhanced Data Insights:
  //         </TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Each result came with additional features including:
  //             <ul className="list-disc font-mono ml-6">
  //               <li>
  //                 <strong>CGPA Calculations: </strong>Easily track your
  //                 cumulative grade point average.
  //               </li>
  //               <li>
  //                 <strong>Charts:</strong> Visualize your academic performance
  //                 with comprehensive charts.
  //               </li>
  //               <li>
  //                 <strong>Future Projections:</strong> Get insights into
  //                 potential future outcomes based on current performance.
  //               </li>
  //               <li>
  //                 <strong> Backlog Counts: </strong>Keep track of your backlog
  //                 subjects at a glance.
  //               </li>
  //             </ul>
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             The application was significantly faster and more efficient than
  //             the official site, providing a smoother user experience.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Unfortunately, as of May 2022, the tool stopped working due to the
  //             introduction of CAPTCHA on the official JNTUA results site, which
  //             disrupted the seamless functionality of the app. JNTUA Results
  //             Analyzer transformed the way students and faculty interacted with
  //             academic results, making it a must-have tool until its unexpected
  //             shutdown.
  //           </li>
  //         </ul>
  //       </div>
  //     );
  //   },
  // },
];
export default projects;

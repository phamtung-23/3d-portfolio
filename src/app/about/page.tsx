"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiKubuntu,
  SiNestjs,
  SiPm2,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "ptung230801@gmail.com",
    href: "mailto:ptung230801@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "+84 35966****",
    href: "tel:+8435966****",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pham-thanh-tung-1555a4301/",
    content: "/pham-thanh-tung",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/phamtung-23",
    content: "/phamtung-23",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  // {
  //   name: "JavaScript",
  //   content: "JavaScript is a high-level, interpreted programming language",
  //   icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
  //   color: "#f0db4f",
  // },
  {
    name: "Nest.js",
    content:
      "Nest.js is a progressive Node.js framework for building efficient and scalable server-side applications",
    icon: <SiNestjs size={"50px"} color="#e0234e" />,
    color: "#e0234e",
  },
  {
    name: "GraphQL",
    content:
      "GraphQL is a query language for APIs and a runtime for executing those queries with your existing data.",
    icon: <SiGraphql size={"50px"} color="#e535ab" />,
    color: "#e535ab",
  },
  {
    name: "TypeScript",
    content: "TypeScript is a superset of JavaScript that compiles to plain JS",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "Next.js",
    content: "Next.js is a React framework for production",
    icon: <RiNextjsFill size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "React.js",
    content: "React is a JavaScript library for building user interfaces",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  // {
  //   name: "Node.js",
  //   content: "Node.js is a JavaScript runtime built on Chrome's V8 engine",
  //   icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
  //   color: "#6cc24a",
  // },
  {
    name: "Express.js",
    content: "Express.js is a minimal web framework for Node.js",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    content: "PostgreSQL is a powerful, open source object-relational database",
    icon: <DiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "MongoDB",
    content: "MongoDB is a NoSQL document database",
    icon: <DiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Docker",
    content: "Docker is a containerization platform",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "AWS",
    content: "Amazon Web Services cloud platform",
    icon: <FaAws size={"50px"} color="#FF9900" />,
    color: "#FF9900",
  },
  {
    name: "Git",
    content: "Git is a distributed version control system",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  // {
  //   name: "GitHub",
  //   content: "GitHub is a web-based hosting service for version control",
  //   icon: <FaGithub size={"50px"} color="#fff" />,
  //   color: "#000000",
  // },
  // {
  //   name: "HTML",
  //   content: "HTML is the standard markup language for web pages",
  //   icon: <FaHtml5 size={"50px"} color="#e34c26" />,
  //   color: "#e34c26",
  // },
  // {
  //   name: "CSS",
  //   content: "CSS is used for styling web pages",
  //   icon: <FaCss3 size={"50px"} color="#563d7c" />,
  //   color: "#563d7c",
  // },
  // {
  //   name: "Tailwind CSS",
  //   content: "Tailwind CSS is a utility-first CSS framework",
  //   icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
  //   color: "#06b6d4",
  // },
  // {
  //   name: "VS Code",
  //   content: "Visual Studio Code is a source-code editor",
  //   icon: <SiVisualstudiocode size={"50px"} color="#007acc" />,
  //   color: "#007acc",
  // },
  // {
  //   name: "Terminal",
  //   content: "Command line interface for system operations",
  //   icon: <TbTerminal2 size={"50px"} color="#fff" />,
  //   color: "#000000",
  // },
  // {
  //   name: "NPM",
  //   content: "NPM is a package manager for JavaScript",
  //   icon: <DiNpm size={"50px"} color="#CB3837" />,
  //   color: "#CB3837",
  // },
  // {
  //   name: "Vercel",
  //   content: "Vercel is a cloud platform for static sites and serverless functions",
  //   icon: <SiVercel size={"50px"} color="#fff" />,
  //   color: "#000000",
  // },
  // {
  //   name: "Linux",
  //   content: "Linux is an open-source operating system",
  //   icon: <FaLinux size={"50px"} color="#fff" />,
  //   color: "#000000",
  // },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="p-4 aspect-square  bg-zinc-800 object-cover"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Pham Thanh Tung</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Software Engineer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Hey there! I&apos;m Pham Thanh Tung, a passionate Software
              Engineer with over 2 years of experience in full-stack
              development. I specialize in building scalable e-commerce systems
              and web applications using modern technologies like Next.js,
              Node.js, NestJS, and various databases including PostgreSQL and
              MongoDB.
            </p>
            <p className="mb-10">
              Currently working at Burning Bros, I&apos;ve developed e-commerce
              platforms that handle over 200 concurrent users, built robust APIs
              with GraphQL and REST, and optimized CI/CD pipelines. My
              experience spans from working with Korean music e-commerce
              platforms to building management systems for construction projects
              with UK clients.
            </p>
            <p className="mb-10">
              I&apos;m passionate about creating efficient, maintainable code
              and always eager to learn new technologies. When I&apos;m not
              coding, I enjoy exploring the latest tech trends and contributing
              to meaningful projects that make a difference.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;

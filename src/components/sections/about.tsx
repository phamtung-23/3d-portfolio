import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaReact,
} from "react-icons/fa6";
import {
  RiNextjsFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiGraphql,
  SiNestjs,
  SiTypescript,
} from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
];

const AboutSection = () => {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  
  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <section id="about" className="w-full min-h-screen md:min-h-[150dvh] py-10 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] max-w-full">
        <Link href={"#about"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-10 md:mb-20",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 "
              )}
            >
              ABOUT
            </h2>
          </BoxReveal>
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-3 md:gap-5 w-full overflow-hidden">
          <aside className="w-full md:basis-1/4">
            <BoxReveal width="100%">
              <div
                className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600 bg-black/20 dark:bg-white/5"
                style={{
                  backdropFilter: "blur(100px)",
                }}
              >
                <div className="flex flex-row lg:flex-col items-center">
                  <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                    <Image
                      className="p-4 aspect-square bg-zinc-800 object-cover rounded-xl"
                      alt="Pham Thanh Tung"
                      src="/assets/me.jpg"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                    <p className="text-center text-xl text-black dark:text-white">Pham Thanh Tung</p>
                    <div className="text-xs bg-zinc-700 text-white w-fit px-3 py-1 rounded-full">
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
                          className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md transition-colors"
                          href={link.href}
                        >
                          <div className="w-8 text-white">{link.icon}</div>
                          <div className="flex flex-col">
                            <div className="text-sm text-white">{link.name}</div>
                            <div className="text-xs text-zinc-400">
                              {link.content}
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BoxReveal>
          </aside>
          
          <main className="basis-3/4 min-w-0">
            <BoxReveal width="100%">
              <div
                className="p-6 md:p-10 border-[.5px] rounded-md border-zinc-600 bg-black/20 dark:bg-white/5"
                style={{ backdropFilter: "blur(100px)" }}
              >
                <h1 className="text-2xl md:text-3xl mb-6 md:mb-10 text-black dark:text-white">About me</h1>
                <div className="space-y-4 md:space-y-6 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-none">
                  <p className="break-words">
                    Hey there! I&apos;m Pham Thanh Tung, a passionate Software
                    Engineer with over 2 years of experience in full-stack
                    development. I specialize in building scalable e-commerce systems
                    and web applications using modern technologies like Next.js,
                    Node.js, NestJS, and various databases including PostgreSQL and
                    MongoDB.
                  </p>
                  <p className="break-words">
                    Currently working at Burning Bros, I&apos;ve developed e-commerce
                    platforms that handle over 200 concurrent users, built robust APIs
                    with GraphQL and REST, and optimized CI/CD pipelines. My
                    experience spans from working with Korean music e-commerce
                    platforms to building management systems for construction projects
                    with UK clients.
                  </p>
                  <p className="break-words">
                    I&apos;m passionate about creating efficient, maintainable code
                    and always eager to learn new technologies. When I&apos;m not
                    coding, I enjoy exploring the latest tech trends and contributing
                    to meaningful projects that make a difference.
                  </p>
                </div>
                
                <h2 className="text-2xl md:text-3xl mt-12 md:mt-16 mb-6 md:mb-10 text-black dark:text-white">Stuff I use</h2>
                <div className="mb-5">
                  {!toolsLoaded ? (
                    <div className="h-[100px] bg-zinc-800/50 rounded-md animate-pulse"></div>
                  ) : (
                    <Splide
                      options={{
                        type: "loop",
                        interval: 2000,
                        autoplay: true,
                        pagination: false,
                        speed: 2000,
                        perPage: 6,
                        perMove: 1,
                        rewind: true,
                        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                        arrows: false,
                        gap: "1rem",
                        breakpoints: {
                          640: {
                            perPage: 2,
                          },
                          768: {
                            perPage: 3,
                          },
                          1024: {
                            perPage: 4,
                          },
                        },
                      }}
                      aria-label="Technologies I use"
                    >
                      {TOOLS.map((tool) => (
                        <SplideSlide key={tool.name}>
                          <div
                            className="w-fit p-4 border-[.5px] border-zinc-600 rounded-md bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors mx-auto"
                            title={tool.content}
                          >
                            {tool.icon}
                          </div>
                        </SplideSlide>
                      ))}
                    </Splide>
                  )}
                </div>
              </div>
            </BoxReveal>
          </main>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

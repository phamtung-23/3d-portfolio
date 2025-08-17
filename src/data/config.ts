const config = {
  title: "Pham Thanh Tung | Software Engineer",
  description: {
    long: "Explore the portfolio of Pham Thanh Tung, a software engineer specializing in modern web technologies, interactive applications, and innovative software solutions. Discover my latest projects and let's build something amazing together!",
    short:
      "Discover the portfolio of Pham Thanh Tung, a software engineer creating modern web applications and innovative software solutions.",
  },
  keywords: [
    "Pham Thanh Tung",
    "portfolio",
    "software engineer",
    "web development",
    "interactive applications",
    "modern web technologies",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "web design",
    "software development",
  ],
  author: "Pham Thanh Tung",
  email: "ptung230801@gmail.com",
  site: "https://phamthanhtung.dev",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/pham-thanh-tung-1555a4301/",
    instagram: "#",
    facebook: "https://www.facebook.com/phamthanhtung",
    github: "https://github.com/phamtung-23",
  },
};
export { config };

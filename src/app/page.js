"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { AnimatedBackground } from "./components/AnimatedBackground";
import Image from "next/image";

const skills = [
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "HTML/CSS", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git", level: 80 },
];

const projects = [
  {
    title: "Task Management App",
    description:
      "React application using Redux for state management and Firebase for data storage.",
    tech: ["React", "Zustand", "Firebase", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#",
    iframeUrl: "https://yegorikk.github.io/tic-tac-react/",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio website built with Next.js and Framer Motion for animations.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#",
    iframeUrl: "https://portfolio-demo.com",
  },
];

const contacts = [
  {
    title: "Email",
    value: "0yegorstep0@gmail.com",
    icon: "/email.svg",
    link: "mailto:0yegorstep0@gmail.com",
    animation: { rotate: [0, 10, -10, 0], transition: { duration: 0.1 } },
  },
  {
    title: "Phone",
    value: "+380 99 926 02 58",
    icon: "/phone.svg",
    link: "tel:+380999260258",
    animation: { rotate: [0, 10, -10, 0], transition: { duration: 0.1 } },
  },
  {
    title: "Telegram",
    value: "@Yegorikkk",
    icon: "/telegram.svg",
    link: "https://t.me/Yegorikkk",
    animation: { rotate: [0, 10, -10, 0], transition: { duration: 0.1 } },
  },
  {
    title: "GitHub",
    value: "github.com/Yegorikk",
    icon: "/github.svg",
    link: "https://github.com/Yegorikk",
    animation: { rotate: [0, 10, -10, 0], transition: { duration: 0.1 } },
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);
    document.documentElement.setAttribute(
      "data-theme",
      prefersDark ? "dark" : "light"
    );
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <>
      <AnimatedBackground />
      <main className="relative min-h-screen transition-colors duration-300 bg-background text-text">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
          style={{ scaleX }}
        />

        {/* Theme Toggle */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 p-2 rounded-full bg-secondary shadow-lg z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? "☀️" : "🌙"}
        </motion.button>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto pt-20 px-8 md:px-16 relative z-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4 text-text"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1 }}
              >
                Hi, I'm Yegor Popov 👋
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl opacity-90 mb-8 text-text"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.2 }}
              >
                Junior Frontend Developer crafting modern web applications
              </motion.p>
              <motion.div
                className="flex gap-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.4 }}
              >
                <motion.a
                  href="#contacts"
                  className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all duration-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-secondary transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </motion.div>
            </div>
            <motion.div
              className="md:w-1/3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.6 }}
            >
              <motion.div
                className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-600"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/avatar.webp"
                  alt="Yegor Popov"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section className="max-w-4xl mx-auto py-16 px-8 md:px-16 relative z-100">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-card p-4 rounded-lg shadow-sm"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-border bg-opacity-20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="max-w-4xl mx-auto py-16 px-8 md:px-16 relative z-100"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <iframe
                      src={project.iframeUrl}
                      title={project.title}
                      className="w-full h-full border-none transform scale-125"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="opacity-90 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-border text-accent rounded-full text-sm"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demoLink}
                      className="text-accent hover:underline"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      className="text-accent hover:underline"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contacts Section */}
        <section
          id="contacts"
          className="max-w-4xl mx-auto py-16 px-8 md:px-16 relative z-100"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {contacts.map((contact, index) => (
              <motion.a
                href={contact.link}
                key={contact.title}
                className="group bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-12 h-12 relative"
                    whileHover={contact.animation}
                  >
                    <Image
                      src={contact.icon}
                      alt={contact.title}
                      fill
                      className={`object-contain ${darkMode ? "invert" : ""}`}
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-accent group-hover:text-primary transition-colors">
                      {contact.title}
                    </h3>
                    <p className="text-text opacity-80">{contact.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Resume Download Card */}
            <motion.a
              href="/resume.pdf"
              download
              className="group bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center space-x-4">
                <motion.div
                  className="w-12 h-12 relative"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.1 },
                  }}
                >
                  <Image
                    src="/file.svg"
                    alt="Resume"
                    fill
                    className={`object-contain ${darkMode ? "invert" : ""}`}
                  />
                </motion.div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-accent group-hover:text-primary transition-colors">
                    Download Resume
                  </h3>
                  <p className="text-text opacity-80">
                    Get my full CV in PDF format
                  </p>
                </div>
              </div>
            </motion.a>
          </div>
        </section>
      </main>
    </>
  );
}

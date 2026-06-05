import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

function Home() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      scope.current,
      { x: ["200px", "0px"], rotate: [15, 0], opacity: [0, 1] },
      { duration: 0.8, ease: [0.2, 0, 0.8, 1] },
    );
  }, []);

  return (
    <main style={{ overflow: "visible" }}>
      <section
        className="flex flex-col items-center justify-center px-8 md:px-16 text-center"
        style={{ minHeight: "calc(100vh - 73px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-7 leading-none font-black uppercase mb-1"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontSize: 20,
            color: "#3d0012",
          }}
        >
          Frontend Developer{" "}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 leading-none font-black uppercase mb-12"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(40px, 6vw, 90px)",
            color: "#3d0012",
          }}
        >
          Hello, I'm{" "}
          <span className="italic" style={{ color: "#e8d5c4" }}>
            Toubha
          </span>
        </motion.h1>

        {/* Folder image - slow rise */}
        <motion.img
          ref={scope}
          src="/portfolio-profile.png"
          alt="Toubha Ahmed"
          className="w-full pb-3"
          style={{ maxWidth: "600px", minWidth: "350px" }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        />
      </section>
      {/* Marquee Banner */}
      <div
        className="bg-dark py-6 overflow-hidden pt-2"
        style={{ whiteSpace: "nowrap" }}
      >
        <div
          style={{
            display: "inline-block",
            animation: "marquee 25s linear infinite",
          }}
        >
          <span
            className="text-sm tracking-widest"
            style={{ fontFamily: "var(--font-body)", color: "#e8d5c4" }}
          >
            FRONTEND DEVELOPER &nbsp;•&nbsp; CREATIVE CODER &nbsp;•&nbsp; WEB
            DESIGN &nbsp;•&nbsp; BOOTSTRAP &nbsp;•&nbsp; REACT &nbsp;•&nbsp;
            SCSS &nbsp;•&nbsp; FRONTEND DEVELOPER &nbsp;•&nbsp; CREATIVE CODER
            &nbsp;•&nbsp; WEB DESIGN &nbsp;•&nbsp; BOOTSTRAP &nbsp;•&nbsp; REACT
            &nbsp;•&nbsp; SCSS &nbsp;•&nbsp;
          </span>
        </div>
      </div>
      {/* About Section */}
      <section
        id="about"
        className="px-8 md:px-16 py-10 pb-23"
        style={{ backgroundColor: "#3d0012" }}
      >
        <p
          className="text-xs tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-body)", color: "#e8d5c4" }}
        >
          About
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="leading-tight uppercase mb-12 max-w-4xl"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(24px, 3vw, 42px)",
            color: "#e8d5c4",
          }}
        >
          Frontend development is where design meets code - and I love living in
          that space.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", color: "#e8d5c4" }}
            >
              Hi, I'm Toubha, 24 years old and based in Norway. I'm a frontend
              development student who loves turning ideas into real, working
              websites. I care about writing clean code, building things that
              are easy to use, and making sure the end result looks good too.
            </p>
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ fontFamily: "var(--font-body)", color: "#e8d5c4" }}
            >
              Education
            </p>
            <p
              className="text-sm font-bold mb-1"
              style={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                color: "#e8d5c4",
              }}
            >
              NOROFF - FRONTEND DEVELOPMENT
            </p>
            <p
              className="text-xs"
              style={{ fontFamily: "var(--font-body)", color: "#e8d5c4" }}
            >
              2024 - 2026
            </p>
          </div>

          {/* Skills */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-6"
              style={{ fontFamily: "var(--font-body)", color: "#e8d5c4" }}
            >
              Skills
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { name: "HTML", icon: "devicon-html5-plain colored" },
                { name: "CSS", icon: "devicon-css3-plain colored" },
                {
                  name: "JavaScript",
                  icon: "devicon-javascript-plain colored",
                },
                {
                  name: "TypeScript",
                  icon: "devicon-typescript-plain colored",
                },
                { name: "React", icon: "devicon-react-original colored" },
                { name: "Next.js", icon: "devicon-nextjs-plain colored" },
                { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
                { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
                { name: "SCSS", icon: "devicon-sass-original colored" },
                { name: "Git", icon: "devicon-git-plain colored" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-2"
                >
                  <i className={skill.icon} style={{ fontSize: "2.5rem" }} />
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-body)", color: "#e8d5c4" }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", color: "#e8d5c4" }}
              >
                Currently
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#e8d5c4" }}
              >
                Finishing my studies at Noroff and looking for my first frontend
                role. Open to junior opportunities.
              </p>
            </div>
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", color: "#e8d5c4" }}
              >
                Links
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/Tubhaahmad"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs tracking-widest uppercase inline-flex items-center gap-2 w-fit hover:opacity-60 transition-opacity"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#e8d5c4",
                    borderBottom: "1px solid #e8d5c4",
                    paddingBottom: "2px",
                  }}
                >
                  <i
                    className="devicon-github-original"
                    style={{ fontSize: "16px" }}
                  />
                  GitHub
                </a>

                <a
                  href="mailto:toubha.ah@hotmail.com"
                  className="text-xs tracking-widest uppercase inline-flex items-center gap-2 w-fit hover:opacity-60 transition-opacity"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#e8d5c4",
                    borderBottom: "1px solid #e8d5c4",
                    paddingBottom: "2px",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-24 px-8 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 tracking-tight uppercase text-center"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "#3d0012",
          }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
            image="/css-frameworks.png"
            title="CSS FRAMEWORKS"
            description="A social media app built with Bootstrap and SCSS, focused on clean UI and responsive design."
            link="/css-frameworks"
            index={0}
          />
          <ProjectCard
            image="/js-frameworks-ca.png"
            title="JS FRAMEWORKS"
            description="An online shop built with Next.js and TypeScript, featuring product listing, cart, and checkout."
            link="/js-frameworks"
            index={1}
          />
          <ProjectCard
            image="/auction-website.jpeg"
            title="SEMESTER PROJECT 2"
            description="Artevia — an online auction platform for browsing, listing, and bidding on artworks."
            link="/semester-project"
            index={2}
          />
        </div>
      </section>
    </main>
  );
}

export default Home;

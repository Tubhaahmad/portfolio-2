import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

function CopyButton() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      style={{
        fontFamily: "DM Sans, sans-serif",
        color: "#3d0012",
        border: "1px solid #3d0012",
        padding: "10px 16px",
        fontSize: "11px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        backgroundColor: "transparent",
        cursor: "pointer",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#3d0012";
        e.currentTarget.style.color = "#e8d5c4";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "#3d0012";
      }}
    >
      {copied ? "Copied!" : "Copy Link"}
    </button>
  );
}

function CSSFrameworks() {
  return (
    <main
      style={{ backgroundColor: "#fdf7f7", minHeight: "100vh" }}
      className="pt-24 px-8 md:px-24 pb-24"
    >
      {/* Back + Copy */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-12"
      >
        <Link
          to="/"
          className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity"
          style={{ fontFamily: "DM Sans, sans-serif", color: "#3d0012" }}
        >
          Back
        </Link>
        <CopyButton />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="leading-none uppercase mb-8"
        style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(40px, 7vw, 100px)",
          color: "#3d0012",
        }}
      >
        CSS Frameworks CA
      </motion.h1>

      {/* Meta */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap gap-8 mb-12 border-t border-b py-6"
        style={{ borderColor: "#3d0012" }}
      >
        <div>
          <p
            className="text-xs tracking-widest uppercase mb-1"
            style={{
              fontFamily: "DM Sans, sans-serif",
              color: "#3d0012",
              opacity: 0.5,
            }}
          >
            Tech Stack
          </p>
          <p
            className="text-sm font-bold"
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              color: "#3d0012",
            }}
          >
            BOOTSTRAP / SCSS / VITE
          </p>
        </div>
        <div>
          <p
            className="text-xs tracking-widest uppercase mb-1"
            style={{
              fontFamily: "DM Sans, sans-serif",
              color: "#3d0012",
              opacity: 0.5,
            }}
          >
            Type
          </p>
          <p
            className="text-sm font-bold"
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              color: "#3d0012",
            }}
          >
            SOCIAL MEDIA APP
          </p>
        </div>
        <div>
          <p
            className="text-xs tracking-widest uppercase mb-1"
            style={{
              fontFamily: "DM Sans, sans-serif",
              color: "#3d0012",
              opacity: 0.5,
            }}
          >
            Year
          </p>
          <p
            className="text-sm font-bold"
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              color: "#3d0012",
            }}
          >
            2025
          </p>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full mb-4 overflow-hidden"
        style={{ maxHeight: "600px" }}
      >
        <img
          src="/css-frameworks.png"
          alt="CSS Frameworks CA"
          className="w-full object-cover object-top"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xs tracking-widest uppercase mb-16"
        style={{
          fontFamily: "DM Sans, sans-serif",
          color: "#3d0012",
          opacity: 0.5,
        }}
      >
        Fig. 01 - CSS Frameworks CA, Profile Page
      </motion.p>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16"
      >
        <div>
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{
              fontFamily: "DM Sans, sans-serif",
              color: "#3d0012",
              opacity: 0.5,
            }}
          >
            About
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif", color: "#3d0012" }}
          >
            CSS Frameworks CA is a front-end project focused on building a
            social media interface similar to Instagram. It demonstrates
            Bootstrap grid, components, and utility classes enhanced with custom
            SCSS for a unique visual identity.
          </p>
        </div>
        <div>
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{
              fontFamily: "DM Sans, sans-serif",
              color: "#3d0012",
              opacity: 0.5,
            }}
          >
            Features
          </p>
          <ul
            className="text-sm leading-relaxed space-y-2"
            style={{ fontFamily: "DM Sans, sans-serif", color: "#3d0012" }}
          >
            {[
              "Login and register forms with client-side validation",
              "Profile page with picture, username, bio and follower count",
              "Post grid on the profile page with realistic photos",
              "Feed page with posts from different users",
              "Like, comment and save icons on each post",
              "Search and filter options on the feed",
              "Responsive layout for mobile, tablet and desktop",
              "Bottom navigation bar on mobile",
              "Logout button with confirmation prompt",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span
                  style={{
                    color: "#3d0012",
                    fontSize: "16px",
                    lineHeight: "1.4",
                  }}
                >
                  ✦
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-4"
      >
        <a
          href="https://github.com/Tubhaahmad/CSS-frameworks-CA"
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "DM Sans, sans-serif",
            color: "#3d0012",
            border: "1px solid #3d0012",
            padding: "10px 16px",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "all 0.3s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#3d0012";
            e.currentTarget.style.color = "#e8d5c4";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#3d0012";
          }}
        >
          GitHub Repo
        </a>

        <a
          href="https://github.com/Tubhaahmad/CSS-frameworks-CA#readme"
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "DM Sans, sans-serif",
            color: "#3d0012",
            border: "1px solid #3d0012",
            padding: "10px 16px",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "all 0.3s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#3d0012";
            e.currentTarget.style.color = "#e8d5c4";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#3d0012";
          }}
        >
          README
        </a>

        <a
          href="https://css-framworks-ca.netlify.app/"
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "DM Sans, sans-serif",
            color: "#3d0012",
            border: "1px solid #3d0012",
            padding: "10px 16px",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "all 0.3s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#3d0012";
            e.currentTarget.style.color = "#e8d5c4";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#3d0012";
          }}
        >
          Live Site
        </a>
      </motion.div>
    </main>
  );
}

export default CSSFrameworks;

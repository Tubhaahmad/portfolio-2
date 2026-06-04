import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 px-8 md:px-16 py-6"
      style={{ zIndex: 5 }}
    >
      <div className="flex items-center justify-between ">
        <Link
          to="/"
          className="text-sm tracking-widest uppercase"
          style={{
            fontFamily: "DM Sans, sans-serif",
            color: "#3d0012",
            fontWeight: 600,
            fontSize: 17,
          }}
        >
          Toubha
        </Link>
        <div className="flex gap-10">
          <a
            href="/#about"
            className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity"
            style={{
              fontFamily: "DM Sans, sans-serif",
              color: "#3d0012",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            About
          </a>
          <a
            href="/#projects"
            className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity"
            style={{
              fontFamily: "DM Sans, sans-serif",
              color: "#3d0012",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Projects
          </a>
          <a
            href="mailto:toubha.ah@hotmail.com"
            className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity"
            style={{
              fontFamily: "DM Sans, sans-serif",
              color: "#3d0012",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;

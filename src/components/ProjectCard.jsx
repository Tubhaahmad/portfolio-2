import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const rotations = [-3, 0, 3];

function ProjectCard({ title, description, image, link, index }) {
  return (
    <motion.div
      initial={{ rotate: rotations[index % 3] }}
      whileHover={{ rotate: 0, y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{ filter: "drop-shadow(4px 8px 16px rgba(0,0,0,0.15))" }}
    >
      <Link to={link} className="block" onClick={() => window.scrollTo(0, 0)}>
        <div
          className="p-3 pb-20 relative"
          style={{ backgroundColor: "#fdf7f7" }}
        >
          {/* Photo area */}
          <div className="w-full h-56 bg-black overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover "
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center text-[#333] opacity-40 text-xs tracking-widest uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                No image yet
              </div>
            )}
          </div>

          {/* Polaroid strip */}
          <div
            className="absolute bottom-0 left-0 right-0 p-4"
            style={{ backgroundColor: "#fdf7f7" }}
          >
            <h2
              className="text-[#1a1a1a] text-xl mb-1"
              style={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 900,
              }}
            >
              {title}
            </h2>
            <p
              className="text-[#555] text-sm leading-relaxed mb-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {description}
            </p>
            <span
              className="text-#1a1a1a text-xs tracking-widest uppercase inline-block"
              style={{
                fontFamily: "var(--font-body)",
                borderBottom: "1px solid #1a1a1a",
                paddingBottom: "2px",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#bf7e84";
                e.currentTarget.style.borderBottomColor = "#bf7e84";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#1a1a1a";
                e.currentTarget.style.borderBottomColor = "#1a1a1a";
              }}
            >
              Read More
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;

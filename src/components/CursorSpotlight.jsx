import { useEffect, useRef } from "react";

function CursorSpotlight() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      style={{
        position: "fixed",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(232,213,196,0.08) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "left 0.1s ease, top 0.1s ease",
      }}
    />
  );
}

export default CursorSpotlight;

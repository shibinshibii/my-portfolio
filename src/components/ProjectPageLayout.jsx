import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function ProjectPageLayout({ title, imageSrc, children }) {
  const location = useLocation();
  const fromModal = location.state?.fromModal;

  return (
    <motion.div
      initial={
        fromModal
          ? {
              opacity: 1,
              clipPath: "inset(15% 25% 15% 25% round 24px)",
            }
          : { opacity: 0, clipPath: "inset(0% 0% 0% 0% round 0px)" }
      }
      animate={{
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0% round 0px)",
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        minHeight: "100vh",
        background: "#050505",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        style={{ position: "absolute", top: 30, left: 30, zIndex: 10 }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "rgba(255,255,255,0.8)",
            textDecoration: "none",
            fontFamily: "'Poppins', sans-serif",
            background: "rgba(0,0,0,0.5)",
            padding: "8px 16px",
            borderRadius: "30px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <IoArrowBack /> Back to Home
        </Link>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={fromModal ? { height: "100vh" } : { height: "30vh" }}
        animate={{ height: "35vh" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: "100%", position: "relative", overflow: "hidden" }}
      >
        <motion.img
          initial={fromModal ? { scale: 1.1 } : { scale: 1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "150px",
            background: "linear-gradient(to top, #050505, transparent)",
          }}
        />
      </motion.div>

      {/* Content Container */}
      <motion.div
        initial={fromModal ? { y: 60, opacity: 0 } : { y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "40px 20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.h1
          layoutId={`title-${title}`}
          style={{
            fontFamily: "'Cascadia Code', 'Google Sans Code', sans-serif",
            fontSize: "2.5rem",
            color: "#fff",
            marginBottom: "30px",
            textShadow: "0 4px 12px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </motion.h1>

        <div className="project-detail-content">{children}</div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectPageLayout;

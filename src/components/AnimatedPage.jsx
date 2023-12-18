import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function AnimatedPage({ children }) {
  return (
    <motion.div
      vatiant={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 2.5 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPage;

import * as motion from "motion/react-client"

const PageTransition = ({ children, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}  // Estado inicial (transparente y ligeramente abajo)
    animate={{ opacity: 1, y: 0 }}   // Estado final (totalmente visible)
    exit={{ opacity: 0, y: -20 }}    // Estado al salir (desaparece hacia arriba)
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
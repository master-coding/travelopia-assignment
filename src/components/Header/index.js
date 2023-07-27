import { motion } from "framer-motion";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["navbar-container__title"]}>Travelopia</div>

      <motion.div
        animate={{
          rotate: [0, 360, 360],
          borderRadius: ["100%", "100%", "100%"],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        className={styles["logo"]}
      >
        Tr
      </motion.div>
    </div>
  );
};

export default Header;

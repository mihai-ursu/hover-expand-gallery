import { useState } from "react";
import styles from "./Card.module.scss";
import CardProps from "./CardProps";
import { motion } from "framer-motion";

const Card = (props: CardProps) => {
  const { isGalleryActive, numberOfSlides } = props;

  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      animate={{
        width:
          isGalleryActive && isActive ? "100%" : `${100 / numberOfSlides}%`,
      }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className={styles.cardWrapper}
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
    >
      Card
    </motion.div>
  );
};

export default Card;

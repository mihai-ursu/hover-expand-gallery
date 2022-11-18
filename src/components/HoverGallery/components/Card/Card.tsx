import { useState } from "react";
import styles from "./Card.module.scss";
import CardProps from "./CardProps";
import { motion } from "framer-motion";
import Image from "next/image";

const Card = (props: CardProps) => {
  const { numberOfSlides, image, movieName } = props;

  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      animate={{
        width: isActive ? "100%" : `${100 / numberOfSlides}%`,
      }}
      initial={{ width: `${100 / numberOfSlides}%` }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className={styles.cardWrapper}
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{
          duration: 0.3,
          ease: [0.43, 0.13, 0.23, 0.96],
          delay: isActive ? 0.2 : 0,
        }}
        className={styles.movieName}
      >
        {movieName}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        className={styles.titleOverlay}
      />
      <Image
        src={image}
        fill
        alt={movieName}
        className={styles.image}
        loading="eager"
      />
    </motion.div>
  );
};

export default Card;

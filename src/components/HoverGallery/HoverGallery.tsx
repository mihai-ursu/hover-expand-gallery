import { useState } from "react";
import styles from "./HoverGallery.module.scss";
import data from "data/data";
import Card from "./components/Card/Card";

const HoverGallery = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.headline}>Work</h1>
      <div className={styles.galleryWrapper}>
        {data.map((movie) => (
          <Card
            key={movie.name}
            numberOfSlides={data.length}
            image={movie.image}
            movieName={movie.name}
          />
        ))}
      </div>
    </section>
  );
};

export default HoverGallery;

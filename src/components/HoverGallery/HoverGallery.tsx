import { useState } from "react";
import styles from "./HoverGallery.module.scss";
import data from "data/data";
import Card from "./components/Card/Card";

const HoverGallery = () => {
  const [isGalleryActive, setIsGalleryActive] = useState(false);
  console.log(data);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.headline}>Work</h1>
      <div
        className={styles.galleryWrapper}
        onMouseEnter={() => {
          setIsGalleryActive(true);
        }}
        onMouseLeave={() => {
          setIsGalleryActive(false);
        }}
      >
        {data.map((movie) => (
          <Card
            key={movie.name}
            numberOfSlides={data.length}
            isGalleryActive={isGalleryActive}
          />
        ))}
      </div>
    </section>
  );
};

export default HoverGallery;

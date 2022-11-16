import HoverGallery from "components/HoverGallery/HoverGallery";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <main className={styles.container}>
        <HoverGallery />
      </main>
    </Layout>
  );
}

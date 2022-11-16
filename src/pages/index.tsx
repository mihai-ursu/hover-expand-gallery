import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}></div>
    </Layout>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <video autoPlay loop muted className={styles.video}>
          <source src="/img/test.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
        <div className={styles.text}>
          <h1>Next.js News app</h1>
          <h3>Latest news articles</h3>
        </div>
      </div>
    </div>
  );
}

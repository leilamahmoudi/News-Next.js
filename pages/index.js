import Head from "next/head";
import Image from "next/image";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Next.js News app</h1>
        <h3>Latest news articles1</h3>
        <video autoPlay loop muted className={styles.video}>
          <source src="/img/production.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

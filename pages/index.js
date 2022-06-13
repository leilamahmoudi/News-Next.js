import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="page-container">
      <div className={styles.main}>
        <h1>Next.js News app</h1>
        <h3>Latest news articles</h3>
      </div>
    </div>
  );
}

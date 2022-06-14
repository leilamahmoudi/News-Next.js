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
        <h3>Latest news articles</h3>
        <img src="https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png" />
      </div>
    </div>
  );
}

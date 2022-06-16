import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed/1")}>Feed</div>
      <div
        onClick={() => (window.location.href = "https://twitter.com/leillonn")}
      >
        Twitter
      </div>
      <div
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/leila-mahmoudi-96a417202/")
        }
      >
        linkedin
      </div>
    </div>
  );
};

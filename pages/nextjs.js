import styles from "../styles/Nextjs.module.css";
import { Toolbar } from "../components/toolbar";

const nextjs = () => {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>This app has written in NEXT.JS</h1>
        <a href="https://github.com/leilamahmoudi/News-Next.js">
          Open source in GitHub
        </a>
        <div className={styles.employeeOfTheMonth}>
          <h3> pros of NextJS for businesses include:</h3>
          <h4>Adaptability and responsiveness</h4>
          <h4>Data security</h4>
          <h4>Faster time to market</h4>
          <img src="https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png" />
          <p>
            {" "}
            NextJS is a great way of creating MVP as fast as possible thanks to
            many premade components.
          </p>
          <p>
            This way of building allows you to get feedback quickly and improve
            your product accordingly without wasting both time and money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default nextjs;

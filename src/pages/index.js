import Cta from "../components/Cta";
import Layout from "../components/Layout";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout
      header={"Welcome to the Jungle"}
      main={
        <div className={styles.cta}>
          <Cta href="/css-snippets">CSS Snippets</Cta>
          <Cta href="/react-snippets">React Snippets</Cta>
        </div>
      }
    />
  );
}

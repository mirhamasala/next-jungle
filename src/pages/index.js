import Cta from "../components/Cta";
import Header from "../components/Header";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <Header>Welcome to the Jungle</Header>
      </header>
      <main>
        <Cta href="/css-snippets">CSS Snippets</Cta>
        <Cta href="/react-snippets">React Snippets</Cta>
      </main>
    </div>
  );
}

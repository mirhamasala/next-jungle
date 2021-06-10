import { DEFAULT_TEXTS } from "../../../constants";

import styles from "./index.module.scss";

const StickyHeader = () => {
  return (
    <>
      <header className={styles.root}>
        <div className={styles.inner}>
          <span className={styles.logo} role="img" aria-label="Palmtree emoji">
            🌴
          </span>
          <ul className={styles.nav}>
            <li>Bananas</li>
            <li>Bananas</li>
            <li>Bananas</li>
          </ul>
        </div>
      </header>
      <main className={styles.main}>
        <h3>Monkey Talk</h3>
        {DEFAULT_TEXTS.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </main>
    </>
  );
};

export default StickyHeader;

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>Welcome to the Jungle</h1>
      </header>
    </div>
  );
}

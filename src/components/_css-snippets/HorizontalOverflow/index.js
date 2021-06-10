import styles from "./index.module.scss";

const HorizontalOverflow = () => {
  const bananas = 111;
  const items = [];

  for (let i = 0; i < bananas; i++) {
    items.push(
      <span
        className={styles.item}
        key={i}
        role="img"
        aria-label="Banana emoji"
      >
        🍌
      </span>
    );
  }

  return <div className={styles.root}>{items}</div>;
}

export default HorizontalOverflow;

import styles from "./index.module.scss";

const EmojiButton = ({ icon, label, children }) => {
  return (
    <button className={styles.button}>
      <span className={styles.wrapper}>
        <span className={styles.icon} role="icon" aria-label={label}>
          {icon}
        </span>
      </span>
      <span className={styles.separator}></span>
      <span className={styles.text}>{children}</span>
    </button>
  );
};

export default EmojiButton;

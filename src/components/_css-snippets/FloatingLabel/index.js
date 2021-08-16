import styles from "./index.module.scss";

const FloatingLabel = () => {
  return (
    <div className={styles.field}>
      <input
        className={styles.input}
        id="name"
        type="text"
        placeholder="King Louie"
      />
      <label className={styles.label} htmlFor="name">
        Name
      </label>
    </div>
  );
};

export default FloatingLabel;

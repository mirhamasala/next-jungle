import Link from "../Link";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>Jungle</span> by{" "}
        <Link href="https://www.mirhamasala.com/about" external={true}>
          Mirha Masala
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

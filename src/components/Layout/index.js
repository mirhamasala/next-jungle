import PropTypes from "prop-types";
import Link from "next/link";

import Header from "../../components/Header";

import styles from "./index.module.scss";

const Layout = ({ header, main, sections }) => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
      </nav>
      <div className={styles.grid}>
        <Header className={styles.header}>{header}</Header>
        <main className={styles.main}>
          {main && main}
          {sections &&
            sections.map((section, index) => (
              <section key={index} className={styles.section}>
                {section}
              </section>
            ))}
        </main>
      </div>
    </>
  );
};

Layout.propTypes = {
  header: PropTypes.string.isRequired,
  main: PropTypes.node,
  sections: PropTypes.node,
};

export default Layout;

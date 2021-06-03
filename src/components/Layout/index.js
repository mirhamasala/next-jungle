import PropTypes from "prop-types";

import Header from "../../components/Header";

import styles from "./index.module.scss";

const Layout = ({header, main}) => {
  return (
    <div className={styles.grid}>
      <Header className={styles.header}>{header}</Header>
      <main className={styles.main}>{main}</main>
    </div>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired
// };

export default Layout;

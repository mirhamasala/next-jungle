import PropTypes from "prop-types";

import TextGradient from "../../components/TextGradient";

import styles from "./index.module.scss";

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <TextGradient element="h1">{children}</TextGradient>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;

import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Title = ({variant, color, children}) => {
  const Element = variant;

  return (
    <Element className={`${styles.title} ${styles[color]}`}>{children}</Element>
  );
};

Title.defaultProps = {
  color: "pink",
  variant: "h2"
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string
};

export default Title;

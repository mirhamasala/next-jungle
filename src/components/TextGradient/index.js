import PropTypes from "prop-types";

import styles from "./index.module.scss";

const TextGradient = ({element, children}) => {
  const Element = element;

  return <Element className={styles.root}>{children}</Element>;
};

TextGradient.defaultProps = {
  variant: "h2"
};

TextGradient.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
};

export default TextGradient;

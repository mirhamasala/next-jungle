import PropTypes from "prop-types";
import NextLink from "next/link";

import styles from "./index.module.scss";

const Button = ({href, children}) => {
  if (href) {
    return (
      <NextLink href={href}>
        <a className={styles.cta}>{children}</a>
      </NextLink>
    );
  }

  return (
    <button type="button" className={styles.cta}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string
};

Button.defaultProps = {
  href: null
};

export default Button;

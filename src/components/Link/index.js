import PropTypes from "prop-types";
import NextLink from "next/link";

import styles from "./index.module.scss";

const renderInnerAnchor = (href, children) => {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  );
};

const Link = ({href, external, children}) => {
  if (!external) {
    return <NextLink href={href}>{renderInnerAnchor(href, children)}</NextLink>;
  }
  return renderInnerAnchor(href, children);
};

Link.defaultProps = {
  external: false
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
  href: PropTypes.string.isRequired
};

export default Link;

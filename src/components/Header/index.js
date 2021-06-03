import PropTypes from "prop-types";

import TextGradient from "../../components/TextGradient";

const Header = ({children}) => {
  return (
    <header>
      <TextGradient element="h1">{children}</TextGradient>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired
};

export default Header;

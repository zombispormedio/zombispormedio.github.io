import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-items: center;
  font-size: 2rem;
  z-index: 10;
  text-decoration: none;
  span {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.5);
    }
  }
`;

const Logo = ({ className }) => (
  <LogoLink className={className} to="/">
    <span role="img" aria-label="idea emoji">
      💡
    </span>
  </LogoLink>
);

Logo.defaultProps = {
  className: null
};

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;

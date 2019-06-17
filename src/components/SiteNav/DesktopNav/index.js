import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { mq } from "../../../theme";

const NavList = styled.nav`
  label: desktop-nav;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  ${mq.mobile} {
    display: none;
  }
`;

const NavItem = styled(Link)`
  font-size: 1.05rem;
  font-weight: 500;
  padding: 1rem;
`;

const DesktopNav = ({ items, ...restOfProps }) => (
  <NavList {...restOfProps}>
    {items.map(({ id, displayName, path }) => (
      <NavItem key={id} to={path}>
        {displayName}
      </NavItem>
    ))}
  </NavList>
);

DesktopNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string
    })
  ).isRequired
};

export default DesktopNav;

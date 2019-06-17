import React, { Component } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { mq } from "../../../theme";
import { MenuIconButton } from "../../IconButtons";
import PopupMenu from "./PopupMenu";

const NavContainer = styled.div`
  label: mobile-nav;
  display: none;
  ${mq.mobile} {
    display: block;
  }
`;

class MobileNav extends Component {
  state = {
    showMenu: false
  };

  onMenuButtonClick = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  };

  onCloseMenu = () => {
    this.setState({
      showMenu: false
    });
  };

  render() {
    const { showMenu } = this.state;
    const { items, ...restOfProps } = this.props;
    return (
      <NavContainer {...restOfProps}>
        <MenuIconButton onClick={this.onMenuButtonClick} />
        {showMenu && <PopupMenu onClose={this.onCloseMenu} items={items} />}
      </NavContainer>
    );
  }
}

MobileNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string
    })
  ).isRequired
};

export default MobileNav;

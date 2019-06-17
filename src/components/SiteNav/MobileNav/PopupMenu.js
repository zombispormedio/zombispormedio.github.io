import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import onClickOutside from "react-onclickoutside";
import { CloseIconButton } from "../../IconButtons";

const PopupMenuContainer = styled.div`
  lable: popup;
  position: absolute;
  border-radius: 4px;
  background-color: #fff;
  left: 0;
  top: 0;
  right: 0;
  margin: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colorTextPrimary};
  padding-bottom: 2rem;
`;

const PopupLinksContainer = styled.div`
  label: links-container;
  display: flex;
  flex-direction: column;
`;

const PopupLinkItem = styled(Link)`
  font-size: 1.05rem;
  font-weight: 500;
  padding: 1rem;
  width: 100%;
  text-align: center;
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const PopupExternalLinkItem = styled.a`
  font-size: 1.05rem;
  font-weight: 500;
  padding: 1rem;
  width: 100%;
  text-align: center;
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

class PopupMenu extends Component {
  handleClickOutside = () => {
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { onClose, items } = this.props;
    return (
      <PopupMenuContainer>
        <CloseIconButton
          css={css`
            align-self: flex-end;
          `}
          onClick={onClose}
        />
        <PopupLinksContainer>
          {items.map(({ id, displayName, path, external }) =>
            external ? (
              <PopupExternalLinkItem key={id} href={path}>
                {displayName}
              </PopupExternalLinkItem>
            ) : (
              <PopupLinkItem key={id} to={path}>
                {displayName}
              </PopupLinkItem>
            )
          )}
        </PopupLinksContainer>
      </PopupMenuContainer>
    );
  }
}

PopupMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string
    })
  ).isRequired
};

export default onClickOutside(PopupMenu);

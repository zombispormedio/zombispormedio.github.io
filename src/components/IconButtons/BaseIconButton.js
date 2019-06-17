import React from "react";
import PropTypes from "prop-types";
import withProps from "recompose/withProps";
import styled from "@emotion/styled";

const BaseContainer = styled.div`
  background-color: transparent;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = withProps({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  role: "presentation"
})(styled.svg`
  width: 2.25rem;
  path {
    fill: ${props => props.color};
  }
  &:hover {
    path {
      fill: ${props => props.hoverColor};
    }
  }
`);

export const BaseIconButton = ({
  onClick,
  className,
  iconClassName,
  color,
  hoverColor,
  iconTitleId,
  iconTitle,
  path,
  ...restOfProps
}) => (
  <BaseContainer onClick={onClick} className={className}>
    <Icon
      className={iconClassName}
      color={color}
      hoverColor={hoverColor}
      aria-labelledby={iconTitleId}
      role="presentation"
      {...restOfProps}
    >
      <title id={iconTitleId} lang="en">
        {iconTitle}
      </title>
      <path d={path} />
    </Icon>
  </BaseContainer>
);

BaseIconButton.defaultProps = {
  onClick: () => {},
  className: "",
  iconClassName: "",
  color: "rgb(0, 0, 0)",
  hoverColor: "rgba(0, 0, 0, 0.8)"
};

BaseIconButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  iconTitleId: PropTypes.string.isRequired,
  iconTitle: PropTypes.string.isRequired,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  path: PropTypes.string.isRequired
};

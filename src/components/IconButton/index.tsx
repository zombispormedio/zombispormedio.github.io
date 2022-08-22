import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const IconContainer = styled.div`
  background-color: transparent;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SVGIcon = styled.svg<{
  hoverColor?: string;
}>`
  width: 2.25rem;
  path {
    fill: ${(props) => props.color};
  }
  &:hover {
    path {
      fill: ${(props) => props.hoverColor};
    }
  }
`;

export const IconButton = ({
  onClick,
  className,
  iconClassName,
  color = "rgb(0, 0, 0)",
  hoverColor = "rgba(0, 0, 0, 0.8)",
  iconTitleId,
  iconTitle,
  path,
  ...restOfProps
}: {
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
  color?: string;
  hoverColor?: string;
  iconTitleId?: string;
  iconTitle?: string;
  path?: string;
} & React.SVGProps<SVGSVGElement>) => (
  <IconContainer onClick={onClick} className={className}>
    <SVGIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="presentation"
      className={iconClassName}
      color={color}
      hoverColor={hoverColor}
      aria-labelledby={iconTitleId}
      {...restOfProps}
    >
      <title id={iconTitleId} lang="en">
        {iconTitle}
      </title>
      <path d={path} />
    </SVGIcon>
  </IconContainer>
);

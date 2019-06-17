import React from "react";
import PropTypes from "prop-types";
import Icons from "./Icons";
import { IconButton } from "../IconButtons";

export const Channel = ({ network, id, url }) => (
  <a href={url} rel="noopener noreferrer" alt={network} target="_blank">
    <IconButton
      path={Icons[id]}
      color="rgb(255,255,255)"
      hoverColor="rgb(0,0,0)"
      iconTitleId={network}
      iconTitle={`${network} Icon`}
    />
  </a>
);

Channel.propTypes = {
  network: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

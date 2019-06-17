import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Channel } from "./Channel";

const ChannelBar = styled.div`
  display: flex;
`;

export const Channels = ({ channels }) => (
  <ChannelBar>
    {channels.map(channel => (
      <Channel key={channel.id} {...channel} />
    ))}
  </ChannelBar>
);

Channels.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

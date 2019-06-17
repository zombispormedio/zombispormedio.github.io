import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import { Avatar } from "../Avatar";
import { Channels } from "../Channels";
import { BackgroundWrapper } from "./BackgroundWrapper";
import { HeadingContainer } from "./HeadingContainer";
import { FastFood } from "./BackgroundSources";

export const Intro = ({ author, description, channels, fluidAvatar }) => (
  <BackgroundWrapper source={FastFood}>
    <HeadingContainer>
      <Avatar
        alt={`${author}'s image`}
        title={author}
        css={css`
          margin-bottom: 1.45rem;
        `}
        fluid={fluidAvatar}
      />
      <h1>Hi! I&apos;m {author}</h1>
      <p>{description}</p>
      <Channels channels={channels} />
    </HeadingContainer>
  </BackgroundWrapper>
);

Intro.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  fluidAvatar: PropTypes.shape({
    src: PropTypes.string
  }).isRequired
};

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { SiteHead, Intro, SiteHeader } from "../components";
import { withTheme } from "../theme";

const IndexPage = ({
  data: {
    site: {
      siteMetadata: { author, description }
    },
    summaryJson: {
      basics: { profiles }
    },
    file
  } = {}
}) => (
  <Fragment>
    <SiteHead />
    <SiteHeader />
    <Intro
      author={author.name}
      description={description}
      channels={profiles.slice(0, 3)}
      fluidAvatar={file.childImageSharp.fluid}
    />
  </Fragment>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.any,
    summaryJson: PropTypes.any,
    file: PropTypes.any
  }).isRequired
};

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        author {
          name
        }
        description
      }
    }
    summaryJson {
      basics {
        profiles {
          id
          network
          url
        }
      }
    }
    file(relativePath: { eq: "avatars/original.jpg" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default withTheme(IndexPage);

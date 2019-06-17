import React from "react";
import { css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import SiteNav from "../SiteNav";
import Appbar from "./Appbar";
import Logo from "./Logo";

export const SiteHeader = () => (
  <Appbar>
    <Logo
      css={css`
        margin-left: 1rem;
        flex-grow: 1;
        visibility: hidden;
      `}
    />
    <StaticQuery
      query={graphql`
        query SiteHeaderNavigationQuery {
          allNavigationYaml(filter: { activated: { eq: true } }) {
            edges {
              node {
                id
                displayName
                path
                external
              }
            }
          }
        }
      `}
      render={({ allNavigationYaml }) =>
        allNavigationYaml && (
          <SiteNav
            desktopClassName={css`
              margin-right: 1rem;
              flex-grow: 1;
            `}
            items={allNavigationYaml.edges.map(({ node }) => node)}
          />
        )
      }
    />
  </Appbar>
);

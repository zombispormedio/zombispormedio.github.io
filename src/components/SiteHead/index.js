import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

export const SiteHead = ({ subtitle, fixedTitle }) => (
  <StaticQuery
    query={graphql`
      query MetadataQuery {
        site {
          siteMetadata {
            displayName
            author {
              name
            }
            description
            keywords
            twitterAccount
            siteUrl
            screenshot
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          displayName,
          author,
          description,
          keywords,
          twitterAccount,
          siteUrl,
          screenshot: image
        }
      }
    }) => {
      const siteTitle = `${author.name} - ${displayName}`;
      const title = subtitle ? `${author.name} - ${subtitle}` : siteTitle;
      return (
        <Helmet>
          <html lang="en" />
          <title>{fixedTitle || title}</title>
          <link rel="author" href="/humans.txt" />
          {/* Search Engine */}
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords.join(",")} />
          <meta name="author" content={author.name} />
          <meta name="image" content={image} />

          {/* Schema.org for Google */}
          <meta itemProp="name" content={title} />
          <meta itemProp="image" content={image} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:site" content={twitterAccount} />
          <meta name="twitter:creator" content={twitterAccount} />
          <meta name="twitter:image:src" content={image} />

          {/* Open Graph general (Facebook, Pinterest & Google+) */}
          <meta name="og:title" content={title} />
          <meta name="og:image" content={image} />
          <meta name="og:url" content={siteUrl} />
          <meta name="og:site_name" content={siteTitle} />
          <meta name="og:type" content="website" />
          <meta property="og:locale" content="en_US" />

          {/* Performance */}
          <link rel="preconnect" href="https://www.google-analytics.com" />

          {/* Force redirect to HTTPS */}
          <script>
            {`if ('${siteUrl}' === window.location.host && window.location.protocol != "https:"){ window.location.protocol = "https";}`}
          </script>
        </Helmet>
      );
    }}
  />
);

SiteHead.defaultProps = {
  subtitle: null,
  fixedTitle: null
};

SiteHead.propTypes = {
  subtitle: PropTypes.string,
  fixedTitle: PropTypes.string
};

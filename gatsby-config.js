const path = require("path");
const PACKAGE = require("./package.json");

require("dotenv").config();

const {
  displayName,
  author,
  homepage,
  otherSiteMetadata: { themeColor },
  keywords,
  description
} = PACKAGE;

module.exports = {
  siteMetadata: {
    ...PACKAGE.otherSiteMetadata,
    displayName,
    homepage,
    author,
    keywords,
    description,
    screenshot: `${homepage}/screenshot.jpg`,
    siteUrl: homepage
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${author.name} - ${displayName}`,
        short_name: `${author.name}`,
        start_url: "/",
        background_color: "#fff",
        theme_color: themeColor,
        display: "standalone",
        icon: path.resolve(__dirname, "src/images/avatars/rounded-original.png")
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => ({
            url: site.siteMetadata.siteUrl + edge.node.path,
            changefreq: `weekly`,
            priority: 0.7
          }))
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
        includeInDevelopment: true
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/theme/typography.js`
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-json`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content`
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        offlineGoogleAnalytics: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};

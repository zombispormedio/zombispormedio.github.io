import type { GatsbyConfig } from "gatsby";
import PACKAGE from "./package.json";

const { author, description } = PACKAGE;

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Xavier Serrano - Software Engineer 🌍`,
    siteUrl: `https://zombispormedio.github.io`,
    description,
    author,
    profiles: [
      {
        id: "github",
        network: "Github",
        url: "https://github.com/zombispormedio",
      },
      {
        id: "twitter",
        network: "Twitter",

        url: "https://twitter.com/zombispormedio",
      },
      {
        id: "linkedin",
        network: "Linkedin",
        url: "https://linkedin.com/in/xsedev",
      },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/avatar.jpg",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PZ5B65L",
        enableWebVitalsTracking: true,
      },
    },
    "gatsby-plugin-offline",
  ],
};

export default config;

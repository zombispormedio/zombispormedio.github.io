import { graphql, useStaticQuery } from "gatsby";
export const useSiteMetadata = () => {
  const data = useStaticQuery<{ site: Queries.Site }>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author {
            name
          }
          profiles {
            id
            network
            url
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

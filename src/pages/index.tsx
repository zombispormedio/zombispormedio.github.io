import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import type { HeadFC } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Avatar } from "../components/Avatar";
import { ProfilesMenu } from "../components/ProfilesMenu";
import { Profile } from "../components/ProfilesMenu/types";
import styled from "@emotion/styled";
import { Theme } from "../theme";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 5rem;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #4a4a4a;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 1.5rem;
`;

const IndexPage = () => {
  const siteMetadata = useSiteMetadata();
  const { profiles, author, description } = siteMetadata || {};
  return (
    <Theme>
      <MainContainer>
        <Avatar>
          <StaticImage src="../images/avatar.jpg" alt="avatar" />
        </Avatar>
        <Title>{author?.name}</Title>
        <Subtitle>{description}</Subtitle>
        {profiles && <ProfilesMenu profiles={profiles as Profile[]} />}
      </MainContainer>
    </Theme>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  const siteMetadata = useSiteMetadata();
  return <title>{siteMetadata?.title}</title>;
};

import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { ProfileIcon } from "./ProfileIcon";
import { Profile } from "./types";

const ProfilesMenuBar = styled.div`
  display: flex;
`;

export const ProfilesMenu = ({ profiles }: { profiles: Profile[] }) => (
  <ProfilesMenuBar>
    {profiles.map((profile) => (
      <ProfileIcon key={profile.id} {...profile} />
    ))}
  </ProfilesMenuBar>
);

import React from "react";
import { mdiTwitter, mdiLinkedin, mdiGithub } from "@mdi/js";
import { IconButton } from "../IconButton";
import { Profile } from "./types";

const icons = {
  twitter: mdiTwitter,
  linkedin: mdiLinkedin,
  github: mdiGithub,
};

export const ProfileIcon = ({ network, id, url }: Profile) => (
  <a href={url} rel="noopener noreferrer" target="_blank">
    <IconButton
      path={icons[id]}
      iconTitleId={network}
      iconTitle={`${network} Icon`}
    />
  </a>
);

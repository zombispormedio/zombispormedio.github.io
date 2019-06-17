import withProps from "recompose/withProps";
import { mdiClose, mdiMenu, mdiHome } from "@mdi/js";
import { BaseIconButton } from "./BaseIconButton";

export { BaseIconButton as IconButton } from "./BaseIconButton";
export const CloseIconButton = withProps({
  path: mdiClose,
  iconTitle: "Close Icon",
  iconTitleId: "Close"
})(BaseIconButton);

export const MenuIconButton = withProps({
  path: mdiMenu,
  color: "rgb(255, 255, 255)",
  hoverColor: "rgba(255, 255, 255, 0.8)",
  iconTitle: "Menu Icon",
  iconTitleId: "Menu"
})(BaseIconButton);

export const HomeButton = withProps({
  path: mdiHome,
  color: "rgb(0, 0, 0)",
  hoverColor: "rgba(0, 0, 0, 0.8)",
  iconTitle: "Home Icon",
  iconTitleId: "Home"
})(BaseIconButton);

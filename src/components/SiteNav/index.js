import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { resolveClassName } from "../../utils";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const SiteNav = ({ className, desktopClassName, mobileClassName, items }) => {
  const desktopProps = resolveClassName(["className", "desktopClassName"], {
    className,
    desktopClassName
  });
  const mobileProps = resolveClassName(["className", "mobileClassName"], {
    className,
    mobileClassName
  });

  return (
    <Fragment>
      <DesktopNav items={items} {...desktopProps} />
      <MobileNav items={items} {...mobileProps} />
    </Fragment>
  );
};

SiteNav.defaultProps = {
  className: null,
  desktopClassName: null,
  mobileClassName: null,
  items: []
};

SiteNav.propTypes = {
  className: PropTypes.string,
  desktopClassName: PropTypes.string,
  mobileClassName: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  )
};

export default SiteNav;

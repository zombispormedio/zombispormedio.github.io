import React, { Fragment } from "react";
import { SiteHead } from "../components";

export default () => (
  <Fragment>
    <SiteHead />
    <h1>F.A.Q.</h1>
    <p>
      This site is still under contruction{" "}
      <span role="img" aria-label="enforced emoji">
        💪😛🤳
      </span>
    </p>
    <p>Some updates soon</p>
    <ul>
      <li>Golang</li> <li>JavaScript</li>
      <li>Java</li>
      <li>Android</li>
    </ul>
  </Fragment>
);

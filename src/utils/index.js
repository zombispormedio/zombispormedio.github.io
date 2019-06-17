import { when, propSatisfies, isNil, dissoc, pick } from "ramda";
import clsx from "clsx";

export const resolveClassName = (propertyNames, props) =>
  when(propSatisfies(isNil, "className"), dissoc("className"))({
    className: clsx(...Object.values(pick(propertyNames, props)))
  });

import { css, Global } from "@emotion/react";
import * as React from "react";
import { ReactNode } from "react";

export const Theme = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Global
        styles={css`
          *   {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font: 100%/1.45 -apple-system, BlinkMacSystemFont, segoe ui, Roboto,
              Helvetica, Arial, sans-serif, apple color emoji, segoe ui emoji,
              segoe ui symbol;
            color: #111;
          }
        `}
      />
      {children}
    </>
  );
};

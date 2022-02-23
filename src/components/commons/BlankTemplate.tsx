import React from "react";
import { PropsChildren } from "src/types/types";
import "src/assets/scss/blankTemplate.scss";

const BlankTemplate = ({ children }: PropsChildren) => {
  return (
    <div className="blankTemplate">
      <div className="logo"></div>
      <div className="banner-top"></div>

      {children}
    </div>
  );
};

export default React.memo(BlankTemplate);

import React, { Fragment, memo } from "react";
import Label from "./LabelStyle";

const LabelComponent = ({ children }) => {
  return (
    <Fragment>
      <Label>{children}</Label>
    </Fragment>
  );
};

export default memo(LabelComponent);

import React, { Fragment, memo } from "react";
import { Alert, Text } from "./AlertStyle";

const AlertComponent = ({ children, type }) => {
  return (
    <Fragment>
      <Alert type={type}>
        <Text>{children}</Text>
      </Alert>
    </Fragment>
  );
};

export default memo(AlertComponent);

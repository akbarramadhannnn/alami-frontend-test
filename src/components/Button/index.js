import React, { Fragment, memo } from "react";
import Button from "./ButtonStyle";

const ButtonComponent = ({
  children,
  onClick,
  disabled,
  color,
  marginRight,
}) => {
  return (
    <Fragment>
      <Button
        onClick={onClick}
        disabled={disabled}
        color={color}
        marginRight={marginRight}
      >
        {children}
      </Button>
    </Fragment>
  );
};

export default memo(ButtonComponent);

import React, { Fragment, memo } from "react";
import { Input } from "./InputStyle";
const InputComponent = ({
  type = "",
  placeholder = "",
  name = "",
  value = "",
  onChange = () => {},
}) => {
  return (
    <Fragment>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Fragment>
  );
};

export default memo(InputComponent);

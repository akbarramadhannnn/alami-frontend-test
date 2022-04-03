import React, { Fragment, memo } from "react";
import TextArea from "./TextareaStyle";

const TextAreaComponent = ({
  name = "",
  value = "",
  placeholder = "",
  onChange = () => {},
  label = "",
}) => {
  return (
    <Fragment>
      <TextArea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Fragment>
  );
};

export default memo(TextAreaComponent);

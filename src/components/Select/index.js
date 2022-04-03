import React, { Fragment, memo } from "react";
import { Select, Option } from "./SelectStyle";

const OptionComponent = memo(({ value, label }) => (
  <Option value={value}>{label}</Option>
));

const SelectComponent = ({
  value = "",
  name = "",
  onChange = () => {},
  placeholder = "",
  option = [],
}) => {
  return (
    <Fragment>
      <Select value={value} onChange={onChange} name={name}>
        {placeholder && <OptionComponent value="" label={placeholder} />}
        {option.length > 0 &&
          option.map((data, indexData) => (
            <OptionComponent
              key={indexData}
              value={data.value}
              label={data.label}
            />
          ))}
      </Select>
    </Fragment>
  );
};

export default memo(SelectComponent);

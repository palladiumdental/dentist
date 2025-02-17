import React from "react";
import Localize from "./localize";

type SelectProps = {
  classNames?: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  defaultOption: string;
  options: string[];
  value: string;
};

const Select: React.FC<SelectProps> = ({
  classNames,
  handleChange,
  name,
  defaultOption,
  options,
  value,
}) => {
  return (
    <select
      className={classNames ?? "form-select border-0"}
      style={{ height: "55px" }}
      name={name}
      onChange={handleChange}
      value={value}
    >
      <option defaultValue="1">{defaultOption}</option>
      {options.map((option) => (
        <option value={option}>
          <Localize text={option} isFirstLetterCapital={true} />
        </option>
      ))}
    </select>
  );
};

export default Select;

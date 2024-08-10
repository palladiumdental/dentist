import React from "react";

type SelectProps = {
  classNames?: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  defaultOption: string;
  options: string[];
};

const Select: React.FC<SelectProps> = ({
  classNames,
  handleChange,
  name,
  defaultOption,
  options,
}) => {
  return (
    <select
      className={classNames ?? "form-select border-0"}
      style={{ height: "55px" }}
      name={name}
      onChange={handleChange}
    >
      <option defaultValue="1">{defaultOption}</option>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Select;

import React from "react";
import Select from "react-select";
import clsx from "clsx";

const FormDropdown = ({ options, value, onChange, placeholder, required }) => {
  return (
    <div>
      <Select
        unstyled
        closeMenuOnSelect={true}
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        classNames={{
          control: ({ isFocused }) =>
            clsx(
              "w-full px-3 py-3 font-normal bg-gray-200 border border-gray-300 rounded-lg shadow-sm sm:text-sm",
              isFocused
                ? "outline-none ring-gray-500 border-gray-500"
                : "border-gray-300"
            ),
          menu: () =>
            "mt-1 bg-white font-normal text-sm border border-gray-300 rounded-lg shadow-lg",
          option: ({ isFocused, isSelected, data }) =>
            clsx(
              "px-3 py-3 cursor-pointer",
              isFocused ? "bg-gray-100" : "",
              isSelected ? "bg-gray-300" : "",
              data.value === "" ? "text-gray-500 italic" : ""
            ),
          placeholder: () => "text-gray-500 italic",
        }}
      />
    </div>
  );
};

export default FormDropdown;

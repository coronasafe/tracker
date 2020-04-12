import React from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";

export function AsyncDropdown({ setOption, loadOptionsService, labelKey }) {
  function loadOptions(inputValue) {
    return loadOptionsService(inputValue).then((serviceOptions) => {
      return serviceOptions.map((option) => {
        if (typeof option === "string") {
          return {
            label: option,
            value: option,
          };
        } else {
          return {
            label: option[labelKey],
            value: option,
          };
        }
      });
    });
  }

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={loadOptions}
      onChange={(newOption) => {
        setOption(newOption.value);
      }}
    />
  );
}

function Dropdown({ options, setOption, currentOption }) {
  let reactSelectOptions = options.map((option) => ({
    label: option,
    value: option,
  }));
  let currentValue = {
    label: currentOption,
    value: currentOption,
  };

  return (
    <div className="relative">
      <Select
        value={currentValue}
        options={reactSelectOptions}
        onChange={(newOption) => {
          setOption(newOption.value);
        }}
      />
    </div>
  );
}

export default Dropdown;

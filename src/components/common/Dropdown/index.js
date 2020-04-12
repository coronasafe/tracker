import React from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";

export function AsyncDropdown({
  setOption,
  loadOptionsService,
  labelKey = "name",
  loadOnSearch = false,
}) {
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
      loadOptions={loadOptions}
      defaultOptions={!loadOnSearch}
      onChange={(newOption) => {
        setOption(newOption.value);
      }}
    />
  );
}

function Dropdown({ options, setOption, currentOption, labelKey = "name"}) {
  let reactSelectOptions = options.map((option) => {
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
  let currentValue = {};
  if(typeof currentOption === "string" || !currentOption){
    currentValue = {
      label: currentOption,
      value: currentOption,
    }
  }
  else{
    currentValue = {
      label:currentOption[labelKey],
      value:currentOption
    }
  }

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

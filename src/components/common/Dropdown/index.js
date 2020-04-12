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

export function MultiDropdown({options,setValue,value,labelKey="name"}){
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
  let currentValue;
  if(!value || value.length===0){
    currentValue=[]
  }
  else if(typeof value[0] === "string"){
    currentValue = value.map((valueOption)=>({
      label: valueOption,
      value: valueOption,
    }));
  }
  else{
    currentValue = value.map((currentOption)=>({
      label:currentOption[labelKey],
      value:currentOption
    }));
  }


  return (
    <div className="relative">
      <Select
        value={currentValue}
        options={reactSelectOptions}
        onChange={(newOptions) => {
          setValue(newOptions.map((option)=>option.value));
        }}
        isMulti
      />
    </div>
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

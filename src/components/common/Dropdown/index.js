import React from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { prepareOption } from "./utils";

export function AsyncDropdown({
  setOption,
  loadOptionsService,
  labelKey = "name",
  loadOnSearch = false,
}) {
  function loadOptions(inputValue) {
    return loadOptionsService(inputValue).then((serviceOptions) => {
      return serviceOptions.map((option) => {
        return prepareOption(option,labelKey);
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
    return prepareOption(option,labelKey);
  });
  let currentValue;
  if(!value || value.length===0){
    currentValue=[]
  }
  else {
    currentValue=value.map((valueOption)=>{
      return prepareOption(valueOption,labelKey);
    })
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
    return prepareOption(option,labelKey);
  });
  let currentValue = prepareOption(currentOption || "");
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

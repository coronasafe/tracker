import React from "react";

function RadioSelect({ options, value, setValue }) {
  return (
    <div class="w-full">
      {options.map((option) => {
        return (
          <div class={`inline-flex items-center mr-4`}>
            <input
              type="radio"
              checked={value === option}
              value={option}
              onClick={() => setValue(option)}
            />
            <span class={`mx-4`}>{option}</span>
          </div>
        );
      })}
    </div>
  );
}

export default RadioSelect;

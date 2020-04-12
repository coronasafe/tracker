import React from "react";

function Options({ options, value, setValue }) {
  return (
    <div className="block w-full rounded py-3 px-4">
      <span className="relative z-0 inline-flex shadow-sm">
        {options.map((option) => {
          return (
            <button
              type="button"
              onClick={()=>{setValue(option)}}
              className={`relative inline-flex items-center px-4 py-2 rounded-x-md border border-gray-300 bg-${
                option === value ? "blue-200" : "white"
              } text-sm leading-5 font-medium text-gray-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:bg-blue-300 focus:shadow-outline-blue active:bg-gray-200 active:text-gray-700 transition ease-in-out duration-150`}
            >
              {option}
            </button>
          );
        })}
      </span>
    </div>
  );
}

export default Options;

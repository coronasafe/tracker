import React from "react";
function Button({ text,onClick,disabled }) {
  return (
    <button
      class={`${disabled && "opacity-50"} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right`}
      type="button"
      onClick={disabled ? ()=>{} : onClick}
    >
      {text}
    </button>
  );
}

export default Button;

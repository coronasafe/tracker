import React from "react";

function Input({ placeholder ,value, onChange}) {
  return (
    <>
      <input
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        type="text"
        placeholder={placeholder}
        onChange={(e)=>{onChange(e.target.value)}}
        value={value}
      />
    </>
  );
}

export default Input;

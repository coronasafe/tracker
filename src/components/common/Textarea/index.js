import React from "react";

function Textarea({ placeholder, helpText ,value, onChange}) {
  return (
    <>
      <textarea
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e)=>{onChange(e.target.value)}}
      />
      <p className="text-red text-xs italic">{helpText}</p>
    </>
  );
}

export default Textarea;

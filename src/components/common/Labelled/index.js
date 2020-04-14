import React from "react";

function Labelled({ label, children }) {
  return (
    <div className="w-full p-3">
      <label
        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        htmlFor="grid-city"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default Labelled;

import React from "react";

function Modal({ children ,onClose}) {
  return (
    <div class="absolute w-full h-full top-0 left-0 flex items-center justify-center">
      <div onClick={onClose} class="absolute w-full h-full bg-black opacity-25 top-0 left-0 cursor-pointer"></div>
      <div class="absolute bg-white rounded-sm shadow-lg flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default Modal;

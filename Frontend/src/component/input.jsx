import React from "react";

function Input({ label, onChange, value, placeHolder, type, id }) {
  return (
    <>
      <div className="w-full mb-4">
        <label htmlFor={label}>{label}</label>
        <input
          value={value}
          onChange={onChange}
          id={id}
          className="bg-black border block p-1  w-full"
          type={type}
          placeholder={placeHolder}
        />
      </div>
    </>
  );
}

export default Input;

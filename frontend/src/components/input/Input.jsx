import React from "react";

function Input({label, type, value, setValue, handleChange, handlleBlur}) {
  return (
    <div>
      <label
        htmlFor="first-name"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
         value={value}
         onChange={(e) => setValue( e.target.value)}
        //  onChange={handleChange}
        //  onBlur={handlleBlur}        
        className="mt-1 block w-full rounded-md border-2 h-10 px-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
}

export default Input;

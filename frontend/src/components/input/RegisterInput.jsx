import React from 'react'

function RegisterInput({placeholder, type, setValue, value, ...props }) {
  return (
    <div>
      <div>
              {/* <label>
                Nom23233
              </label> */}
              <input
                
                value={value}
                type={type}
                className="relative block w-full my-2 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                {...props}
              />
            </div>
    </div>
  )
}

export default RegisterInput

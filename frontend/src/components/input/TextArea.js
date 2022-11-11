import React from 'react'

function TextArea({ value, setValue, placeholder }) {
    return (
        <div>
            <textarea
                value={value}
                onChange={(e) => setValue(e.target.value) }
                rows={4}
                className="mt-1 block w-full rounded-md border-2 px-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder={placeholder}
            />
        </div>
    )
}

export default TextArea

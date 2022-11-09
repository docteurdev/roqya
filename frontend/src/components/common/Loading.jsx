import React from 'react'
import './style.css'
export default function Loading() {
  return (
    <div
     style={{ position: 'absolute',
      background: "#000000ad",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
      >
      <div
       className='loading'
      />
    </div>
  )
}

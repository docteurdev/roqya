import React from 'react';
import { useSelector } from 'react-redux';

function Toast() {

    const msg= useSelector(state => state.message) 

    return (
        <div  className='absolute top-0 left-0 z-40 bg-transparent w-full h-20 flex justify-center items-center'>
           {/* #1D976C */}
           <div style={{background: msg.status== 404? '#F37335': '#1D976C' }} className="w-80 h-30 p-2 bg-primary flex justify-center items-center rounded-sm">
             <p className='text-white'>{msg.message}</p> 
            </div> 
        </div>
    );
}

export default Toast;
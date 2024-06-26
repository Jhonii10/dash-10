'use client'
import React, { useState } from 'react'

interface Props {
    value?:number;
}

export const Counter = ({value = 0}:Props) => {
    const [counter, setCounter] = useState(value);

  return (
    <>
        <span>Productos en el carro de compras</span>
        <span className='text-9xl'>{counter}</span>
        
        <div className='flex'>
            <button
                className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
                onClick={()=>{setCounter(counter + 1)}}
            >
            +1
            </button>
            <button 
                className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
                onClick={()=>{  setCounter(counter - 1)}}
                disabled={counter <= 0 }
                >
            -1
            </button>
        </div>
    </>
  )
}
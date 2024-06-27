'use client'

import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store';
import { IoCartOutline } from 'react-icons/io5';

export const WidgetGrid = () => {

    const count = useAppSelector(state => state.counter.count)

  return (
        <>
            <SimpleWidget 
              title={`${count}`}
              description='Productos agregados'
              label='Contador'
              icon={<IoCartOutline size={70} className='text-blue-600'/>}
              href='/dashboard/counter'
            />
        </>
  )
};
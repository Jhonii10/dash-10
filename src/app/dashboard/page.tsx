import { SimpleWidget } from '@/components'
import React from 'react'

export const metadata = {
 title: 'Dashboard',
 description: 'Dashboard',
};

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
       <h1 className='text-3xl font-semibold mb-4'>Panel administrativo</h1>
      <SimpleWidget/>
    </main>
  )
}

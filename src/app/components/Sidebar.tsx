
import Image from 'next/image'
import React from 'react'
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from 'react-icons/io5'
import { SidebarMenuItem } from './SidebarMenuItem'
import Link from 'next/link'


const menuItems = [
    {
        path: '/dashboard',
        icon: <IoBrowsersOutline size={40}/>,
        title:'Inicio',
        subtitle:'Visualizacion'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40}/>,
        title:'Counter',
        subtitle:'Contador',
    },
]


export const Sidebar = () => {
  return (
    <div
        id="menu"
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 h-screen overflow-y-scroll"
      >
        <div id="logo" className="my-4 px-6 flex items-center">
          <IoLogoReact className='mr-2'/>
          <h1 className="text-lg md:text-2xl font-bold text-white">
            Dash<span className="text-blue-500">10</span>.
          </h1>
        </div>
        <div id="profile" className="px-6 py-10">
          <Link href="/" className="inline-flex space-x-2 items-center">
            <span>
              <Image
                src="https://www.jhoniipia.com/assets/me.png"
                alt="profile"
                width={40}
                height={40}
                className='rounded-full w-8 h-8'
              />
            </span>
            <span className="text-sm md:text-base font-bold">
              Jhoni ipia 
            </span>
          </Link>
        </div>
         <div id="nav" className="w-full px-6">
          {
            menuItems.map(({icon, path, subtitle ,title }, index) => (
                <SidebarMenuItem key={index} icon={icon} path={path} subTitle={subtitle} title={title} />
            ))
          }
          
        </div>
        </div>
  )
}


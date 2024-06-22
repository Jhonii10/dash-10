'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface Props {
    path:string;
    icon: JSX.Element;
    title: string;
    subTitle:string
}

export const SidebarMenuItem = ({path, icon , title, subTitle}:Props) => {
    const pathname = usePathname();
  return (
    <Link
            href={path}
            className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${ path === pathname && 'bg-blue-800'} hover:bg-blue-800 transition ease-linear duration-150 rounded-md mb-2`}
          >
            <div>
              {icon}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-5 text-white">
                {title}
              </span>
              <span className="text-sm text-white/50 hidden md:block">
                {subTitle}
              </span>
            </div>
          </Link>
  )
}

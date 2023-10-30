'use client';
import classNames from 'classnames';
import { link } from 'fs';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
    // Get the current path
    const currentPath = usePathname()

    console.log(currentPath)

    const links = [
        {
            label: 'Dashboard', href: "/",
        },
        {
            label: 'Issues', href: "/issues",
        }
    ]
  return (
    <nav className='flex space-x-12 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'><AiFillBug /></Link>

        <ul className='flex space-x-6'>
            {links.map(link => 
                <Link key={link.href}
                 href={link.href}
                 className={
                    classNames({
                        'text-zinc-950 transition-all': link.href == currentPath,
                        'text-zinc-500': link.href !== currentPath,
                        'hover:text-zinc-700 transition-colors': true
                    })
                 }
                 >{link.label}</Link>    
            )}
        </ul>
    </nav>
  )
}

export default NavBar

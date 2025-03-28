'use client';
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';


const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 5,
        title: "Dashboard",
        url: "/dashboard",
    }
]

const NavBar = () => {
  return (
    <div className={styles.container}>
        <Link href='/' className={styles.logo}>Abdullah</Link>

      
    <div className={styles.links}>
    <DarkModeToggle />
        {links.map((links) => (
            <Link key={links.id} href={links.url}> {links.title}</Link>
        ))}
    </div>
    <button className={styles.logout} onClick={() => console.log('loged out')}>
        Logout
    </button>
    
    </div>
  )
}

export default NavBar
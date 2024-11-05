import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-900 flex justify-between px-3 items-center text-white'>
            <div className="logo font-bold text-xl">
                <Link href="/">BitLinks</Link>
            </div>
            <ul className='flex justify-center items-center gap-4'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/shorten"><li>Shorten</li></Link>
                <Link href="/contact"><li>Contact Us</li></Link>
                <li className='flex gap-3'>
                    <Link href="/shorten"><button className='bg-purple-600 rounded-lg p-3 font-bold py-2'>Try Now</button></Link>
                    <Link href="/github"><button className='bg-purple-600 rounded-lg p-3 font-bold py-2'>GitHub</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

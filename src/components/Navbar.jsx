import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-left gap-5'>
            <div className='logo ml-5'><span className="material-symbols-outlined text-5xl">
                edit_note
            </span></div>
            {/* <ul className='flex justify-items-center gap-20 bg-black mt-2 text-xl'>
                <li className='hover:font-bold'><a href="*">Home</a></li>
                <li className='hover:font-bold text-nowrap'><a href="*">Your Tasks</a></li>
            </ul> */}
        </nav>
    )
}

export default Navbar

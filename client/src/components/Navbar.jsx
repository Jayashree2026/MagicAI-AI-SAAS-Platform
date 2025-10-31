import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets"
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { openSignIn } = useClerk();
    return (
        <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
            {/* ✅ Fix: use arrow function to call navigate only on click */}
            <img
                src={assets.logo}
                alt='Logo'
                onClick={() => navigate('/')}
                className='cursor-pointer h-10 w-auto'
            />

            {
                user ? <UserButton /> : (<button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-amber-400 text-black px-10 py-2.5'>Get started
                    <ArrowRight className='w-4 h-4' />
                </button>)
            }



        </div>
    )
}

export default Navbar

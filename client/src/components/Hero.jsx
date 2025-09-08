import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
    const navigate=useNavigate()
  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center 
    bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen' >

        <div className='text-center mb-6 '>
            <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold  leading-[1.2]'>Create amazing content</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius dignissimos rerum voluptas ab reiciendis alias consequatur esse odio officiis accusantium, nemo temporibus explicabo nobis ipsum? Ipsa asperiores ab nisi veritatis?</p>
        </div>
        <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
            <button onClick={()=>navigate('/ai')} className='bg-amber-400 text-black px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'>Start creating now</button>
            <button  className='bg-amber-400 text-black px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'>Watch demo</button>
        </div>

        <div className='flex items-center gap-4 mt-8 mx-auto text-gray-600'>
            <img src={assets.user_group} className='h-9'/>Trusted by 30k+ users
        </div>
      
    </div>
  )
}

export default Hero

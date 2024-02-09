import React from 'react'
import Foreground from './Foreground'

const Background = () => {
  return (
    <>
      <div className='fixed z-[2] w-full h-screen'>
        <div className='absolute top-[5%] w-full flex justify-center text-zinc-600 py-10 text-xl font-semibold' >Document</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tighter font-semibold text-zinc-400'>Docs.</h1>
      </div>
    </>
  )
}

export default Background

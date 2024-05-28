import React from 'react'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'

const DownloadResume = () => {
  return (
    <Link 
    className="justify-center opacity-100 overflow-hidden relative w-32 p-2 h-12 bg-red-600 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group shadow-lg shadow-red-700"
    href='Shoaib_Hossain_Resume.pdf'
    download={true}
    
  >
    Resume
    <span
      className="absolute w-36 h-32 -top-8 -left-2 bg-gradient-to-r from-red-300 via-red-400 to-red-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
    ></span>
    <span
      className="absolute w-36 h-32 -top-8 -left-2 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
    ></span>
    <span
      className="absolute w-36 h-32 -top-8 -left-2 bg-gradient-to-r from-red-800 via-red-900 to-red-950 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
    ></span>
    <span
      className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 z-10"
    >Download!</span>
  </Link>
  
  )
}

export default DownloadResume
import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,reference}){
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white p-8 overflow-hidden'>
        <FaFileAlt />
        <p text-sm mt-5 font-semibold leading-tight >{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose/> : <FaDownload size=".7em" color="#fff" />}
                </span>
            </div>
            {
                data.tag.isOpen ? ( /* also we can use && if value is true then show then remove null  */
                    <div className={`tag w-full py-4 ${data.tag.tagColor=='blue' ? "bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>Download Now</h3>
                    </div>
                ):null
            }
       
        </div>
        
    </motion.div>
  )
}

export default Card;

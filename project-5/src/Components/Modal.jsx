import React from 'react'
// import AddAndUpdateContact from "./AddAndUpdateContact"
import { createPortal } from 'react-dom'
import {AiOutlineClose} from "react-icons/ai"

const Modal = ({onClose,isOpen,children}) => {
  return   createPortal(
    <>
    {isOpen && (
        <>
     <div
  className=' relative z-50 m-auto min-h-[200px] max-w-[80%] bg-white p-4'>
    <div  className='flex justify-end'>
         <AiOutlineClose onClick={onClose} className='text-2xl'/>
    </div>
    {children}
        </div>
      <div onClick={onClose}  
      className=" backdrop-blur h-screen w-screen top-0 z-40 absolute" />

      
     </> 
    )}
        </>,
      document.getElementById("modal-root"));
}

export default Modal

// backdrop-blur absolute m-0 z-40 h-screen w-screen

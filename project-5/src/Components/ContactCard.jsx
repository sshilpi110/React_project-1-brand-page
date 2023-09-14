import React from 'react'
import {HiOutlineUserCircle} from "react-icons/hi"
import {RiEditCircleLine} from "react-icons/ri"
import {IoMdTrash} from "react-icons/io"
import { deleteDoc, doc } from 'firebase/firestore'
import AddAndUpdateContact from "./AddAndUpdateContact"
import {db} from "../config/firebase"

import useDisClouse from "../hooks/useDisclouse"
import {toast} from "react-toastify"

const ContactCard = ({contact}) => {
  
  const {isOpen,onClose,onOpen} =useDisClouse()


  const deleteContact= async (id)=>{
    try{
     await deleteDoc(doc(db,"contacts" ,id))
     toast.success(" contact deleted successfully")
    }catch(error){
      console.log(error)
    }
  }
  return (
   <>
      <div key={contact.id} className='bg-yellow flex  items-center rounded-lg justify-between'
     >
     <div className='flex gap-1'>
      <HiOutlineUserCircle  className='text-orange text-4xl'/>

      <div className=''>
        <h1 className='font-medium'>{contact.name}</h1>
        <p className='text-sm'>{contact.email}</p>
      </div>
      </div>

      <div className='flex text-3xl'>
        <RiEditCircleLine  onClick={onOpen} className="cursor-pointer" />
        <IoMdTrash  onClick={()=>deleteContact(contact.id)} className='text-orange cursor-pointer'/>
      </div>
     </div>
     <AddAndUpdateContact 
     contact={contact}
     isUpdate isOpen={isOpen} onClose={onClose}/>
     </>
  )
}

export default ContactCard ;




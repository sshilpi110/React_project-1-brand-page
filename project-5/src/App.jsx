import React from 'react'
import Navbar from "./Components/Navbar"

import ContactCard from './Components/ContactCard'
import AddAndUpdateContact from "./Components/AddAndUpdateContact" ;
import Modal from "./Components/Modal"
import {FiSearch} from "react-icons/fi"
import {AiFillPlusCircle} from "react-icons/ai"
import {HiOutlineUserCircle} from "react-icons/hi"
import {RiEditCircleLine} from "react-icons/ri"
import {IoMdTrash} from "react-icons/io"
import {useState,useEffect} from "react"
import { collection ,getDocs,onSnapshot } from 'firebase/firestore'
import useDisclouse from './hooks/useDisclouse';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {db} from "./config/firebase"

const App = () => {
  const [contacts,setContacts]=useState([])
  const {isOpen,onClose,onOpen} = useDisclouse()
  useEffect(()=>{
    const getContacts=async ()=>{
     try{
     const contactsRef= collection(db,"contacts")
    //  const contactsSnapshot= await getDocs(contactsRef)
       
     onSnapshot(contactsRef,(snapshot)=>{
      const contactLists=snapshot.docs.map((doc)=>{
        return{
        id:doc.id,
        ...doc.data()
        }
       });
      //  console.log(contactLists)
      setContacts(contactLists)
      return contactLists
     });

     }catch(error){
     console.log(error)
     }
    }
    getContacts();

  },[])

  const filterContacts= (e)=>{
    const value=e.target.value ;
     
    const contactsRef= collection(db,"contacts")
     onSnapshot(contactsRef,(snapshot)=>{
      const contactLists=snapshot.docs.map((doc)=>{
        return{
        id:doc.id,
        ...doc.data()
        }
       });
      //  console.log(contactLists)
      const filteredContacts=contactLists.filter((contact)=>
      contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContacts)
      return filteredContacts
     });

  }

  return (
    <>
    <div className='mx-auto max-w-[370px] px-4' flex-grow >

    <Navbar />
    <div className='flex gap-2'>

    <div className=' relative flex  items-center flex-grow'>

      <FiSearch  className='absolute ml-1 text-3xl text-white'/>

      <input
      onChange={filterContacts}
       type="text"  placeholder="Search Here" className=" flex-grow h-10 bg-transparent
       border-white 
        rounded-md border text-white pl-10"/>
    </div>
    
    <AiFillPlusCircle onClick={onOpen}  className='text-5xl text-white cursor-pointer'/>
   
    </div>

    <div className="mt-4  flex flex-col gap-4">
     
    {contacts.map((contact)=>(
     <ContactCard  key={contact.id} contact={contact}/>
        ))}
    </div>
    </div>
    <AddAndUpdateContact
    onClose={onClose} isOpen={isOpen}/>
    <ToastContainer  position="bottom-center"/>
    </>
  );
}

export default App

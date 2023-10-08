"use client"
import React,{ReactNode} from 'react'
import {firebaseAuth} from '@/utils/FirebaseConfig'
import Image from 'next/image'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import {FcGoogle} from 'react-icons/fc'
import axios from 'axios'
import { CHECK_USER_ROUTE } from '@/utils/ApiRoutes'

const page:React.FC = () => {

  const handleLogin = async ()=>{
  const provider = new GoogleAuthProvider();
  const {user:{displayName:name,email,photoURL:profileImage}} = await signInWithPopup(firebaseAuth,provider);
  try{
    if(email){
      const { data } = await axios.post(CHECK_USER_ROUTE,{email});
      console.log(data);
    }
  }catch(e){
    console.log(e);
  }
  };

  return (
    <div className='flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6'>
      <div className='flex items-center justify-center text-white gap-2'>
        <Image src='/whatsapp.gif' alt='Whatsapp logo gif' height={300} width={300}/>
        <span className='text-7xl '>Whatsapp</span>
      </div>
      <button className='justify items-center rounded-lg bg-search-input-container-background flex gap-7 p-5' onClick={handleLogin}>
        <FcGoogle className='text-4xl'/>
        <span className='text-2xl text-white'>Login with Google</span>
      </button>
    </div>
  )
}

export default page

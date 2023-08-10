

"use client";

import { useAppContext } from "@/app/utils/context";

import FinalData from "@/app/Components/NotesComponents/FinalData"
import { signOut, useSession } from "next-auth/react";
import Header from "@/app/Components/NotesComponents/Header"
import Notes from "@/app/Components/NotesComponents/Notes"
import { useEffect, useState } from "react";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
export default function Home() {
  const {inputText, setInputText} = useAppContext();
  const { data: session, status } = useSession({
    required: true,
  });

  if(status === "loading") {
    return <></>
  }
  
  

  
  

  return (
    <div className="">
      <button className="bg-blue-400 m-2 p-2 rounded-md" onClick={()=>{signOut()}} >
        SignOut
      </button>
      <Header/>
      <Notes/>
      
    </div>
  );
}


"use client";

import { React, useState, useEffect } from "react";
import Note from "./Note";
import FetchNotes from "@/app/api/FetchNotes"; 
import CreateNote from "./CreateNote";

import { doc, deleteDoc } from "firebase/firestore";



import { useSession } from "next-auth/react";

import { db } from "@/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

function Notes() {
  const { data: session, status } = useSession({
    required: true,
  });

  const [notes, setNotes] = useState([]);
  
  const [inputText, setInputText] = useState("");

  // const notes1 = FetchNotes();

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const [Deletion, setDeletion] = useState(false);
  

  const saveHandler = () => {
    

    try {
      const docRef = addDoc(collection(db, `${session.user?.email}`), {
        note: inputText,
      });
      // console.log("Document written with ID: ", docRef.id);
      

      
      
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setInputText("");
  };


  useEffect(() => {
    const fetchAndLogJsonNotes = async () => {
      const jsonNotes = await FetchNotes();
      const parsedNotes = JSON.parse(jsonNotes);
      setNotes(parsedNotes.notes);
      // console.log("Notes go On");
    };

    fetchAndLogJsonNotes();
  }, []);


  useEffect(() => {
    const fetchAndLogJsonNotes = async () => {
      const jsonNotes = await FetchNotes();
      const parsedNotes = JSON.parse(jsonNotes);
      setNotes(parsedNotes.notes);
      
      // console.log("Input Changed");
      // console.log('inputText Changed');
    };

    fetchAndLogJsonNotes();
  }, [inputText]);




 





  // console.log("Final ",notes );
  
const deleteNote = (id) => {
     deleteDoc(doc(db,session?.user?.email, id));

     if(Deletion){
      setDeletion(false)
     }else{
      setDeletion(true);
     }
  };

useEffect(() => {
  const fetchAndLogJsonNotes = async () => {
    const jsonNotes = await FetchNotes();
    const parsedNotes = JSON.parse(jsonNotes);
    setNotes(parsedNotes.notes);
    
    // console.log("Input Changed");
    // console.log('inputText Changed');
  };

  fetchAndLogJsonNotes();
}, [Deletion])



  

  

  return (
    <div className="notes">
      
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />




{notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.note}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}
export default Notes;



    

  

  


  

 
"use client";

import { useAppContext } from "@/app/utils/context";
import React, { useEffect, useState } from "react";
import FetchNotes from "@/app/api/FetchNotes";
import Note from "./Note";

export default function FinalData() {
  const { inputText, setInputText } = useAppContext();
  const [notes, setNotes] = useState([]);

  const fetchAndLogJsonNotes = async () => {
    const jsonNotes = await FetchNotes();
    const parsedNotes = JSON.parse(jsonNotes);
    // console.log(parsedNotes);
    localStorage.setItem("myArray", JSON.stringify(parsedNotes.notes));

    // console.log("inputText Changed");
  };

  fetchAndLogJsonNotes();

  useEffect(() => {
    const fetchAndLogJsonNotes = async () => {
      const jsonNotes = await FetchNotes();
      const parsedNotes = JSON.parse(jsonNotes);
      // console.log(parsedNotes);
      localStorage.setItem("myArray", JSON.stringify(parsedNotes.notes));

      // console.log("inputText Changed");
    };

    fetchAndLogJsonNotes();
  }, [inputText]);

  // Retrieving the array from local storage
  const storedArray = JSON.parse(localStorage.getItem("myArray"));

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div>
      {storedArray == null ? (
        <h1 className="text-white">No Data</h1>
      ) : (
        <>
          {storedArray.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              text={note.note}
              //   deleteNote={deleteNote}
            />
          ))}
        </>
      )}
      haan
    </div>
  );
}

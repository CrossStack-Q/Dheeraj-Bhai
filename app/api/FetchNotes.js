
import {db} from "../../firebase";
import { collection, getDocs } from "firebase/firestore"; 

// import { useSession } from "next-auth/react";

import { getSession } from "next-auth/react";

export default async function FetchNotes() {

const session = await getSession();

  // console.log(session);
  
  
  const querySnapshot = await getDocs(collection(db, `${session.user?.email}`));
  const notes = [];
  querySnapshot.forEach((doc) => {
    notes.push({
      id: doc.id,
      note: doc.data().note
    });
  });

  const jsonNotes = JSON.stringify({notes});

  return jsonNotes;
}






// import { db } from "../../firebase";
// import { collection, getDocs } from "firebase/firestore";
// import { getSession } from "next-auth/react";

// export default async function handler(req, res) {
//   const session = await getSession({ req });

//   console.log(session);

//   if (session) {
//     const querySnapshot = await getDocs(collection(db, `${session.user?.email}`));
//     const notes = [];
//     querySnapshot.forEach((doc) => {
//       notes.push({
//         id: doc.id,
//         note: doc.data().note,
//       });
//     });

//     const jsonNotes = JSON.stringify({ notes });
//     res.status(200).json(jsonNotes);
//   } else {
//     res.status(401).json({ error: "Unauthorized" });
//   }
// }

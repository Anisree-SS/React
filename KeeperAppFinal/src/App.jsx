import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function updateNotes(notesData) {
    setNotes((prevNotes) => [...prevNotes, notesData]);
  }
  function deleteNotes(id) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }
  return (
    <div>
      <Header />
      <CreateArea noteupdate={updateNotes} />
      {console.log(notes)}
      {notes.map((noted, index) => (
        <Note
          key={index}
          id={index}
          title={noted.title}
          content={noted.content}
          forDelete={deleteNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

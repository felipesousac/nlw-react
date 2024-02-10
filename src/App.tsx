import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/NewNoteCard";
import { NoteCard } from "./components/NoteCard";
import { useState } from "react";

export function App() {
  const [notes, setNotes] = useState([
    { id: 1, date: new Date(), content: "nota 1" },
    { id: 2, date: new Date(), content: "nota 2" },
  ]);

  function onNoteCreated(content: string) {
    const newNote = {
      id: Math.random(),
      date: new Date(),
      content,
    };

    setNotes([newNote, ...notes]);
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 ">
      <img src={logo} alt="nlw expert logo" />
      <form className="w-full">
        <input
          type="text"
          name=""
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>
      <div className="h-px bg-slate-700" /> {/*Line separator*/}
      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {notes.map((note) => {
          return <NoteCard key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

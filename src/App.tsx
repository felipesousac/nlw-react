import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/NewNoteCard";
import { NoteCard } from "./components/NoteCard";

let note = {
  date: new Date(),
  content: "This was brought by props",
};

export function App() {
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
        <NewNoteCard />
        <NoteCard note={note} />
        <NoteCard note={note} />
      </div>
    </div>
  );
}

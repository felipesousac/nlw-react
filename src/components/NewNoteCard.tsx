export function NewNoteCard() {
  return (
    <div className="rounded-md bg-slate-700 p-5 space-y-3 hover:ring-2 hover:ring-slate-600">
      <span className="text-sm font-medium text-slate-200">Adicionar nota</span>
      <p className="text-sm leading-6 text-slate-400">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </div>
  );
}

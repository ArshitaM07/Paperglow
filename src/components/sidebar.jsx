import NoteCard from "./NoteCard"

 function Sidebar({
  notes,
  selectedNote,
  setSelectedNote,
  createNewNote,
  searchTerm,
  setSearchTerm,
  theme,
  setTheme,
  togglePin,
  deleteNote
}){

  return (
    <div className="w-64 bg-[#17171c] border-r border-gray-800 p-5">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-yellow-100">
            📖 PaperGlow
        </h1>

        <p className="text-sm text-gray-400 mt-1">
            Write beautifully.
        </p>
      </div>
      <div className="flex gap-2 mt-4 mb-4">

        <button
            onClick={() => setTheme("dark")}
            className="px-3 py-1 rounded-lg bg-gray-800"
        >
            🌙
        </button>

        <button
            onClick={() => setTheme("light")}
            className="px-3 py-1 rounded-lg bg-gray-300 text-black"
        >
            ☀️
        </button>

        <button
            onClick={() => setTheme("vintage")}
            className="px-3 py-1 rounded-lg bg-amber-200 text-black"
        >
            📜
        </button>

      </div>

      <button
        onClick={createNewNote}
        className="w-full py-3 rounded-2xl bg-yellow-200 text-black font-semibold hover:scale-105 transition"
      >
        + New Note
       </button>
       <input
          type="text"
          placeholder="🔍 Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            w-full
            mt-4
            p-3
            rounded-2xl
            bg-[#1f1f27]
            border border-gray-700
            outline-none
            focus:border-yellow-200
            transition
          "
       />
        <h2 className="mt-6 mb-3 text-sm uppercase tracking-widest text-gray-500">
            Recent Notes
        </h2>
      <div className="mt-8 space-y-3">
        {notes.length === 0 && (
            <p className="text-gray-400 text-sm">
               No notes found.
            </p>
        )}
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
            deleteNote={deleteNote}
            togglePin={togglePin}
          />
        ))}

      </div>

    </div>
  )
}

export default Sidebar
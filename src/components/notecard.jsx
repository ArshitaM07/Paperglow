function NoteCard({
  note,
  selectedNote,
  setSelectedNote,
  togglePin,
  deleteNote
}) {

  const isActive =
    selectedNote?.id === note.id

  return (
    <div
      onClick={() => setSelectedNote(note)}
      className={`
        p-4 rounded-2xl cursor-pointer transition
        ${isActive
          ? "bg-yellow-200 text-black"
          : "bg-[#1f1f27] hover:bg-[#2a2a35]"
        }
      `}
    >
      <div className="flex justify-between items-start">

        <div className="flex-1">

          <h3 className="font-semibold">
            {note.pinned ? "📌 " : ""}
            {note.title}
          </h3>

          <p className="text-xs mt-2 opacity-70 line-clamp-2">
            {note.content || "Empty note"}
          </p>

        </div>

        <div className="flex gap-2">

          <button
            onClick={(e) => {
              e.stopPropagation()
              togglePin(note.id)
            }}
          >
            {note.pinned ? "📌" : "📍"}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              deleteNote(note.id)
            }}
          >
            🗑️
          </button>

        </div>

      </div>
    </div>
  )
}

export default NoteCard
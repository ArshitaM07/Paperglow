function Editor({ selectedNote, notes, setNotes }) {

  const updateTitle = (e) => {

    const updatedNotes = notes.map((note) =>
      note.id === selectedNote.id
        ? { ...note, title: e.target.value }
        : note
    )

    setNotes(updatedNotes)
  }

  const updateContent = (e) => {

    const updatedNotes = notes.map((note) =>
      note.id === selectedNote.id
        ? { ...note, content: e.target.value }
        : note
    )

    setNotes(updatedNotes)
  }

  if (!selectedNote) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3">
            📖 PaperGlow
          </h1>

          <p className="text-gray-400">
            Create your first note and start writing.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 p-10">

      <input
        type="text"
        value={selectedNote.title}
        onChange={updateTitle}
        className="w-full bg-transparent text-4xl font-bold outline-none mb-6"
      />

      <textarea
        value={selectedNote.content}
        onChange={updateContent}
        className="w-full h-[80%] bg-[#17171c] border border-gray-800 rounded-2xl p-6 text-lg outline-none resize-none"
      />

      <div className="mt-3 text-sm text-gray-400">
        {selectedNote.content.length} characters
      </div>

    </div>
  )
}

export default Editor
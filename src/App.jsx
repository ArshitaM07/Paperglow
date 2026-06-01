import { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import dummyNotes from "./data/dummyNotes"

function App() {

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("paperglow-notes")

    return savedNotes
      ? JSON.parse(savedNotes)
      : dummyNotes
  })

  const [selectedNote, setSelectedNote] = useState(notes[0])
  const [searchTerm, setSearchTerm] = useState("")
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    localStorage.setItem(
      "paperglow-notes",
      JSON.stringify(notes)
    )
  }, [notes])

  const activeNote =
    notes.find(note => note.id === selectedNote?.id) || notes[0]

  const createNewNote = () => {

    const newNote = {
      id: Date.now(),
      title: "Untitled Note",
      content: "",
      pinned: false
    }

    const updatedNotes = [newNote, ...notes]

    setNotes(updatedNotes)
    setSelectedNote(newNote)
  }
   const togglePin = (id) => {

        const updatedNotes = notes.map(note =>
            note.id === id
              ? {
                   ...note,
                   pinned: !note.pinned
                }
               : note
        )

        setNotes(updatedNotes)
    }

    const deleteNote = (id) => {

        const updatedNotes = notes.filter(
           note => note.id !== id
        )

        setNotes(updatedNotes)

        if (selectedNote?.id === id) {
            setSelectedNote(updatedNotes[0] || null)
        }
    }



  const filteredNotes = notes
    .filter(note =>
      note.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      Number(b.pinned) - Number(a.pinned)
    )

  return (
    <div
      className={`h-screen flex ${
        theme === "dark"
          ? "bg-[#0f0f12] text-white"
          : theme === "light"
          ? "bg-gray-100 text-black"
          : "bg-[#f4ecd8] text-[#5c4033]"
      }`}
    >

      <Sidebar
        notes={filteredNotes}
        selectedNote={activeNote}
        setSelectedNote={setSelectedNote}
        createNewNote={createNewNote}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        theme={theme}
        setTheme={setTheme}
        togglePin={togglePin}
        deleteNote={deleteNote}
      />

      <Editor
        selectedNote={activeNote}
        notes={notes}
        setNotes={setNotes}
      />

    </div>
  )
}

export default App

import { useState } from 'react'
import NoteList from './components/NoteList'
import { nanoid } from 'nanoid';
import Search from './components/Search';

function App() {
  const [notes, setNotes] = useState([])
  const [searchText, setSearchText] = useState("")

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
    deleteNote
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }


  return (
    <div className='container'>
      <h1 style={{ color: 'black' }}>Notes</h1>

      <Search handleSearchNote={setSearchText} />
      <NoteList
        originalNotes={notes}
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
        handleNote={addNote}
        HandleDeleteNote={deleteNote}
      />

    </div>



  )
}

export default App

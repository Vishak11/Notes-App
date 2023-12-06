import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NoteList = ({notes,handleNote,HandleDeleteNote,originalNotes}) => {
    
  return (
    <div className='note-list'>
       {notes.map((note)=>(
        <Note id={note.id} text={note.text} date={note.date} HandleDeleteNote={HandleDeleteNote} />
       
       ))}
       
      {notes.length<originalNotes.length?<Note/>:<AddNote handleNote={handleNote} />}
    </div>
  )

}


export default NoteList
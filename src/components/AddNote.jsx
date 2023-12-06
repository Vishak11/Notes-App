import React, { useState } from 'react'

const AddNote = ({handleNote}) => {
    const charLength=200;
    const [newNotes,setNewNotes]=useState("")
const handleChange=(e)=>{
    if(charLength-e.target.value.length>=0){
    setNewNotes(e.target.value)
    }
} 

const handleSave=()=>{
    const textarea=document.querySelector('.newTextarea')
    if(textarea.value=="")
    {
        textarea.placeholder="Dont leave it empty"
    }
    else{
    handleNote(newNotes)
    textarea.value=""
    setNewNotes("")
    textarea.placeholder="Write your notes here..."
    }

}
    return (
        <div className='note new'>
            <textarea
            onChange={handleChange}
                rows='8'
                cols='8'
                value={newNotes}
                placeholder='Type to add note....'
                className='newTextarea'>
           </textarea>
           <div className='note-footer'>
            <small>{charLength-newNotes.length} remaining</small>
            <button className='save' onClick={handleSave}>Save</button>
           </div>
        </div>
    )
}

export default AddNote
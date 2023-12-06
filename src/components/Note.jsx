import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

const Note = ({id,text,date,HandleDeleteNote}) => {
  
    return (
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever onClick={()=>HandleDeleteNote(id)} className='delete-icon' size='1.4em'/>
            </div>
        </div>
    )
}

export default Note




import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'


export default function Notes() {

    const { notes, setNotes } = useContext(noteContext)

    return (

        <div className='row my-5'>
            <h2>Your Notes</h2>

            {notes.map((note) => { return <NoteItem key={note._id} note={note} /> })}
        </div>

    )
}










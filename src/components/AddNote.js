



import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'


export default function AddNote() {

    const { addNote } = useContext(noteContext)

    const [note, setNote] = useState({title: "", description: "", tag: "default"})

    const onChange = (event) => {
        setNote({...note, [event.target.name]: event.target.value})
    }

    const handleClick = (event) => {
        event.preventDefault()
        addNote(note.title, note.description, note.tag)
    }


    return (
        <div className='container my-4'>
            <h2>Add a Note</h2>

            <form>
                <div className="mb-3 my-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={onChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>

        </div>
    )
}









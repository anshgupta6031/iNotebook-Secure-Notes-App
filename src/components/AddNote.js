



import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'


export default function AddNote(props) {

    const { addNote } = useContext(noteContext)

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value })
    }

    const handleClick = (event) => {
        event.preventDefault()
        addNote(note.title, note.description, note.tag)
        window.scrollTo(0, 0)
        props.showAlert("Note Added Successfully", "success")
        setNote({ title: "", description: "", tag: "" })
    }


    return (
        <div className='container my-4'>
            <h2>Add a Note</h2>

            <form>
                <div className="mb-3 my-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} value={note.title} minLength={5} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={onChange} value={note.description} minLength={5} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} value={note.tag} />
                </div>

                <button type="submit" disabled={note.title.length < 5 || note.description.length < 5} className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>

        </div>
    )
}









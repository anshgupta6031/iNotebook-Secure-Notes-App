



import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'


export default function NoteItem(props) {

    const { deleteNote } = useContext(noteContext)

    return (

        <div className="col-md-3 my-3">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-baseline justify-content-between">
                        <div><h5 className="card-title">{props.note.title}</h5></div>

                        <div className='d-flex'>
                            <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { props.updateNote(props.note) }}></i>
                            <i className="fa-regular fa-trash-can mx-2" onClick={() => { deleteNote(props.note._id) }}></i>
                        </div>
                    </div>

                    <p className="card-text">{props.note.description}</p>
                </div>
            </div>
        </div>

    )
}














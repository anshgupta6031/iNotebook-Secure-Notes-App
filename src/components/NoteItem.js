



import React from 'react'

export default function NoteItem(props) {
    return (

        <div className="col-md-3 my-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{props.note.title}</h5>
                    <p class="card-text">{props.note.description}</p>
                </div>
            </div>
        </div>

    )
}














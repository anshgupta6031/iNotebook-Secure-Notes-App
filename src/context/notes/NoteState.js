



import { useState } from "react";
import noteContext from "./noteContext";


const NoteState = (props) => {

    const initialNotes = [
        {
            "_id": "66a3801bcbc293691edsfs98bf26",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:15.811Z"
        },
        {
            "_id": "66a3801ecbc2sdf93691e98bf28",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:18.679Z"
        },
        {
            "_id": "66a3801fcbc29dsfsd3691e98bf2a",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:19.257Z"
        },
        {
            "_id": "66a3801bcbc29dsfds3691e98bf26",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:15.811Z"
        },
        {
            "_id": "66a3801ecbc293sdf691e98bf28",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:18.679Z"
        },
        {
            "_id": "66a3801fcbc293691e98bf2a",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:19.257Z"
        },{
            "_id": "66a3801bcbc293691dfsse98bf26",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:15.811Z"
        },
        {
            "_id": "66a3801ecbc293691e98dfbf28",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:18.679Z"
        },
        {
            "_id": "66a3801fcbc293691e98dzvbf2a",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:19.257Z"
        },{
            "_id": "66a3801bcbc2dfs93691e98bf26",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:15.811Z"
        },
        {
            "_id": "66dfsdsa3801ecbc293691e98bf28",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:18.679Z"
        },
        {
            "_id": "66a3801fcbc29xcvx3691e98bf2a",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:19.257Z"
        },{
            "_id": "66a3801bcxvxccbc293691e98bf26",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:15.811Z"
        },
        {
            "_id": "66a3xcvxc801ecbc293691e98bf28",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:18.679Z"
        },
        {
            "_id": "66a3801fcbc293691e98cvxcxvbf2a",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:19.257Z"
        }
    ]


    const [notes, setNotes] = useState(initialNotes)


    //  Function to add a note.........
    const addNote = (title, description, tag) => {
        const note = {
            "_id": "66a3801bcbc293691edsfsfdqs98bf26",
            "user": "66a37ee5841c7d56640c9511",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-07-26T10:53:15.811Z"
        }

        setNotes(notes.concat(note))
    }


    //  Function to delete a note.........
    const deleteNote = () => {

    }


    //  Function to Edit a note.........
    const editNote = () => {

    }



    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    )
}



export default NoteState;



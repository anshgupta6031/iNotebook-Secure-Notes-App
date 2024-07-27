



import { useState } from "react";
import noteContext from "./noteContext";


const NoteState = (props) => {

    const initialNotes = [
        {
            "_id": "66a3801bcbc293691e98bf26",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:15.811Z"
        },
        {
            "_id": "66a3801ecbc293691e98bf28",
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
        },
        {
            "_id": "66a3801bcbc293691e98bf26",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:15.811Z"
        },
        {
            "_id": "66a3801ecbc293691e98bf28",
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
            "_id": "66a3801bcbc293691e98bf26",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:15.811Z"
        },
        {
            "_id": "66a3801ecbc293691e98bf28",
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
            "_id": "66a3801bcbc293691e98bf26",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:15.811Z"
        },
        {
            "_id": "66a3801ecbc293691e98bf28",
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
            "_id": "66a3801bcbc293691e98bf26",
            "user": "66a37ee5841c7d56640c9511",
            "title": "new note",
            "description": "Please wake up early",
            "tag": "important",
            "date": "2024-07-26T10:53:15.811Z"
        },
        {
            "_id": "66a3801ecbc293691e98bf28",
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
        }
    ]


    const [notes, setNotes] = useState(initialNotes)


    return (
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}



export default NoteState;



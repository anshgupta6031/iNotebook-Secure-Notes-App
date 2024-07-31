



import { useState } from "react";
import noteContext from "./noteContext";


const NoteState = (props) => {

    const host = "http://localhost:5000"

    const initialNotes = []


    const [notes, setNotes] = useState(initialNotes)


    //  Function to get all notes.........
    const getNotes = async () => {

        //  API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhMzdlZTU4NDFjN2Q1NjY0MGM5NTExIn0sImlhdCI6MTcyMTk5MDg4NX0.BLau7Ok1MH1BwnNKBr6Hb25HoM7Z-Ps4ZRnHq4MAaxk",
            },
        })

        const json = await response.json()
        setNotes(json)
    }



    //  Function to add a note.........
    const addNote = async (title, description, tag) => {

        //  API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhMzdlZTU4NDFjN2Q1NjY0MGM5NTExIn0sImlhdCI6MTcyMTk5MDg4NX0.BLau7Ok1MH1BwnNKBr6Hb25HoM7Z-Ps4ZRnHq4MAaxk",
            },

            body: JSON.stringify({ title, description, tag })
        })

        // const json = await response.json()

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
    const deleteNote = async (id) => {

        //  API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhMzdlZTU4NDFjN2Q1NjY0MGM5NTExIn0sImlhdCI6MTcyMTk5MDg4NX0.BLau7Ok1MH1BwnNKBr6Hb25HoM7Z-Ps4ZRnHq4MAaxk",
            },
        })

        // const json = await response.json()

        const new_notes = notes.filter((note) => { return note._id !== id })
        setNotes(new_notes)
    }



    //  Function to Edit a note.........
    const editNote = async (id, title, description, tag) => {

        //  API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhMzdlZTU4NDFjN2Q1NjY0MGM5NTExIn0sImlhdCI6MTcyMTk5MDg4NX0.BLau7Ok1MH1BwnNKBr6Hb25HoM7Z-Ps4ZRnHq4MAaxk",
            },

            body: JSON.stringify(title, description, tag)
        })

        // const json = await response.json()


        //  logic to edit in client....
        for (let i = 0; i < notes.length; i++) {
            const note = notes[i];

            if (note._id === id) {
                note.title = title
                note.description = description
                note.tag = tag
            }
        }
    }



    return (
        <noteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    )
}



export default NoteState;



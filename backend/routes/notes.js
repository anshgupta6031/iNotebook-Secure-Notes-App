



const express = require('express')
const Notes = require("../models/Notes")
const fetchuser = require("../middleware/fetchUser")
const { body, validationResult } = require('express-validator')


const router = express.Router()


//  ROUTE 1 : To fetch all notes of a user using : GET "http://localhost:5000/api/notes/fetchallnotes"  Login required...

router.get('/fetchallnotes', fetchuser, async (req, res) => {

    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes)
    }

    catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})




//  ROUTE 2 : Add a new note using : POST "http://localhost:5000/api/notes/addnote"  Login required...

router.post('/addnote', fetchuser, [
    body("title", "Enter a valid title").isLength({ min: 5 }),
    body("description", "Description must be at least 5 characters").isLength({ min: 5 }),
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }


    try {
        const note = new Notes({
            user: req.user.id,
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag,
        })

        const savedNote = await note.save()

        res.json(savedNote)
    }

    catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})




//  ROUTE 3 : Update an existing note using : PUT "http://localhost:5000/api/notes/updatenote/:id"  Login required...

router.put('/updatenote/:id', fetchuser, [
    body("title", "Enter a valid title").isLength({ min: 5 }),
    body("description", "Description must be at least 5 characters").isLength({ min: 5 }),
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }


    try {
        const newNote = {}
        if (req.body.title) newNote.title = req.body.title
        if (req.body.description) newNote.description = req.body.description
        if (req.body.tag) newNote.tag = req.body.tag

        let note = await Notes.findById(req.params.id)
        if (!note) return res.status(404).send("Note not found...")

        //  if the note we are trying to update is of another user.......
        if (note.user.toString() !== req.user.id) return res.status(401).send("Note not accessable....")        //  (note.user.toString()) = (req.params.id)

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })

        res.json({note})
    }

    catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})




module.exports = router                             //  exported in order to be able to use for any end point......





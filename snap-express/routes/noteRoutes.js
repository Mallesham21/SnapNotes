const express = require('express');
const Note = require('../models/note');
const router = express.Router();

// Get all notes
router.get('/', async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

// Add a new note
router.post('/', async (req, res) => {
    const {text} = req.body;
    const note =  Note.create({ text });
    res.json(note);
});

// Update a note
router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const updated = await Note.findByIdAndUpdate(
        req.params.id,
        {text},
        {new: true}
    );
    res.json(updated);
});

// Delete a note
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    await Note.findByIdAndDelete(id);
    res.json({ message: `Note with id ${id} deleted` });
});

module.exports = router;
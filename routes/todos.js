const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// Create a new To-Do
router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) return res.status(400).json({ error: 'Title is required' });

        const newTodo = new Todo({ title, description });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all To-Dos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific To-Do
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).json({ error: 'To-Do not found' });

        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a To-Do
router.put('/:id', async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { title, description, completed },
            { new: true, runValidators: true }
        );

        if (!updatedTodo) return res.status(404).json({ error: 'To-Do not found' });
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a To-Do
router.delete('/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) return res.status(404).json({ error: 'To-Do not found' });

        res.status(200).json({ message: 'To-Do item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;


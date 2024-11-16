require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');
const Todo = require('./models/todo');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Successfully Connected to MongoDB Atlas Database'))
    .catch(err => console.error('MongoDB connection error:', err));


// Routes
app.use('/todos', todoRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

// Start server
app.listen(PORT, () => {
    console.log(`*****************************************************************`);
    console.log(`Server running on port \x1b[32m ${PORT} \x1b[0m`);
    console.log(`Here is the URL :\x1b[32m  http://localhost:3000/todos \x1b[0m`);
});


const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI; // Load from environment variables

async function connectToMongoDB() {
    const client = new MongoClient(uri);

    try {
        console.log('Attempting to connect to MongoDB Atlas...');
        await client.connect();
        console.log('Successfully connected to MongoDB Atlas!');
        return client; // Return the client for reuse
    } catch (error) {
        console.error('Connection failed:', error.message);
        throw error;
    }
}

module.exports = connectToMongoDB;


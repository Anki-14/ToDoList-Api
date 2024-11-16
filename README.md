# ToDoListAPI Project

This Project was completed as part of my internship with Innomatics Research Labs as a Full Stack Web Developer, a RESTful API for a simple To-Do List API, 
built using Node.js, Express, and MongoDB.

Check the live API at : [Render](https://todolistapi-zrua.onrender.com/todos)
## Features

- Create, read, update, and delete to-do items
- Each to-do item has a title, description, and completion status
- Sequential ID generation for to-do items
- Error handling for common scenarios

## Technologies Used

- **Node.js**: A JavaScript runtime environment for server-side development.
- **Express**: A popular web application framework for Node.js, used to build the API.
- **MongoDB**: A NoSQL database used to store the to-do items.
- **Mongoose**: An Object Document Mapping (ODM) library for MongoDB and Node.js, used to interact with the database.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/gouranga-rout/ToDoListAPI.git
   ```
2. Navigate to the project directory:
   ```
   cd ToDoListAPI
   ```
3. Install the dependencies:
   ```
   npm install mongoose express axios dotenv
   ```
4. Set up the MongoDB connection:
   - Create a MongoDB Atlas account (if you haven't already) and set up a new cluster.
   - Obtain the connection string for your MongoDB database.
   - Create a `.env` file and add your database connection string :
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority
   PORT=xxxx  
   ```
   
5. Start the server:
   ```
   node index.js
   ```
6. The API will be running on `http://localhost:3000`.

## Usage

You can use a tool like Postman to interact with the API and test the various endpoints.

Available endpoints:

- `POST /todos`: Create a new to-do item
- `GET /todos`: Retrieve all to-do items
- `GET /todos/:id`: Retrieve a specific to-do item by ID
- `PUT /todos/:id`: Update a specific to-do item by ID
- `DELETE /todos/:id`: Delete a specific to-do item by ID


## See the API data in mobile browser

You can see the data in JSON format by the below link: 
```
http://localhost:3000/todos
```


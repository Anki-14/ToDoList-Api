const axios = require('axios');

// Sample To-Do items to add
const todos = [
  { title: "HTML5", description: "Lean HTML5" },
  { title: "CSS3", description: "Learn CSS3" },
  { title: "Javascript",description: "Learn Javascript" },
  { title: "PHP",description: "Learn PHP" },
  { title: "MySQL",description: "Learn MySQL" },
  { title: "Bootstrap",description: "Learn Bootstrap" },
  { title: "Tailwind CSS",description: "Learn Tailwind CSS" },
  { title: "React.js",description: "Learn React.js" },
  { title: "Node.js",description: "Learn Node.js" },
  { title: "Express.js",description: "Learn Express.js" },
  { title: "MongoDB",description: "Learn MongoDB" },
  { title: "Git",description: "Learn Git" },
  { title: "Github",description: "Learn Github" }
];

// Function to add to-do items
async function addTodos() {
  try {
    for (const todo of todos) {
      const response = await axios.post('http://localhost:3000/todos', todo);
      console.log('Added:', response.data);
    }
    console.log('All to-dos added successfully!');
  } catch (error) {
    console.error('Error adding to-do:', error.message);
  }
}

addTodos();


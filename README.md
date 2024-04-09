# Zenkit Task Management App

This project is a Task Management application built using Node.js, Express.js, and MongoDB. It provides functionalities to manage tasks including creating, updating, deleting, and retrieving tasks.

## Features

- **Create Task**: Users can create new tasks specifying task name, description, status, due date, and duration details.
- **Update Task**: Users can update existing tasks including changing task name, description, status, due date, and duration details.
- **Delete Task**: Users can delete tasks by providing the task ID.
- **Retrieve Task**: Users can retrieve individual tasks or a list of all tasks.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Install the independences:
npm install

3. Set up MongoDB Atlas:

Create a MongoDB Atlas cluster and database.
Whitelist your current IP address.
Get the connection URI.

4. Create a '.env' file in the root directory.
   
   MONGODB_URI=<your-mongodb-uri>
   
5. Start the server.
   npm start
6.The server will start running at http://localhost:3000.

API Endpoints
GET /tasks: Retrieve all tasks.
POST /tasks: Create a new task.
GET /tasks/:id: Retrieve a specific task by ID.
PATCH /tasks/:id: Update a specific task by ID.
DELETE /tasks/:id: Delete a specific task by ID.
Contributors
TETA IRIS CREDOT.

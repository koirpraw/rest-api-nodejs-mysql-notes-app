# REST API with Node.js, Express.js and MySQL(Driver: mysql2)

## Description
This is a simple REST API that allows you to perform CRUD operations on a MySQL database. The API is built with Node.js, Express.js and MySQL. The driver used to connect to the MySQL database is mysql2. 

- The project is structured in the MVC pattern.
- The database is connected to the API using the mysql2 driver.
- The API is built with Express.js.
- The API is tested with Postman & thunder client( VS Code extension).

# Model:
The model is the database schema. The database schema is defined in the `models/noteController.js` file. The schema has 3 fields:
- id: The primary key of the note.
- title: The title of the note (String).
- description: The description of the note(String).
- is_liked: A boolean field that indicates whether the note is liked or not.
- difficulty: An integer field that indicates the difficulty level of the note.
- createdAt: The timestamp when the note was created or updated.

# Controller:
The controller is the logic of the API. The controller is defined in the `controllers/note.js` file. The controller has 6 functions:
- createNote: This function creates a new note.
- getAllNotes: This function gets all notes.
- getNoteById: This function gets a single note.
- updateNote: This function updates a note.
- deleteNote: This function deletes a note.
- deleteAllNotes: This function deletes all notes.
  

# Routes:
There are 6 routes in the API:
- Create a new note
- Get all notes
- Get a single note
- Update a note
- Delete a note
- Delete all note

# NPM Libraries used:
- express
- mysql2
- dotenv
- nodemon
- cors

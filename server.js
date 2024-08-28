const express = require('express');
// const connection = require('./src/config/dbConfig')

const app = express();

const cors = require('cors')

const PORT = process.env.PORT || 4000;

const noteRoutes = require('./src/routes/notesRoute')

app.use(express.json());

app.use(cors());

app.use('/api/notes', noteRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome notes app with mysql." });
})

app.listen(PORT, () => {
    console.log(`Server is currently running on port:${PORT} go to http://localhost:${PORT}`)
})


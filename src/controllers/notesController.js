const Note = require('../models/note');

exports.createNote = async (req, res) => {
    const date = new Date();
    // const createdAtStamp = date.toLocaleString();

    try {
        const { title, description } = req.body;
        const newNote = {
            title,
            description,
            isLiked: false,
            difficulty: 1,
            createdAt: date
        }
        const [notes] = await Note.create(newNote)
        res.status(201).json(notes);
    } catch (error) {
        res.status(500).send({ message: 'Error creating note', error: error.message });
        throw (error)

    }
}

exports.getAllNotes = async (req, res) => {
    try {
        // const notes = await Note.getAll();
        // Here notes is destructured because the data consists of array of itmes along with metadata ,1st element in data array is the notes object 2nd is metadata
        const [notes] = await Note.findAll();
        res.status(200).json(notes)

    } catch (error) {
        res.status(500).send({ message: 'Error fetching notes', error: error.message });
    }

};

exports.getNoteById = async (req, res) => {
    try {
        const id = req.params.id;
        const [note] = await Note.findById(id)
        res.status(200).json(note)
    } catch (error) {
        res.status(500).send({ message: 'Error fetching note by Id', error: error.message });
        throw (error)


    }


}
exports.updateNoteById = async (req, res) => {
    const date = new Date();
    // not using the formatted date since mySQL does not support it, can convert it in the front end
    // const createdAtStamp = date.toLocaleString();
    try {
        const id = req.params.id;
        const { title, description, is_liked, difficulty } = req.body;
        const updatedNote = {
            title,
            description,
            isLiked: is_liked,
            difficulty,
            createdAt: date
        }
        const [note] = await Note.update(updatedNote, id)
        res.status(200).send({ message: `updated item ${note}` })

    } catch (error) {
        res.status(500).send({ message: 'Error updating notes', error: error.message });
        throw (error)

    }
}

exports.deleteNoteById = async (req, res) => {
    try {
        const id = req.params.id;
        const [note] = await Note.delete(id)
        res.status(200).res.send({ message: `succesfully deleted item#${id}` })
    } catch (error) {
        res.status(500).send({ message: `Error deleting note by Id#${id}`, error: error.message });
        throw (error)


    }


}

exports.deleteAll = async (req, res) => {
    try {
        const [note] = await Note.deleteAll();
        res.status(200).res.send({ message: "succesfully deleted all data" })

    } catch (error) {
        res.status(500).send({ message: 'Error deleting all data', error: error.message });
        throw (error)

    }
}
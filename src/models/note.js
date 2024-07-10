const db = require('../config/dbConfig');

class Note {

    static tableName = 'notes';

    // constructor(note) {
    //     this.title = note.title;
    //     this.description = note.description;
    //     this.isLiked = note.isLiked;
    // }

    constructor(note) {
        this.title = note.title;
        this.description = note.description;
        this.isLiked = note.isLiked;
        this.difficulty = note.difficulty;
        this.createdAt = note.createdAt;

    }


    static create(newNote) {
        return db.execute(`INSERT INTO ${this.tableName} (title, description, is_liked,difficulty,created_at) VALUES (?, ?, ?,?,?)`,
            [newNote.title, newNote.description, newNote.isLiked, newNote.difficulty, newNote.createdAt]);
    }

    static findAll() {
        return db.execute(`SELECT * FROM  ${this.tableName}`);
    }
    static findById(id) {
        return db.execute(`SELECT * FROM ${this.tableName} WHERE id = ?`, [id])
    }

    static update(updatedNote, id) {
        return db.execute(`UPDATE ${this.tableName}
        SET title = ?, description = ?, is_liked = ?, difficulty = ?, created_at = ?
        WHERE ID = ?`, [updatedNote.title, updatedNote.description, updatedNote.isLiked, id])

    }

    static delete(id) {
        return db.execute(`DELETE FROM ${this.tableName} WHERE id = ?`, [id])

    }

    static deleteAll() {
        return db.execute(`DELETE FROM ${this.tableName}`)

    }
}

module.exports = Note;
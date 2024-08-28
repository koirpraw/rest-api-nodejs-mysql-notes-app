const db = require('../config/dbConfig');

const tableName = 'notes';

const insertQuery = `INSERT INTO ${tableName} (title, description, is_liked,difficulty,created_at) VALUES (?, ?, ?,?,?)`;
const findAllQuery = `SELECT * FROM  ${tableName}`;
const findOneQuery = `SELECT * FROM ${tableName} WHERE id = ?`;
const updateQuery = `UPDATE ${tableName} SET title = ?, description = ?, is_liked = ?, difficulty = ?, created_at = ? WHERE ID = ?`;
const deleteQuery = `DELETE FROM ${tableName} WHERE id = ?`;
const deleteAllQuery = `DELETE FROM ${tableName}`


const create = (newNote) => {
    return db.execute(insertQuery,
        [newNote.title, newNote.description, newNote.isLiked, newNote.difficulty, newNote.createdAt]);
}

const findAll = () => {
    return db.execute(findAllQuery);
}
const findById = (id) => {
    return db.execute(findOneQuery, [id])
}

const update = (updatedNote, id) => {
    return db.execute(updateQuery, [updatedNote.title, updatedNote.description, updatedNote.isLiked, updatedNote.difficulty, updatedNote.createdAt, id])

}

const remove = (id) => {
    return db.execute(deleteQuery, [id])

}

const removeAll = () => {
    return db.execute(deleteAllQuery)

}


module.exports = { create, findAll, findById, update, remove, removeAll };
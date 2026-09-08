import { default as pool } from "./pools.js";

async function queryAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages ORDER BY added DESC");
    return rows;
}

async function getAllMessagesWithParam(param) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE LOWER(message) LIKE $1||'%'", [param]);
    return rows;
}

async function queryMessageById(id) {
    const result = await pool.query("SELECT * FROM messages WHERE id=$1",[id]);
    return result.rows[0];
}

async function insertMessage(username, message, date) {
    await pool.query("INSERT INTO messages (username, message, added)  VALUES ($1, $2, $3)", [username, message, date]);
}

async function deleteMessage(id) {
    await pool.query("DELETE FROM messages WHERE id=$1", [id]);
}

async function clearDB() {
    await pool.query("DELETE FROM messages");
}

export {
    queryAllMessages,
    getAllMessagesWithParam,
    queryMessageById,
    insertMessage,
    deleteMessage,
    clearDB
};

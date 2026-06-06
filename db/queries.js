import { default as pool } from "./pools.js";

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function getAllUsernamesWithParam(param) {
    console.log("param", param)
    const { rows } = await pool.query("SELECT * FROM usernames WHERE LOWER(username) LIKE $1||'%'",[param]);
    return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteAll() {
    await pool.query("DELETE from usernames");
}

export {
    getAllUsernames,
    getAllUsernamesWithParam,
    insertUsername,
    deleteAll
};

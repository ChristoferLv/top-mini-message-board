import { body, matchedData, validationResult } from "express-validator";
import { queryAllMessages, getAllMessagesWithParam, deleteMessage, insertMessage, queryMessageById, clearDB } from "../db/queries.js";

const validateMessage = [
    body("user").trim().isAlphanumeric().withMessage("Username must be alphanumeric").isLength({ max: 30 }).withMessage("Maximum size for username is 30"),
    body("message").trim().isLength({ max: 255 }).withMessage("Maximum size for message is 255 characters")
];


async function getAllMessages(req, res) {
    res.render("index", { title: "Mini Messageboard", messages: await queryAllMessages() });
}

async function findMessageById(req, res) {
    res.render("message_id", { title: "Message Details", ...(await queryMessageById(req.params.id)) })
}

function newMessageGet(req, res) {
    res.render("new");
}

const newMessagePost = [validateMessage,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("new", {
                errors: errors.array(),
            });
        }
        const added = new Date(Date.now()).toISOString();
        const { user, message } = matchedData(req);
        await insertMessage(user, message, added);
        res.redirect("/");
    }
];

async function removeMessage(req, res) {
    await deleteMessage(req.params.id);
    res.redirect("/");
}

async function deleteAll(req, res) {
    await clearDB();
    res.redirect("/");
}

export {
    getAllMessages,
    findMessageById,
    newMessageGet,
    newMessagePost,
    removeMessage,
    deleteAll
}
import { join } from 'node:path';
import express from "express";
import { getAllMessages, getAllMessagesWithParam, deleteMessage, insertMessage, getMessageById, clearDB } from "./db/queries.js";
import { body, matchedData, validationResult } from 'express-validator';

const dir = import.meta.dirname;
const PORT = 3000;
const app = express();
const assetsPath = join(dir, "public");


app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));
app.set("views", join(dir, "views"));
app.set("view engine", "ejs");


const validateMessage = [
    body("user").trim().isAlphanumeric().withMessage("Username must be alphanumeric").isLength({ max: 30 }).withMessage("Maximum size for username is 30"),
    body("message").trim().isLength({ max: 255 }).withMessage("Maximum size for message is 255 characters")
]

app.get("/", async (req, res) => res.render("index", { title: "Mini Messageboard", messages: await getAllMessages() }));

app.get("/new", (req, res) => res.render("new"));

app.get("/details/:id", async (req, res) => res.render("message_id", { title: "Message Details", ...(await getMessageById(req.params.id)) }));

app.post("/new", validateMessage, async (req, res) => {
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
});

app.get("/delete/:id", async (req, res) => {
    await deleteMessage(req.params.id);
    res.redirect("/");
})

app.get("/clear", async (req, res) => {
    await clearDB();
    res.redirect("/");
})

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Listening on port ${PORT}! \nhttp://localhost:3000`);
});

import { join } from 'node:path';
import express from "express";

const dir = import.meta.dirname;
const PORT = 3000;
const app = express();
const assetsPath = join(dir, "public");


const messages = [
    {
        id: crypto.randomUUID(),
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        id: crypto.randomUUID(),
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));
app.set("views", join(dir, "views"));
app.set("view engine", "ejs");


app.get("/", (req, res) => res.render("index", { title: "Mini Messageboard", messages: messages }));
app.get("/new", (req, res) => res.render("new"));
app.get("/details/:id", (req, res) => res.render("message_id", { title: "Message Details", ...messages.find(message => message.id === req.params.id) }));
app.post("/new", (req, res) => {
    messages.push({
        id: crypto.randomUUID(), text: req.body.message, user: req.body.user, added: new Date()
    });
    res.redirect("/");
});

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Listening on port ${PORT}! \nhttp://localhost:3000`);
});

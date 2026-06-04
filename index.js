import { join } from 'node:path';
import express from "express";

const dir = import.meta.dirname;
const PORT = 3000;
const app = express();


app.set("views", join(dir, "views"));
app.set("view engine", "ejs");


app.get("/", (req, res) => res.render("index"));

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Listening on port ${PORT}! \nhttp://localhost:3000`);
});

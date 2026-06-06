// routes/usersRouter.js
import { Router } from "express";
import { getAllMessages, findMessageById, newMessageGet, newMessagePost, removeMessage, deleteAll } from "../controllers/messagesController.js";
const messageRouter = Router();

messageRouter.get("/", getAllMessages);
messageRouter.get("/details/:id", findMessageById);
messageRouter.get("/new", newMessageGet);
messageRouter.post("/new", newMessagePost);
messageRouter.get("/delete/:id", removeMessage);
messageRouter.get("/clear", deleteAll);

export default messageRouter;

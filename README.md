# Mini Message Board

A small message board application built as part of [The Odin Project Node.js](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs) course. It uses Express, EJS, and PostgreSQL to create, list, inspect, and remove short messages.

## Objective

The goal of this project was to practice:
- Building an Express application with server-side rendering
- Working with EJS templates
- Reading from and writing to PostgreSQL
- Validating form input with `express-validator`
- Structuring a small Node.js app into routes, controllers, and database helpers

## What is it?

A simple message board where users can:
- View all messages
- Open a single message details page
- Create a new message
- Delete one message
- Clear the entire board

## How to Use

1. Open the project folder.
2. Install dependencies:

```bash
npm install
```

3. Configure your environment variables using `.env.example` as a reference.
4. Build the database schema if needed:

```bash
npm run seed
```

5. Start the development server:

```bash
npm run dev
```

6. Open the browser at `http://localhost:3000`.

## Features

- **Message listing**: the home page shows all stored messages
- **Message details**: each message has its own detail view
- **Create message form**: users can submit a new username and message
- **Input validation**: server-side validation prevents invalid submissions
- **Delete options**: remove a single message or clear the full board
- **Database persistence**: messages are stored in PostgreSQL

## Project Structure

- `index.js`: Express app bootstrap
- `routes/`: route definitions
- `controllers/`: request handlers and validation flow
- `db/`: database queries and seed helpers
- `views/`: EJS templates
- `public/`: static assets

## Technologies Used

- Node.js
- Express
- EJS
- PostgreSQL
- express-validator

## Visualization

<img width="1910" height="915" alt="mini_message_board_screenshot" src="https://github.com/user-attachments/assets/1b004eed-1b1b-438c-909f-ee054e7afceb" />

---

Project developed following: [The Odin Project - Mini Message Board](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board)

📍 **Main repository with all projects**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)

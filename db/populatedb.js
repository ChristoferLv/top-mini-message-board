import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(30),
  message VARCHAR(255),
  added TIMESTAMPTZ
);

INSERT INTO messages (username, message, added) 
VALUES
  ('Bryan', 'Important message', NOW()),
  ('Odin', 'Best message here', NOW()),
  ('Damon', 'Something', NOW());
`;

async function main() {
  console.log("seeding...", `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

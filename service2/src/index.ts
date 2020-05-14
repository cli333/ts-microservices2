import express from "express";
import cors from "cors";
import { Pool } from "pg";
// import keys from "./keys";

// POSTS API, '/posts/'

const app = express();

app.use(express.json());
app.use(cors());

const client = new Pool({
  user: process.env.pgUser,
  host: process.env.pgHost,
  database: process.env.pgDatabase,
  password: process.env.pgPassword,
  port: process.env.pgPort,
});

client.query("CREATE TABLE IF NOT EXISTS ");

// app.get("/", (req: express.Request, res: express.Response) => {
//   res.json("Hi from Service #2 🐳🐳");
// });

app.get("/api", (req: express.Request, res: express.Response) => {
  client.query();
});

app.listen(5000, () =>
  console.log("Service #2 🐳🐳 is listening on port 5000")
);

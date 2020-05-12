import express from "express";
import cors from "cors";
import { Pool } from "pg";
import keys from "./keys";

// POSTS API

const app = express();

app.use(express.json());
app.use(cors());

const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

pgClient.query("CREATE TABLE IF NOT EXISTS ");

app.get("/", (req: express.Request, res: express.Response) => {
  res.json("Hi from Service #2 🐳🐳");
});

app.listen(5000, () =>
  console.log("Service #2 🐳🐳 is listening on port 5000")
);

import express from "express";
import cors from "cors";
import redis from "redis";
import keys from "./keys";

// USERS API

const app = express();

app.use(express.json());
app.use(cors());

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: +keys.redisPort!,
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.json("Hi from Service #1 🐳");
});

app.get("/users", (req: express.Request, res: express.Response) => {
  redisClient.hgetall("users", (err, values) => {
    res.json(values);
  });
});

app.listen(5000, () => console.log("Service #1 🐳 is listening on port 5000"));

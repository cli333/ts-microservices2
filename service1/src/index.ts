import express from "express";
import cors from "cors";
import redis from "redis";
// import keys from "./keys";

// VISITS API, "/visits/"

const app = express();

app.use(express.json());
app.use(cors());

const client = redis.createClient({
  host: "redis",
  port: 6379,
});

client.set("visits", String(0));

// app.get("/api", (req: express.Request, res: express.Response) => {
//   res.json("Hi from Service #1 🐳");
// });

app.get("/api", (req: express.Request, res: express.Response) => {
  client.get("visits", (err, visits) => {
    res.json(visits);
    client.set("visits", String(+visits + 1));
  });
});

app.listen(5000, () => console.log("Service #1 🐳 is listening on port 5000"));

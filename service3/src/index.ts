import express from "express";
import cors from "cors";

// PHOTOS API

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: express.Request, res: express.Response) => {
  res.json("Hi from Service #3 🐳🐳🐳");
});

app.listen(5000, () =>
  console.log("Service #3 🐳🐳🐳 is listening on port 5000")
);

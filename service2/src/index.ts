import express from "express";

const app = express();

app.use(express.json());

app.get("/api/", (req: express.Request, res: express.Response) => {
  res.json("Requesting from Service2");
});

app.listen(5000, () =>
  console.log("Service: Service2 is listening on port 5000")
);

import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());

const rawData = fs.readFileSync("../env.json");
const { type: serviceType } = JSON.parse(rawData.toString()) as {
  type: string;
};

app.get("/api/", (req: express.Request, res: express.Response) => {
  res.json(`Requesting from ${serviceType}`);
});

app.listen(5000, () =>
  console.log(`Service: ${serviceType} is listening on port 5000`)
);

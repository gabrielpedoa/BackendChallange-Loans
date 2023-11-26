import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();
const port = 3000;

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use(express.json());
app.use(router());

app.listen(port, () => {
  console.log(`SERVER ON`);
});

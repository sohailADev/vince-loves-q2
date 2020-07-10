import express from "express";
import path from "path";

const PORT = process.env.PORT || 4000;
const CURRENT_SERVER_DIRECTORY = path.resolve(path.dirname("."));
const STATIC_DIRECTORY = path.resolve(CURRENT_SERVER_DIRECTORY, "backend", "public");
const things = [{ name: "Vincent" }, { name: "Suri" }, { name: "Jacob" }, { name: "Tj" }];

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(STATIC_DIRECTORY));
app.get("/api/things", (req, res) => {
  res.json(things);
});

app.post("/api/things", (req, res) => {
  things.push(req.body);
  res.json(things);
});

app.listen(PORT, () => console.info(`Example app listening at http://localhost:${PORT}`));

process.on("unhandledRejection", (reason, p) => {
  console.error("Unhandled Rejection at:", p, "reason:", reason);
});

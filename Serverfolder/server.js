import express from "express";
import cors from "cors";
import { db } from "./databaseconnection.js";
const app = express();
app.use(express.json());
app.use(cors());

app.listen(8080, () => {
    console.log("Server is running on local port 8080!");
});

app.get("/", function (req, res) {
    res.json ({message:"this is the root route."});
});

app.get("/readroute", async (req, res) => {
    const result = await db.query("SELECT * FROM {JJguestbook}");
    res.json(result.rows);
});

app.post("/createtableEntry", (req, res) => {
    const newData = req.body;
    const query = db.query (
        'INSERT INTO {JJguestbook} (name, date_of_visit, comments) VALUES ($1, $2, $3) RETURNING *',
        {
            newData.name,
            newData.date_of_visit,
            newData.comments,
        }
    );
    res.json({ message: "Data sent to the database!" });
    //   res.json(query.rows);
});
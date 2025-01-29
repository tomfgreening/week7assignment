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
    res.json ({message:"this is the root route."};)
});

app.get("/readroute", async (req, res) => {
    const result = await db.query("SELECT * FROM {tablenamehere}");
    res.json(result.rows);
});

app.post("/createtableEntry", (req, res) => {
    const newData = req.body;
    const query = db.query (
        'INSERT INTO {tablenamehere} (column name, 2 ,3 ,4) VALUES ($1, $2, $3, $4) RETURNING *',
        {
            newData.,
            newData.,
            newData.,
            newData.,
        }
    );
    res.json({ message: "Data sent to the database!" });
    //   res.json(query.rows);
});
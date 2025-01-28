import express from "express";
import cors from "cors";
import { db } from "./databaseconnection.js";
const app = express();
app.use(express.json());
app.use(cors());
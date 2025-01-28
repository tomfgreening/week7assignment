import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const dbConnectionString = process.env.DATABASEURL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

// Remember to use database pooler URL in ENV file, or the above will not work.
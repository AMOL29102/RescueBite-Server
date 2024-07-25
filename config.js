require("dotenv").config();
const pg = require("pg");

const { Pool } = pg;

const db = new Pool({
  connectionString: process.env.POSTGRES_URL,
});
module.exports = db;

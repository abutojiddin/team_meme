import express from "express";
import pool from "../config/connection.js";
const getClient = express.Router();

getClient.get(`client`, async (req, res) => {
  const result = await pool.query("select * from client");
  console.log(result.rows);
  res.json(201).json({ client: result.rows });
});

export default getClient ;
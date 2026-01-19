import express from "express";
import pool from "../config/connection.js";
const getClient = express.Router();

getClient.get(`/`, async (req, res) => {
  const result = await pool.query("select * from client");
  console.log(result.rows);
  res.status(200).json({ clients: result.rows });
});

export default getClient;

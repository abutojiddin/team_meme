import { Pool } from "pg";
import 'dotenv/config'

const pool = new Pool({
    connectionString: process.env.DB_STRING,
    ssl: {
        rejectUnauthorized: true
    }
}) 
pool.connect()
    .then(() => console.log('Databasega ulandik'))
    .catch(err => console.log('Databasega ulanishdagi halotik: ', err))

export default pool;
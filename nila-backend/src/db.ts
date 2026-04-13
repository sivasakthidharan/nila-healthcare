import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
   connectionString: process.env.DATABASE_URL,
   
    ssl: { rejectUnauthorized: false }  // ✅ Required for Supabase

   
        //  user: process.env.DB_USER,
        //  host: process.env.DB_HOST,
        //  database: process.env.DB_NAME,
        //  password: process.env.DB_PASSWORD,
        //  port: Number(process.env.DB_PORT),
  //newly added
});

export default pool;

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Database connected successfully');
  release();
});


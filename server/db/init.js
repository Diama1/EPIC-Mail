import { Pool } from 'pg';
import dotenv from 'dotenv';
import query from './queries';

dotenv.config();


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  pool.on('connect', () => {
});

const createUsersTable = async () => {
    const queryText = query.createUsersTable;
    await pool.query(queryText)
      .then(async () => {
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };
  (async () => {
      await createUsersTable();
      pool.end();
      console.log(' users');
    })()
    .catch((err) => {
        console.log(err);
    })
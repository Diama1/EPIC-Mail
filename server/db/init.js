import { Pool } from 'pg';
import dotenv from 'dotenv';
import query from './queries';

dotenv.config();

console.log(process.env.DATABASE_URL)
console.log("fjhfjhfj")
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
  

  const createMessageTable = async () => {
    const queryText = query.createMessageTable;
    await pool.query(queryText)
      .then(async () => {
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };
  const createGroupTable = async () => {
    const queryText = query.createGroup;
    await pool.query(queryText)
    .then(async () => {

    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
  };

  const createGrouMember = async () => {
    const queryText = query.createGrouMember;
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
      await createMessageTable();
      await createGroupTable();
      await createGrouMember();
      pool.end();
     
    })()
    .catch((err) => {
        console.log(err);
    })
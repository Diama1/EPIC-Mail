const query = {
    createUsersTable: `CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(128) NOT NULL,
        lastname VARCHAR(128) NOT NULL ,
        email VARCHAR(128) NOT NULL UNIQUE,
        password VARCHAR(128) NOT NULL,
        isAdmin BOOLEAN DEFAULT FALSE,
        created_date TIMESTAMP,
        modified_date TIMESTAMP
      )`,
      signup: `INSERT INTO
      users(firstname, lastname, email, password, created_date, modified_date)
      VALUES($1, $2, $3, $4, $5, $6)
      returning *`,
      
      login: 'SELECT * FROM users WHERE email = $1',
}

export default query;
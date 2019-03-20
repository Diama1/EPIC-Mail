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
      createGroup:`CREATE TABLE IF NOT EXISTS messageGroup(
        id SERIAL PRIMARY KEY,
        groupName VARCHAR(128) NOT NULL,
        adminId INTEGER,
        FOREIGN KEY (adminId) REFERENCES users (id) ON DELETE NO ACTION

      )`,
      createGrouMember: `CREATE TABLE IF NOT EXISTS groupMember(
        id SERIAL PRIMARY KEY,
        groupId INTEGER,
        memberId INTEGER,
        FOREIGN KEY (groupId) REFERENCES messageGroup (id) ON DELETE NO ACTION,
        FOREIGN KEY (memberId) REFERENCES users (id) ON DELETE NO ACTION

      )`,
      
      createMessageTable: `CREATE TABLE IF NOT EXISTS messages(
        id SERIAL PRIMARY KEY,
        createdOn TIMESTAMP,
        subject VARCHAR(255) NOT NULL,
        message VARCHAR(500) NOT NULL,
        senderId INTEGER,
        receiverId INTEGER,
        groupId INTEGER,
        FOREIGN KEY (senderId) REFERENCES users (id) ON DELETE NO ACTION,
        FOREIGN KEY (receiverId) REFERENCES users (id) ON DELETE NO ACTION,
        FOREIGN KEY (groupId) REFERENCES messageGroup (id) ON DELETE NO ACTION,
        parentMessageId INTEGER DEFAULT 1,
        status VARCHAR(128) NOT NULL
        

      )`,
      
      
      createMessage: `INSERT INTO
      messages(createdOn, subject, message, senderId , receiverId , status)
      VALUES($1, $2, $3, $4, $5, $6)
      returning *`,
      getAllMessages:  `SELECT * from messages`,
      
      getOneMessage: `SELECT * from messages where id = $1 `,

      deleteOneMessage: `DELETE  from messages where id = $1 returning *`,

      groupCreate: `INSERT INTO
      messageGroup(groupName, adminId)
      VALUES($1, $2)
      returning *`,
      deleteGroup: `DELETE  from messageGroup where id = $1 returning *`,
      getOneGroup: `SELECT * from messageGroup where id = $1 `,

      memberCreate: `INSERT INTO
      groupMember(groupId, memberId)
      VALUES($1, $2)
      returning *`,
      

      
      signup: `INSERT INTO
      users(firstname, lastname, email, password, created_date, modified_date)
      VALUES($1, $2, $3, $4, $5, $6)
      returning *`,
      
      login: 'SELECT * FROM users WHERE email = $1',
}

export default query;
// src/usingDB/controllers/Helper.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import SECRET from '../../env';

const Helper = {

  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  },
  
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },
 
 
  generateToken(id) {
    const token = jwt.sign({
      userId: id
    },
      SECRET, { expiresIn: '7d' }
    );
    return token;
  }
}

export default Helper;
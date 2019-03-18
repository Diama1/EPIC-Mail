import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const Helper = {

  EncryptPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  },
  
  comparePassword(EncryptPassword, password) {
    return bcrypt.compareSync(password, EncryptPassword);
  },
 
 
  generateToken(id) {
    const token = jwt.sign({
      userId: id
    },
    process.env.SECRET, { expiresIn: '7d' }
    );
    return token;
  }
}

export default Helper;

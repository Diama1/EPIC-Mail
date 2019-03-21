import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { decode } from 'punycode';

dotenv.config();

const Helper = {

  EncryptPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  },
  
  comparePassword(EncryptPassword, password) {
    return bcrypt.compareSync(password, EncryptPassword);
  },
 
 
  generateToken(id) {
    
    const token = jwt.sign({userId: id},
    process.env.SECRET, { expiresIn: '7d' }
    );
    return token;
  },
  checkToken(req, res, next) {
    const token = req.headers['x-access-token'] || req.body['x-access-token'] || null;

    if (!token) {
      return res.status(401).json({
        error: 'Please, sign-in!',
      });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(500).json({
          error: 'Failed to authenticate token',
        });
      }
    
      req.id = decoded.userId || null;
      
      // const UserId = decoded.userId;
      console.log(req.id)
      return next();
      
      
      
    });
    return true;
  },


}

export default Helper;

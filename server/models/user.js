import moment from 'moment';
import Helper from '../helper/user';
import db from '../db/runners';
import query from '../db/queries';

class UserAccount {

    async createUserAccount(user) {
        let Response = {};

        const hashPassword = Helper.EncryptPassword(user.body.password);
        const createQuery = query.signup;
        const newUser = [
            
            user.body.firstName,
            user.body.lastName,
            user.body.email,
            hashPassword,
            moment(new Date()),
            moment(new Date()),
            
        ];
            
            
        
        try {
            const { rows } = await db.query(createQuery, newUser);
            const token = Helper.generateToken(rows[0].id);
            
            Response = {
                status: true,
                row: rows[0],
                token,
              };
        }

        catch ( error ) {
            if (error.routine === '_bt_check_unique') {
                return {
                  status: false,
                  code: 409,
                  message: 'User with that EMAIL already exist',
                };
            }
            Response = {
                status: false,
                code: 503,
                message: error,
              };
        }
        
        return Response;

        
    }

    async loginUser(user){
        const loginQuery = query.login;

    try {
      const { rows } = await db.query(loginQuery, [user.email]);
      if (!rows[0] || !Helper.comparePassword(rows[0].password, user.password)) {
        return {
          status: false,
          message: 'The credentials you provided is incorrect',
        };
      }
      const token = Helper.generateToken(rows[0].id);
      return {
        status: true,
        row: rows[0],
        token,
      };
    } catch (error) {
      return {
        status: false,
        message: error,
      };
    }
  }

    }
        
        
    


export default new UserAccount;

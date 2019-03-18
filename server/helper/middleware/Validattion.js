import Joi from 'joi';
import jwt from 'jsonwebtoken';
import db from '../../db/runners';

const verifyToken = async (token) => {
    if (!token) {
        return {
            status: false,
            code: 404,
            message: 'The token is not Provide'
        };
    }
    try {
        const decoded = await jwt.verify(token, process.env.SECRET);
        const ID = 'SELECT * FROM users WHERE id = $1';
        const { row } = await db.query(ID, [decoded.userId]);

        if (!row[0]) {
            return {
                status: false,
                code: 401,
                message: 'The User is invalid'
            };
        }
        return {
            status: true,
            data: rows[0],
          };

    }
    catch (error) {
        return {
            status: false,
            code: 401,
            message: 'The User is invalid'
        }

    }  
}

const authenticate = async (req, res, next) => {

    const token = req.headers['user-token'];
    const verifiedToken = await verifyToken(token);

    if (!verifiedToken.status) {
        return res.status(verifiedToken.code).send({
          status: verifiedToken.code,
          error: verifiedToken.message,
        });
      }
      req.user = { id: verifiedToken.data.id };
      return next();

}


const validateAuthantication = {

    signUpValidation(req, res, next) {
        let userSchema = {
            firstName: Joi.string().alphanum().required(),
            lastName: Joi.string().alphanum().required(),
            email: Joi.string().email({ minDomainAtoms: 2 }).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
        }
        const result = Joi.validate(req.body, userSchema);

        if (result.error) {
            return res.status(400).send({
              status: 400,
              message: result.error.details[0].message.replace(/[^a-zA-Z ]/g, ''),
            });
        }
        return next()
    },

    loginValidation(req, res, next) {
        const LoginSchema = {
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
        };
        
        const result = Joi.validate(req.body, LoginSchema);
        if (result.error) {
            return res.status(400).json({
                status: 400,
                message: result.error.details[0].message.replace(/[^a-zA-Z ]/g, ''),
            });
        }
        return next();
    },

    async createMessage( req, res, next) {
        const schema = {
            subject : Joi.string().trim(),
            message : Joi.string().trim().required(),
            SenderID : Joi.number().required(),
            receiverID : Joi.number().required(),
            ParrentMessageId : Joi.number().required(),
            status : Joi.string().trim().required()
        }

        const result = Joi.validate(req.body, schema);
        if (result.error) {
            return res.status(400).send({
                status: 400,
                message: result.error.details[0].message.replace(/[^a-zA-Z ]/g, ''),
            });
    }
    return authenticate(req, res, next);

    }

    


}

export default validateAuthantication;

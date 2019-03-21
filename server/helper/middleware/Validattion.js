import Joi from 'joi';

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
            receiverid : Joi.number().required(),
            groupid : Joi.number(),
            status : Joi.string().trim().required()
        }

        const result = Joi.validate(req.body, schema);
        if (result.error) {
            return res.status(400).send({
                status: 400,
                message: result.error.details[0].message.replace(/[^a-zA-Z ]/g, ''),
            });
    }
    return next();
   

    }

    


}

export default validateAuthantication;

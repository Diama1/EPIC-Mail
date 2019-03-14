import Joi from 'joi';


const validateAuthantication = {

    signUpValidation(newUser) {
        let userSchema = {

            name: Joi.string().required(),
            email: Joi.string().email({ minDomainAtoms: 2 }),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
        }
        return Joi.validate(newUser, userSchema);
    },

    loginValidation(newUser) {
        const LoginSchema = {
            email: Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
        }

        return Joi.validate(newUser, LoginSchema)
    }

    


}






export default validateAuthantication;

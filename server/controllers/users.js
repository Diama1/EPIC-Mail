import userAccountModel from '../models/user';
import validation from '../helper/ValidateAuth';

class UserSignUpController {


    static userSignUp(req,res) {
        if (!req.body.name || !req.body.email || !req.body.password) {
            return res.status(400).send({
                status: 400,
                Error: 'There is an empty field!'
            })
} 

        const { error } = validation.signUpValidation(req.body)
        if (error){
            res.status(400).send({
                status:400,
                Error:error.details[0].message
            })
        }
        

        const userToken = userAccountModel.createUserAccount(req);
        
        res.status(201).send({
            status: 201,
            data: [{
                token: userToken,
            }]
        })
        
    }

    static login(req,res) {

        const { error } = validation.loginValidation(req.body);

        if (error){
            res.status(400).send({
                status:400,
                Error:error.details[0].message
            });
            return;
        }
        
        const userlogin = userAccountModel.loginUser(req, req);
        

        if (userlogin.status == false) {
            return res.status(401).send({
                status: 401,
                Error: userlogin.message,
            })
        }
               
        return res.status(200).send({
            status: 200,
            data: [{
                token: userlogin.token,
            }]
        })
    }
}

export default UserSignUpController;

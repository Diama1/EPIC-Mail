import userAccountModel from '../models/user';

class UserSignUpController {


    static userSignUp(req,res) {

        const userToken = userAccountModel.createUserAccount(req);
        
        res.status(201).send({
            status: 201,
            data: [{
                token: userToken,
            }]
        })
        
    }

    static login(req,res) {

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

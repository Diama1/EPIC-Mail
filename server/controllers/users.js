import userAccountModel from '../models/user';

class UserSignUpController {


    static userSignUp(req,res) {

        const newUser = userAccountModel.createUserAccount(req);
        newUser.then((user) => {
            if (!user.status) {
                return res.status(user.code).send({
                    status:user.code,
                    error: user.message
                })
            }
            return res.status(201).send({
                status:201,
                data: [{
                    token: user.token,
                    user: user.row
                }]
            })
        })
        
       
        
    }

    static login(req,res) {

        const userlogin = userAccountModel.loginUser(req.body);
        userlogin.then((user) => {
            if (!user.status) {
                return res.status(401).send({
                    status:401,
                    error: user.message
                })
            }
            return res.status(200).send({
                status:200,
                data: [{
                    token: user.token,
                    user: user.row
                }]
            })

        })
        
    }
}

export default UserSignUpController;

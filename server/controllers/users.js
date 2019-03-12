import userAccountModel from '../models/user';

const accountController = {

    userAccount(req,res) {
        if (!req.body.name || !req.body.email || !req.body.password) {
            return res.status(400).send({
                status: 400,
                Error: 'There is an empty field!'
            })

        }  
        const userToken = userAccountModel.createUserAccount(req);
        res.status(201).send({
            status: 201,
            data: [{
                token: userToken,
            }]
        })
        
    },
    login(req,res) {
        const userlogin = userAccountModel.login(req,req);
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

export default accountController;
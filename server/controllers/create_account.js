import userAccountModel from '../models/create_account';

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
        
    }
}

export default accountController;
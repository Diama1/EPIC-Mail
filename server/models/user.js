import Helper from '../helper/user';

class UserAccount {

    constructor() {
        this.users = []
    }

    createUserAccount(user){
        const hashPassword = Helper.EncryptPassword(user.body.password);
        const newUser = {
            id:this.users.length + 1,
            firstName:user.body.firstName,
            lastName:user.body.lastName,
            email:user.body.email,
            password: hashPassword,
            passwordMatch:user.body.passwordMatch
            
        }
        this.users.push(newUser);
        const token = Helper.generateToken(newUser.id);
        return token;
    }

    loginUser(email, password){
        const findUser = this.users.find(user => user.email === email.body.email);

        if (!findUser) {
            return {
                status: false,
                message: 'Wrong credentials!'
            }
        
        
        }
        const comparePaswword = Helper.comparePassword(findUser.password, password.body.password);
        if (!comparePaswword){

            return {
                status: false,
                message: 'Wrong credentials!'
            }

        }
        const token = Helper.generateToken(findUser.id)
        return {
            status: true,
            token,
        }
    }
}

export default new UserAccount;

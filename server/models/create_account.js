import Helper from '../helper/helper';

class User_Account {

    constructor() {
        this.users = []
    }

    createUserAccount(user){
        const hashPassword = Helper.hashPassword(user.body.password);
        const newUser = {
            id:this.users.length + 1,
            name:user.body.name,
            email:user.body.email,
            password: hashPassword,
            passwordMatch:user.body.passwordMatch
            
        }
        this.users.push(newUser);
        const token = Helper.generateToken(newUser.id);
        return token;
    }
}

export default new User_Account;

const UserService = require('./UserSerVice');

const register = async (name, email, password, age, confirm_password) =>{
    if(password !== confirm_password){
        throw new Error('Dữ liệu không chính xác')
    }
    const user = await UserService.register(name, email, password, age);
    return user;
}

const login = async (email, password) =>{
    const user = await UserService.login(email, password);
    return user;
}     



module.exports = { register, login };



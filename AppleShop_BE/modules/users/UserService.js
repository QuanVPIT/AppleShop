
const UserModel = require('./UserModel');
const bcrypt = require('bcryptjs');
const { token } = require('morgan');

const login = async (email, password) => {
    //1. tìm user theo email: Select email, password, name, id form ursers where email = email and password = password
    //2. So sánh password
    //3. Trả về user nếu đúng, null nếu sai
    const user = await UserModel.findOne({ email });
    // kiểm tra password đã má hóa 
    if (user && bcrypt.compareSync(password, user.password)) {
        return user;
    }
    return null;
}

const register = async (name, email, password, age) => {
    //1. tạo user mới'
    //2. Lưu user mới
    //3. Trả về user mới
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = new UserModel({ name, email, password: hash, age });
    await user.save();
    return user;
}



module.exports = { login, register};

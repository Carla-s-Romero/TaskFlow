const User = require("../models/user.model");


const getUsers = async () => {

    const users = await User.findAll();

    return users;
};


const getUserById = async (id) => {

    const user = await User.findByPk(id);

    return user;
};


const createUser = async (data) => {

    const user = await User.create({
        name: data.name,
        email: data.email
    });

    return user;
};


const updateUser = async (id, data) => {

    const user = await User.findByPk(id);

    if (!user) {
        return null;
    }

    await user.update(data);

    return user;
};


const deleteUser = async (id) => {

    const user = await User.findByPk(id);

    if (!user) {
        return false;
    }

    await user.destroy();

    return true;
};


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
const userService = require("../services/user.service");


const index = async (req, res) => {

    const users = await userService.getUsers();

    return res.json(users);
};


const store = async (req, res) => {

    const user = await userService.createUser(req.body);

    return res.status(201).json(user);
};


const show = async (req, res) => {

    const user = await userService.getUserById(req.params.id);

    return res.json(user);
};


const update = async (req, res) => {

    const user = await userService.updateUser(
        req.params.id,
        req.body
    );

    return res.json(user);
};


const destroy = async (req, res) => {

    const deleted = await userService.deleteUser(req.params.id);

    return res.json({
        success: deleted
    });
};


module.exports = {
    index,
    store,
    show,
    update,
    destroy
};
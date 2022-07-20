const {User, Thought} = require('../models');

const userController = {
    createUser(req,res) {
        User.create(req.body)
        .then((userData) => {
            res.json(userData)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err);
        })
    },
    deleteUser(req,res) {

    },
    updateUser(req,res) {

    },
    findOneUser(req,res) {
        User.findOne({})
    },
    findAllUsers(req,res) {
        User.find()
        .select('-__v')
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    addFriend(req,res) {

    },
    removeFriend(req,res) {
        
    }
}


module.exports = userController;
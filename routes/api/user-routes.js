const router = require("express").Router();
const {
    createUser,
    deleteUser,
    updateUser,
    findOneUser, 
    findAllUsers, 
    addFriend,
    removeFriend
} = require('../../controllers/userConroller')




router.route('/').get(findAllUsers).post(createUser);


router.route('/:userId').get(findOneUser).delete(deleteUser).put(updateUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
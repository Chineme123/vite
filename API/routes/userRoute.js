const route = require('express').Router();
const {createUser, getAllUser, getSingleUser, updateUserById, deleteUser} =  require('../controllers/userController');
// const userRoute = require('../controllers/user');

route.post('/createuser', createUser)
route.get('/getusers', getAllUser)
route.get('/getuser/:id', getSingleUser)
route.patch('/updateuse/:id', updateUserById)
route.delete('/deleteuser/:id', deleteUser)

module.exports = route;
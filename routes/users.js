var express = require('express');
var router = express.Router();

const Users = require('../app/Controllers/user.controllers.js');



// Retrieve all Users
router.get('/Users', Users.test);
router.post('/create', Users.User_create);
router.post('/login', Users.User_login);
router.get('/detail/:Id', Users.User_detail);
// router.put('/:id/update', Users.User_update);



module.exports = router;

var express = require('express');
var router = express.Router();
const Users = require('../app/Controllers/user.controllers.js');
const Country = require('../app/Controllers/country.controllers.js');
const City = require('../app/Controllers/city.controller.js');



// Retrieve all Users
router.get('/userslist', Users.User_list);
router.post('/create', Users.User_create);
router.post('/login', Users.User_login);
router.get('/detail/:Id', Users.User_detail);
router.post('/update/:Id', Users.User_update);

//Country Data Route

router.get('/countrylist', Country.Country_list);
router.post('/country/create', Country.Country_create);
router.get('/country/detail/:Id', Country.Country_detail);
router.post('/country/update/:Id', Country.Country_update);

//City Data Route

router.get('/citylist', City.City_list);
router.post('/city/create', City.City_create);
router.get('/city/detail/:Id', City.City_detail);
router.post('/city/update/:Id', City.City_update);




module.exports = router;

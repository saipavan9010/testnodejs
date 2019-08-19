
const UserService = require('../../services/user.services');


exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


exports.User_create = async function (req, res) {
    try {
         var user=await UserService.saveUsers(req,res); 
         return res.status(200).json(user);
    }catch (e) {
        throw Error(e.message);
   }
};


exports.User_login =async function (req, res,next) {
    try {
        // console.log(req)
        var user_details=await UserService.login(req,res);
        //console.log(user_details);
        return res.status(200).json(user_details);
   }catch (e) {
    throw Error(e.message);
   }
};

exports.User_list=async function(req,res,next){
    try{
    var user_list= await UserService.userlist();
    return res.status(200).json(user_list);
    } catch (e){
        throw Error(e.message);
    }
}


exports.User_detail=async function (req, res,next) {
    try{
    var user_detail= await UserService.userdetail(req,res,next);
    return res.status(200).json(user_detail);
    }catch (e){
    throw Error(e.message);
    }
  
};

// exports.User_update = function (req, res) {
//     User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, User) {
//         if (err) return next(err);
//         res.send('User udpated.');
//     });
// };





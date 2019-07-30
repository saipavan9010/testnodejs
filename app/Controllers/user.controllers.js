
const UserService = require('../../services/user.services');


exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


exports.User_create = async function (req, res) {
    try {
         var user=await UserService.saveUsers(req,res);
         return res.status(200).json({ status: 200, data: user, message: "User Created successfully" });
    }catch (e) {
    // Log Errors
        return res.status(400).json({ status: 400, message: e.message });
   }
};


exports.User_login =async function (req, res,next) {
    try {
        var user_details=await UserService.login(req,res);
        console.log(user_details);
        return res.status(200).json(user_details);
   }catch (e) {
   // Log Errors
       return res.status(400).json({ status: 400, message: e.message });
   }
};


exports.User_detail=async function (req, res,next) {
   var user_deatils=await User.findById(req.params.Id, function(err, userInfo){
        if (err) {
            res.status(400).json(err);
        } else {
        res.status(200).json(user_deatils);
        }
       });
};

// exports.User_update = function (req, res) {
//     User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, User) {
//         if (err) return next(err);
//         res.send('User udpated.');
//     });
// };





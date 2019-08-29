var Cityservice = require('../app/models/city.model');

exports.saveCity = async function (req,res,next) {

    try {
        let city =  new Cityservice(
            {
                country_id: req.body.country_id,
                city_name: req.body.city_name,
                
            }
        );
        let city_data=await city.save();
        return  {status:"success", message: "City Created"};
        
        
    } catch (e) {
        return {message:e.message};

    }
}



exports.citylist = async function (req,res,next) {

    try {
        var city_data=await Cityservice.find().populate('country_id').exec();
        return  {status:"success",city_data: city_data};
        
    } catch (e) {
        console.log(e)
        return {message:e.message};
    }
}

exports.citydetail = async function (req,res,next) {

    try {
        var city_detail=await Cityservice.findById(req.params.Id);
        return  {status:"success",city: city_detail};
        
    } catch (e) {
        // Log Errors
        return {message:e.message};
    }
}

exports.cityupdate = async function (req,res,next) {

    try {
        var city_update=await Cityservice.findByIdAndUpdate(req.params.Id,{$set: req.body});
        return  {status:"success",message:"Updated Successfully"};
        
    } catch (e) {
        // Log Errors
        return {message:e.message};
    }
}



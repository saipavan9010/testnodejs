var Countryservice = require('../app/models/country.model');

exports.saveCountry = async function (req,res,next) {

    try {
        let country =  new Countryservice(
            {
                country_code: req.body.country_code,
                country_name: req.body.country_name,
                
            }
        );
      let country_data=await country.save();
        return  {status:"success", message: "Country Created"};
        
        
    } catch (e) {
        console.log(e._message);
        // Log Errors
        throw Error(e._message);
    }
}



exports.countrylist = async function (req,res,next) {

    try {
        var country_data=await Countryservice.find();
        return  {status:"success", message: "user found!!!",country_data: country_data};
        
    } catch (e) {
        // Log Errors
        throw Error(e.message);
    }
}

exports.countrydetail = async function (req,res,next) {

    try {
        var country_detail=await Countryservice.findById(req.params.Id);
        return  {status:"success",country: country_detail};
        
    } catch (e) {
        // Log Errors
        throw Error(e.message);
    }
}

exports.countryupdate = async function (req,res,next) {

    try {
        var country_update=await Countryservice.findByIdAndUpdate(req.params.Id,{$set: req.body});
        return  {status:"success",message:"Updated Successfully"};
        
    } catch (e) {
        // Log Errors
        throw Error(e.message);
    }
}



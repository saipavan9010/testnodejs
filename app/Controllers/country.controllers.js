
const CountryService = require('../../services/country.services');


exports.Country_create = async function (req, res) {
    try {
         var country=await CountryService.saveCountry(req,res); 
         return res.status(200).json(country);
    }catch (e) {
      
        return res.status(422).json({message:e.message});
   }
};



exports.Country_list=async function(req,res,next){
    try{
    var country_list= await CountryService.countrylist();
    return res.status(200).json(country_list);
    } catch (e){
        return res.status(422).json({message:e.message});
    }
}


exports.Country_detail=async function (req, res,next) {
    try{
    var country_detail= await CountryService.countrydetail(req,res,next);
    return res.status(200).json(country_detail);
    }catch (e){
    return res.status(422).json({message:e.message});
    }
  
};

exports.Country_update =async function (req, res,next) {
    try{
        var country_update= await CountryService.countryupdate(req,res,next);
        return res.status(200).json(country_update);
    }catch (e){
        return res.status(422).json({message:e.message});
        
    }
    
};





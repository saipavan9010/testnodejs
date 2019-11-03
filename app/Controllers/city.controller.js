
const Cityservice = require('../../services/city.services');


exports.City_create = async function (req, res) {
    try {
         var City=await Cityservice.saveCity(req,res); 
         return res.status(200).json(City);
    }catch (e) {
      
        return res.status(422).json({message:e.message});
   }
};



exports.City_list=async function(req,res,next){
    try{
         
    var City_list= await Cityservice.citylist();
    return res.status(200).json(City_list);
    } catch (e){
        return res.status(422).json({message:e.message});
    }
}


exports.City_detail=async function (req, res,next) {
    try{
    var City_detail= await Cityservice.citydetail(req,res,next);
    return res.status(200).json(City_detail);
    }catch (e){
    return res.status(422).json({message:e.message});
    }
  
};

exports.City_update =async function (req, res,next) {
    try{
        var City_update= await Cityservice.cityupdate(req,res,next);
        return res.status(200).json(City_update);
    }catch (e){
        return res.status(422).json({message:e.message});
        
    }
    
};





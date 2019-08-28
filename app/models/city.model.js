const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
    country_id:{type:mongoose.Schema.Types.ObjectId,required: true,ref:'Country'},
    city_name:{type:String,required: true},
    }, {
    timestamps: true
});



module.exports = mongoose.model('City', CitySchema);
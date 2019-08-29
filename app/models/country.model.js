const mongoose = require('mongoose');

const CountrySchema = mongoose.Schema({
    country_code: String,
    country_name:{type:String,required: true},
    }, {
    timestamps: true
});



module.exports = mongoose.model('countries', CountrySchema,'countries ');
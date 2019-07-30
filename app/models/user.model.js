const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    mobile_no: Number,
    email: {type:String,unique:true,required:true},
    user_name: String,
    gender: String,
    password:{type:String,required: true} 
    
}, {
    timestamps: true
});

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
 });

module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/test'),
            console.log("Connect to DB successfully!");
    } catch (error){
        console.log(error);
    }
}
module.exports = { connect };
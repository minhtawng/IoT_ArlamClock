const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://admin:minh8882@cluster1.qh46kp8.mongodb.net/minhkhon');
        console.log("Connect to DB successfully!");
    } catch (error){
        console.log(error);
    }
}
module.exports = { connect };
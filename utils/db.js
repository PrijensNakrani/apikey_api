const mongoose = require("mongoose");
const connectDb = async()=>{
    try {
        await mongoose.connect('mongodb+srv://user:user40@cluster0.0d5rwab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('connection successfull');
    } catch (error) {
        console.error(`database connection faild ${error}`);        
    }
}
module.exports = connectDb;
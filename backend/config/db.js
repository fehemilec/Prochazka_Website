require('dotenv').config();
const mongoose = require('mongoose');

const connectDB =async() => {

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log("MongoDB connection success");
    } catch (error) {
        console.error("MongoDB conn FAIL");
        process.exit();
    }
}

module.exports = connectDB;
const mongoose = require("mongoose")
// mongoose.connect(URI)

const URI = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Connection successfully to DB");        
    } catch (error) {
        console.error("Database connection failed");
        process.exit(0)
    }
}

module.exports = connectDB
import mongoose from "mongoose";

const DBConnection = async () => {
   
    const MONGO_URI = `mongodb://127.0.0.1:27017/FileSharing`;
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;
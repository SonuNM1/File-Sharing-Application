
import mongoose from "mongoose";

const dbConnection = async () => {
    const MONGODB_URI = `mongodb://127.0.0.1/27017/FileSharing` ; 
    try{
       await mongoose.connect(MONGODB_URI)
        console.log('Database connected')
    }catch(error){
        console.error('Error while connecting with the database: ', error.message) ;
    }
}

export default dbConnection ; 

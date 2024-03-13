import mongoose from "mongoose";

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

const mongooseConnection = async()=>{

    try{
        const conn = await mongoose.connect("mongodb+srv://anjumbahamani:ZOLmvocyPUmD87Ad@cluster0.za1hkdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.log(`error :${error.message}`)
        process.exit(1);
    }
}    

export default mongooseConnection;
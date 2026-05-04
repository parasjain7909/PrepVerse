import mongoose from "mongoose";
import dotenv  from "dotenv"
dotenv.config()
async function connectdb(){
   try{
      await mongoose.connect(process.env.MONGO_URI)
      console.log("mongodb connection is established")
   } catch(e){
    console.log("error is occured"+e)
   }
}
export default connectdb;
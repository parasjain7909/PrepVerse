import mongoose from "mongoose";
const blacklisttokenschema= await new mongoose.Schema({
    token:{
        type:String,
        required:[true]
    

    
}
})
export default mongoose.model("blacklisttoken",blacklisttokenschema)
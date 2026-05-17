const app = require("./src/app.js")
const dotenv = require("dotenv")
dotenv.config()
app.listen(3000,()=>{
    console.log("server is running")
})
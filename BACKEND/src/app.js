const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const connectdb = require("./config/database")
const app = express()
const quizRoutes = require("./routes/quiz.routes")





connectdb()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)
app.use("/api/quiz", quizRoutes);



module.exports = app
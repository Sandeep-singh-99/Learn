require("dotenv").config()
const express = require("express")
const app = express()
const cors = require('cors')
const port = 3000
const router = require("./router/auth-router")
const contactRouter = require("./router/contact-router")
const connectDB = require("./utils/db")


// let's tackle cors
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials: true,
}

 app.use(cors(corsOptions))

app.use(express.json())

app.use("/api/auth", router)
app.use("/api/form", contactRouter)

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`server is running http://localhost:${port}`);
    })    
})
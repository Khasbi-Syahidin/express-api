import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/users.js";
import showLog from "./middlewares/logMiddleware.js"

// run confin dotenv
dotenv.config()

// Initial Express Js
const app = express()

// Run CORS
app.use(cors())

// use req body 
app.use(json())

// show log reqest in terminal
app.use(showLog)

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Success'
    })
})

app.use('/users', userRoute)

app.use((req, res) => [
    res.status(404).json({
        message: 'Endpoint Not Found!'
    })
])

app.listen(PORT, () => {
    console.log(`Run Server in Port: ${PORT}`)
})

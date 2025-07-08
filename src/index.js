import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/users.js";
dotenv.config()

// Initial Express Js
const app = express()

// Run CORS
app.use(cors())

// use req body 
app.use(json())

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

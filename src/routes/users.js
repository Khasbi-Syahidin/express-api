import express from "express";
import { createUsers, getUsers } from "../controllers/usersController.js";
const userRoute = express.Router()

userRoute.get('/', getUsers)

userRoute.post('/', createUsers)

export default userRoute
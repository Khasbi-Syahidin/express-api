import express from "express";
import { create, index, update, show } from "../controllers/usersController.js";
const userRoute = express.Router()

import { validatorCreateUser, validatorUpdateUser} from "../validators/userValidator.js"

userRoute.get('/', index)

userRoute.get('/:id', show)

userRoute.post('/', validatorCreateUser, create)

userRoute.put('/:id', validatorUpdateUser, update)

export default userRoute
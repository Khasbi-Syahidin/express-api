import { getAllUsers, getUserById, storeUser, updateUser } from "../services/usersServices.js"
import { validationResult } from "express-validator"
export const index = async (req, res) => {
    try {
        const users = await getAllUsers()
        res.status(200).json({
            message: 'Success get all data users',
            data: users
        })
    } catch (err) {
        res.status(500).json({
            message: 'something wrong!',
            serverMessage: err.message
        })
    }
}

export const show = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await getUserById(userId)
        res.json({
            message: 'berhasil mengambil data user',
            data: user
        })
    } catch (err) {
        res.status(500).json({
            message: 'something wrong!',
            serverMessage: err.message
        })
    }
}
export const create = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {

        console.log(req.body)
        const user = await storeUser(req.body)

        return res.status(201).json({
            message: 'berhasil membuat user',
            data: user
        })

    } catch (err) {
        res.status(500).json({
            message: 'something wrong!',
            serverMessage: err.message
        })
    }
}


export const update = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
    try {
        const userId = req.params.id
        const data = {
            name: req.body?.name,
            email: req.body?.email,
            photo: req.body?.photo,
            age: req.body?.age,
        }
        const user = await updateUser(userId, data)
        res.json({
            message: 'berhasil update user',
            data: user
        })
    } catch (err) {
        res.status(500).json({
            message: 'something wrong!',
            serverMessage: err.message
        })
    }
} 
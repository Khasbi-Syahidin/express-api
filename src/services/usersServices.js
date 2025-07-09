import { createUser, findAllUsers, findUserById, updateUserById } from "../repositories/usersRepository.js"

export const getAllUsers = async () => {
    return await findAllUsers()
}

export const getUserById = async (id) => {
    return await findUserById(id)
}

export const storeUser = async (data) => {
    await getUserById(id)
    return await createUser(data)
}

export const updateUser = async (id, data) => {
    await getUserById(id)
    return await updateUserById(id, data)
}
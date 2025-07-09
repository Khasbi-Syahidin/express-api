import db from "../utils/db.js"

export const findAllUsers = async () => {
    const users = await db.user.findMany()
    return users
}

export const createUser = (data) => {
    const user = db.user.create(data)
    return user;
}


export const findUserById = (id) => {
    const user = db.user.findUnique({
        where: {
            id,
        }
    })
    return user
}

export const updateUserById = async (id, data) => {
    const user = await db.user.update({
        where: {
            id
        },
        data
    })
    return user
}


export const deleteUserById = async (id) => {
    const user = db.user.delete({
        where: {
            id
        }
    })

    return user;
}
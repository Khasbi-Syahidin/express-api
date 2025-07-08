import db from "../utils/db.js"

export const getUsers = async () => {
    const users = await db.users.findMany()

    if(!users){
        new Error('Users Not Found!')
    }

    return users
}
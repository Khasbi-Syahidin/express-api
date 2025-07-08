export const getUsers = (req, res) => {
    res.json({
        message: 'Success get data users'
    })
}


export const createUsers = (req, res) => {
    res.json({
        message: 'Success create data users',
        data: req.body
    })
}
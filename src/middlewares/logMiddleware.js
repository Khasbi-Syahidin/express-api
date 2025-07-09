const showLog = (req, res, next) => {
    console.log(`User request in endpoint: ${req.path} - ${req.method}`)
    next()
}


export default showLog
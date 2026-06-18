function logRequest(req, res, next) {

    console.log("==========")
    console.log(`Horário: ${new Date().toLocaleString()}`)
    console.log(`Método: ${req.method}`)
    console.log(`URL: ${req.url}`)
    console.log(`Body`, req.body)
    console.log("==========")

    next()
}

module.exports = logRequest
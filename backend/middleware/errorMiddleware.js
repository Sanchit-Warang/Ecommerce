const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error) // this will be passed to the error handler middleware
}

const errorHandler = (err, req, res, next) => {
    // if the status code is 200, set it to 500
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    let message = err.message

    // console.log(err)

    // Check for Mongoose bad ObjectId
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        message = 'Resource not found'
        statusCode = 404
    }

    res.status(statusCode).json({
        message,
        stack : process.env.NODE_ENV === 'production' ? "🥞" : err.stack
    })

}

export { notFound, errorHandler }
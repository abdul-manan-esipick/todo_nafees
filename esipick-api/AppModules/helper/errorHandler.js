class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super()
        this.statusCode = statusCode;
        this.message = message;
    }
}

const handleError = (err, res, next) => {
    let { statusCode, message, name } = err;
    res.status(statusCode).send(message);
    res.end()
}

module.exports =  {handleError, ErrorHandler}
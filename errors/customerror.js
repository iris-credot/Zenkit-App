 class CustomError extends Error {
    
    constructor(message,statusCode) {
       // calling the constructor of this error class
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
        
        this.isOperational = true;
        Error.captureStackTrace(this,this.constructor);

    }
}
module.exports= CustomError;
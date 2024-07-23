
class ErroHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleWare = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error!";
    err.statusCode = err.statusCode || 500;
    if (err.name === "CaseError") {
        const message = `Resources not found. Invalid ${err.path}`;
        err = new ErroHandler(message, 400);
    }
    //data base error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)}  Entered`;
        err = new ErroHandler(message, 400);
    }
    if (err.name === "JsonWebTokenError") {
        const message = `Json web token is Invalid,Try Again!`;
        err = new ErroHandler(message, 400);
    }
    if (err.name === "TokenExpiredError") {
        const message = `Json web token expired,Try Again!`;
        err = new ErroHandler(message, 400);
    }
    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default ErroHandler; 
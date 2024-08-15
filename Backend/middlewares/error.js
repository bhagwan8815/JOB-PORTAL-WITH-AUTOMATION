class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errormiddleware = (err, req,res,next)=>{
    err.statusCode = err.statusCode ||500;
    err.message = err.message || "Internal server error.";

    if(err.name ==="CaseError"){
        const message =`Invalid ${err.path}`;
        err = new ErrorHandler(message, 400)
    }

    if(err.code ===11000){
        const message = `Duplicate ${Object.keys(err.keyvalue)} Entered.`
        err = new ErrorHandler(message, 400)
    }

    if(err.name ==="JsonwebTokenError"){
        const message =`Json web Token is invalid, Try agian. `;
        err = new ErrorHandler(message, 400)
    }

    if(err.name ==="TokenExpiredError"){
        const message =`Json web Token is expired, Try again.`;
        err = new ErrorHandler(message, 400)
    }


    return res.status(err.statusCode).json({
        success: false,
        message:err.message,
    })
}
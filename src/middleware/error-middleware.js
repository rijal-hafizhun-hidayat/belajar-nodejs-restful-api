import { ResponseError } from "../error/response-error.js";

const errorMiddleware = async (error, request, respond, next) => {
    if(!error){
        next()
        return;
    }

    if(error instanceof ResponseError){
        respond.status(error.status).json({
            errors: error.message
        }).end()
    }
    else{
        respond.status(500).json({
            errors: error.message
        }).end()
    }
}

export {
    errorMiddleware
}
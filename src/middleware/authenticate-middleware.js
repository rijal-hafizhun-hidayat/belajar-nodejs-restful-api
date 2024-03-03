import { prismaClient } from "../app/database.js"
import Jwt from "jsonwebtoken"

const authMiddleware = async (request, response, next) => {
    const token = request.get('Authorization')
    
    if(!token){
        return response.status(401).json({
            data: 'unauthorized'
        }).end()
    }

    Jwt.verify(token, 'swefijlzc22@#()33vsd', async function(err, decoded) {
        if(err){
            return response.status(401).json({
                errorToken: err.name,
                errorMessage: err.message
            }).end()
        }
        else{
            const user = await prismaClient.user.findFirst({
                where: {
                    token: token
                }
            })
    
            if(!user){
                return response.status(401).json({
                    data: 'unauthorized'
                }).end()
            }
            else{
                request.user = user
                return next()
            }
        }
    });
}

export {
    authMiddleware
}


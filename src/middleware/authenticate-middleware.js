import { prismaClient } from "../app/database.js"

const authMiddleware = async (request, response, next) => {
    const token = request.get('Authorization')
    if(!token){
        return response.status(401).json({
            data: 'unauthorized'
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
}

export {
    authMiddleware
}


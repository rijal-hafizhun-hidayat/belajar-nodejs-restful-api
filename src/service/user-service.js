import { prismaClient } from "../app/database.js"
import { ResponseError } from "../error/response-error.js"
import { registerUserValidation } from "../validation/user-validation.js"
import { validate } from "../validation/validation.js"
import bcrypt from "bcrypt"

const register = async (request) => {
    const user = validate(registerUserValidation, request)
    const countUser = await prismaClient.user.count({
        where: {
            username: user.username
        }
    })

    if(countUser === 1){
        throw new ResponseError(400, 'username already exists')
    }
    else{
        return await prismaClient.user.create({
            data: {
                username: user.username,
                password: bcrypt.hashSync(user.password, 10)
            }
        })
    }
}

const getUsers = async () => {
    return await prismaClient.user.findMany()
}

export default {
    getUsers,
    register
}
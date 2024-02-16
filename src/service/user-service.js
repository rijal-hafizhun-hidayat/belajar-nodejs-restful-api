import { prismaClient } from "../app/database.js"
import { ResponseError } from "../error/response-error.js"
import { loginUserValidation, registerUserValidation } from "../validation/user-validation.js"
import { validate } from "../validation/validation.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

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

const getUserById = async (userId) => {
    const getUserById = await prismaClient.user.findUnique({
        where: {
            id: parseInt(userId)
        }
    })

    if(!!getUserById){
        return getUserById
    }
    else{
        throw new ResponseError(400, 'user not found')
    }
}

const destroyUserById = async (userId) => {
    const destroyUserById = await prismaClient.user.delete({
        where: {
            id: parseInt(userId)
        }
    })

    if(!!destroyUserById){
        
    }
    else{
        throw new ResponseError(400, 'delete user failed')
    }
}

const loginUser = async (request) => {
    const userRequest = validate(loginUserValidation, request)
    const login = await prismaClient.user.findUnique({
        where: {
            username: userRequest.username
        },
        select: {
            username: true,
            password: true
        }
    })

    if(!login){
        throw new ResponseError(400, 'username or password wrong')
    }

    const userPasswordIsValidate = bcrypt.compare(userRequest.password, login.password)

    if(!userPasswordIsValidate){
        throw new ResponseError(400, 'username or password wrong')
    }

    const token = uuid().toString()

    return await prismaClient.user.update({
        where: {
            username: userRequest.username
        },
        data: {
            token: token
        },
        select: {
            token: true
        }
    })
}

export default {
    loginUser,
    destroyUserById,
    getUserById,
    getUsers,
    register
}
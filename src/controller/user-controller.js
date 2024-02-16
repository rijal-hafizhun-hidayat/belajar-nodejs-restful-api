import userService from "../service/user-service.js"

const register = async (request, response, next) => {
    try {
        const result = await userService.register(request.body)
        response.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getUsers = async (request, response, next) => {
    try {
        const result = await userService.getUsers()
        response.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getUserById = async (request, response, next) => {
    try {
        const result = await userService.getUserById(request.params.userId)
        response.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const destroyUserById = async (request, response, next) => {
    try {
        const result = await userService.destroyUserById(request.params.userId)
        response.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const loginUser = async (request, response, next) => {
    try {
        const result = await userService.loginUser(request.body)
        response.status(201).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export default {
    loginUser,
    destroyUserById,
    getUserById,
    getUsers,
    register
}
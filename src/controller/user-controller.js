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

export default {
    getUsers,
    register
}
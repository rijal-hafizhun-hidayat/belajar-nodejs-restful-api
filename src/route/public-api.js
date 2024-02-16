import express from "express"
import userController from "../controller/user-controller.js"

const publicRoute = new express.Router();
publicRoute.post('/api/user', userController.register)
publicRoute.get('/api/user', userController.getUsers)
publicRoute.get('/api/user/:userId', userController.getUserById)
publicRoute.delete('/api/user/:userId', userController.destroyUserById)
publicRoute.post('/api/user/login', userController.loginUser)

export {
    publicRoute
}
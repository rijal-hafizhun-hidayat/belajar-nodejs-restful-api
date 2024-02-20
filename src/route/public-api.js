import express from "express"
import userController from "../controller/user-controller.js"

const publicRoute = new express.Router();
publicRoute.post('/api/user', userController.register)
publicRoute.post('/api/user/login', userController.loginUser)

export {
    publicRoute
}
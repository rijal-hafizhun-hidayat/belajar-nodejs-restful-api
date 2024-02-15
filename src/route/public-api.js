import express from "express"
import userController from "../controller/user-controller.js"

const publicRoute = new express.Router();
publicRoute.post('/api/user', userController.register)
publicRoute.get('/api/user', userController.getUsers)

export {
    publicRoute
}
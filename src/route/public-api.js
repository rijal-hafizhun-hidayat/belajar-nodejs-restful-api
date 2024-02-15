import express from "express"
import userController from "../controller/user-controller.js"
import testController from "../controller/test-controller.js"

const publicRoute = new express.Router();
publicRoute.post('/api/user', userController.register)
publicRoute.get('/api/hello', testController.test)

export {
    publicRoute
}
import express from "express"
import userController from "../controller/user-controller.js"
import { authMiddleware } from "../middleware/authenticate-middleware.js";

const apiRoute = new express.Router();
apiRoute.use(authMiddleware)
apiRoute.get('/api/user/current', userController.getCurrentUser)
apiRoute.get('/api/user', userController.getUsers)
apiRoute.get('/api/user/:userId', userController.getUserById)
apiRoute.delete('/api/user/:userId', userController.destroyUserById)

export {
    apiRoute
}
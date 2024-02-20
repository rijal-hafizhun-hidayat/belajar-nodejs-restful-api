import express from "express"
import userController from "../controller/user-controller.js"
import { authMiddleware } from "../middleware/authenticate-middleware.js";

const apiRoute = new express.Router();
apiRoute.use(authMiddleware)
apiRoute.get('/api/user/current', userController.getCurrentUser)

export {
    apiRoute
}
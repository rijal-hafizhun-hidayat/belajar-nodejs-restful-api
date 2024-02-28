import express from "express"
import userController from "../controller/user-controller.js"
import contactController from "../controller/contact-controller.js"
import { authMiddleware } from "../middleware/authenticate-middleware.js";

const apiRoute = new express.Router();
apiRoute.use(authMiddleware)

//user
apiRoute.get('/api/user/current', userController.getCurrentUser)
apiRoute.post('/api/user/logout', userController.logout)
apiRoute.get('/api/user', userController.getUsers)
apiRoute.get('/api/user/:userId', userController.getUserById)
apiRoute.delete('/api/user/:userId', userController.destroyUserById)
apiRoute.put('/api/user/:userId', userController.updateUserById)

//contact
apiRoute.get('/api/contact', contactController.getContact)
apiRoute.post('/api/contact', contactController.createContact)

export {
    apiRoute
}
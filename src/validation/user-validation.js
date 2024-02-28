import Joi from "joi";

const registerUserValidation = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

const loginUserValidation = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

const authenticateUserValidation = Joi.string().required()

const updateUserValidation = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

const logoutUserValidation = Joi.object({
    username: Joi.string().required()
})
export {
    registerUserValidation,
    loginUserValidation,
    authenticateUserValidation,
    updateUserValidation,
    logoutUserValidation
}
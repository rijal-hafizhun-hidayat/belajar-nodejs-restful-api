import Joi from "joi";

const registerUserValidation = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

const loginUserValidation = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

const authenticateUserValidation = Joi.object({
    token: Joi.string().required()
})

export {
    registerUserValidation,
    loginUserValidation,
    authenticateUserValidation
}
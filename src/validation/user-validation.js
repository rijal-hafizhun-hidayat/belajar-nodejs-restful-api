import Joi from "joi";

const registerUserValidation = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

export {
    registerUserValidation
}
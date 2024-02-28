import { prismaClient } from "../app/database.js"
import { createContactValidation } from "../validation/contact-validation.js"
import { validate } from "../validation/validation.js"

const getContact = async () => {
    return await prismaClient.contact.findMany()
}

const createContact = async (user, request) => {
    const requestValidation = validate(createContactValidation, request)
    return await prismaClient.contact.create({
        data: {
            firstname: requestValidation.firstname,
            lastname: requestValidation.lastname,
            email: requestValidation.email,
            phone: String(requestValidation.phone),
            username: user.username,
            user_id: user.id
        },
        select: {
            firstname: true,
            lastname: true,
            email: true,
            phone: true
        }
    })
}

export default{
    getContact,
    createContact
}
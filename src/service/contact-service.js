import { prismaClient } from "../app/database.js"
import { createContactValidation } from "../validation/contact-validation.js"
import { validate } from "../validation/validation.js"

const getContact = async () => {
    return await prismaClient.contact.findMany({
        include: {
            user: {
                select: {
                    id: true,
                    username: true
                }
            }
        }
    })
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
        include: {
            user: {
                select: {
                    id: true,
                    username: true
                }
            }
        }
    })
}

const deleteContactById = async (contactId) => {
    return await prismaClient.contact.delete({
        where: {
            id: parseInt(contactId)
        }
    })
}

const getContactById = async (contactId) => {
    return await prismaClient.contact.findUnique({
        where: {
            id: parseInt(contactId)
        },
        select: {
            firstname: true,
            lastname: true,
            email: true,
            phone: true,
            username: true,
            user: {
                select: {
                    id: true,
                    username: true
                }
            }
        },
    })
}

export default{
    getContact,
    createContact,
    deleteContactById,
    getContactById
}
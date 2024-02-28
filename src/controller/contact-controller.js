import contactService from "../service/contact-service.js"

const getContact = async (request, respond, next) => {
    try {
        const result = await contactService.getContact()
        respond.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const createContact = async (request, respond, next) => {
    try {
        const result = await contactService.createContact(request.user, request.body)
        respond.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export default{
    getContact,
    createContact
}
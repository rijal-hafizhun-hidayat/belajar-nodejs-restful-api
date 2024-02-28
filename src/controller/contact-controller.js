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

const deleteContactById = async (req, res, next) => {
    try {
        const result = await contactService.deleteContactById(req.params.contactId)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getContactById = async (req, res, next) => {
    try {
        const result = await contactService.getContactById(req.params.contactId)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const updateContactById = async (req, res, next) => {
    try {
        const result = await contactService.updateContactById(req.params.contactId, req.body)
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export default{
    getContact,
    createContact,
    deleteContactById,
    getContactById,
    updateContactById
}
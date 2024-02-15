const test = async (request, response, next) => {
    return response.status(200).json({
        data: 'data'
    })
}

export default{
    test
}
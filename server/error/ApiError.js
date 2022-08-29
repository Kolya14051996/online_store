class ApiError extends Error{
    constructor(status, messege) {
        super();
        this.status = status
        this.messege = messege
    }


    static badRequest(messege) {
        return new ApiError(404, messege)
    }

    static intarnal(messege) {
        return new ApiError(500, messege)
    }

    static forbidden(messege) {
        return new ApiError(403, messege)
    }
}

module.exports = ApiError
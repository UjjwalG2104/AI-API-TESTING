class Api {

    constructor({
        method,
        path,
        summary = "",
        tags = [],
        requestBody = null,
        responses = {},
        security = []
    }) {

        this.method = method;
        this.path = path;
        this.summary = summary;
        this.tags = tags;
        this.requestBody = requestBody;
        this.responses = responses;
        this.security = security;

    }

}

module.exports = Api;
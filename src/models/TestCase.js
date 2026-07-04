class TestCase {

    constructor({

        id,

        name,

        method,

        path,

        headers = {},

        body = {},

        expectedStatus,

        expectedSchema = null,

        type = "POSITIVE"

    }) {

        this.id = id;

        this.name = name;

        this.method = method;

        this.path = path;

        this.headers = headers;

        this.body = body;

        this.expectedStatus = expectedStatus;

        this.expectedSchema = expectedSchema;

        this.type = type;

    }

}

module.exports = TestCase;
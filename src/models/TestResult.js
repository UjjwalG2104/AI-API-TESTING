class TestResult {

    constructor({

        testCase,

        passed,

        status,

        response,

        responseTime,

        error = null

    }) {

        this.testCase = testCase;

        this.passed = passed;

        this.status = status;

        this.response = response;

        this.responseTime = responseTime;

        this.error = error;

    }

}

module.exports = TestResult;
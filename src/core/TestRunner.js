const httpClient = require("./HttpClient");
const TestResult = require("../models/TestResult");

class TestRunner {

    async run(testCase) {

        const start = Date.now();

        try {

            let response;

            switch (testCase.method) {

                case "GET":
                    response = await httpClient.get(testCase.path);
                    break;

                case "POST":
                    response = await httpClient.post(
                        testCase.path,
                        testCase.body,
                        testCase.headers
                    );
                    break;

                case "PUT":
                    response = await httpClient.put(
                        testCase.path,
                        testCase.body,
                        testCase.headers
                    );
                    break;

                case "DELETE":
                    response = await httpClient.delete(
                        testCase.path,
                        testCase.headers
                    );
                    break;

                default:
                    throw new Error(`Unsupported method: ${testCase.method}`);

            }

            return new TestResult({

                testCase,

                passed:
                    response.status === testCase.expectedStatus,

                status:
                    response.status,

                response:
                    response.data,

                responseTime:
                    Date.now() - start

            });

        }

        catch (err) {

            return new TestResult({

                testCase,

                passed: false,

                status:
                    err.response?.status || 500,

                response:
                    err.response?.data || null,

                responseTime:
                    Date.now() - start,

                error:
                    err.message

            });

        }

    }

}

module.exports = new TestRunner();
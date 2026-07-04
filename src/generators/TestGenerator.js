class TestGenerator {

    generate(apis) {

        const tests = [];

        for (const api of apis) {

            // Positive Test
            tests.push({
                name: `${api.method} ${api.path} - Success`,
                method: api.method,
                path: api.path,
                expectedStatus: 200,
                type: "POSITIVE"
            });

            // Negative Test
            tests.push({
                name: `${api.method} ${api.path} - Unauthorized`,
                method: api.method,
                path: api.path,
                expectedStatus: 401,
                type: "NEGATIVE"
            });

        }

        return tests;
    }

}

module.exports = new TestGenerator();
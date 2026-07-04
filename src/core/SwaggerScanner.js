const httpClient = require("./HttpClient");

class SwaggerScanner {

    async scan(url) {

        const response = await httpClient.get(url);

        return response.data;

    }

    discover(swagger) {

        const apis = [];

        const paths = swagger.paths;

        for (const path in paths) {

            const methods = paths[path];

            for (const method in methods) {

                apis.push({
                    method: method.toUpperCase(),
                    path: path,
                    summary: methods[method].summary || "No Summary",
                    tags: methods[method].tags || []
                });

            }

        }

        return apis;

    }

}

module.exports = new SwaggerScanner();
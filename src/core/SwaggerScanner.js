const httpClient = require("./HttpClient");

class SwaggerScanner {

    async scan(url) {

        const response = await httpClient.get(url);

        return response.data;

    }

}

module.exports = new SwaggerScanner();
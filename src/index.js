const logger = require("./core/logger");
const configManager = require("./core/ConfigManager");
const swaggerScanner = require("./core/SwaggerScanner");

(async () => {

    try {

        const config = configManager.load();

        logger.success("Configuration Loaded");

        const swagger = await swaggerScanner.scan(
            config.server.swaggerURL
        );

        logger.success(
            "Swagger Downloaded"
        );

        console.log(swagger.openapi);

    }

    catch (err) {

    logger.error("Application Error");

    console.log("Message:", err.message);
    console.log("Code:", err.code);

    if (err.response) {
        console.log("Status:", err.response.status);
        console.log("Data:", err.response.data);
    }

    if (err.request) {
        console.log("No response received.");
    }

    console.log(err);

}
})();
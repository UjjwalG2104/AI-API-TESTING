const logger = require("./core/Logger");
const configManager = require("./core/ConfigManager");
const swaggerScanner = require("./core/SwaggerScanner");
const repository = require("./core/ApiRepository");

(async () => {

    try {

        const config = configManager.load();

        logger.success("Configuration Loaded");

        const swagger = await swaggerScanner.scan(
            config.server.swaggerURL
        );

        logger.success("Swagger Downloaded");

        const apis = swaggerScanner.discover(swagger);

        repository.setApis(apis);
        const testGenerator = require("./generators/TestGenerator");
        const tests = testGenerator.generate(
            repository.getAll()
         );

            logger.success(`${tests.length} Test Cases Generated`);
            console.table(tests);
        logger.success(`${repository.count()} APIs Loaded`);

        console.table(repository.getAll());

    }

    catch(err){

        logger.error(err.message);

    }

})();
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

class ConfigManager {

    constructor() {
        this.config = null;
    }

    load() {

        const configPath = path.join(process.cwd(), "config", "config.json");

        if (!fs.existsSync(configPath)) {
            throw new Error("config/config.json not found.");
        }

        this.config = JSON.parse(
            fs.readFileSync(configPath, "utf8")
        );

        this.validate();

        return this.config;
    }

    validate() {

        if (!this.config.server.baseURL)
            throw new Error("server.baseURL is missing.");

        if (!this.config.server.swaggerURL)
            throw new Error("server.swaggerURL is missing.");

    }

    get() {
        return this.config;
    }

}

module.exports = new ConfigManager();
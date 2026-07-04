const chalk = require("chalk");

class Logger {

    info(message) {
        console.log(chalk.blue("[INFO]"), message);
    }

    success(message) {
        console.log(chalk.green("[SUCCESS]"), message);
    }

    warning(message) {
        console.log(chalk.yellow("[WARNING]"), message);
    }

    error(message) {
        console.log(chalk.red("[ERROR]"), message);
    }

}

module.exports = new Logger();
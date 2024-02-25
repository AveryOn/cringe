import chalk from "chalk";

const Logger = {
    colors: {
        success: '#b0e057',
        warn: '#e08b57',
        err: '#e05957',
        log: '#5feffc',
    },
    // Init Colors Log
    initLog() {
        // Color logs
        function success(message) {
            if (typeof message === 'string' && message?.length > 0) {
                console.log(chalk.bold.hex(Logger.colors.success)(message));
            } else {
                this.err('Invalid success:message in Logger');
            }
        }
        function warn(message) {
            if (typeof message === 'string' && message?.length > 0) {
                console.log(chalk.bold.hex(Logger.colors.warn)(message));
            } else {
                this.err('Invalid warn:message in Logger');
            }
        }
        function err(message, err) {
            if (typeof message === 'string' && message?.length > 0) {
                console.log(chalk.bold.hex(Logger.colors.err)(message), err);
            } else {
                this.err('Invalid err:message in Logger');
            }
        }
        function log(message) {
            if (typeof message === 'string' && message?.length > 0) {
                console.log(chalk.bold.hex(Logger.colors.log)(message));
            } else {
                this.err('Invalid log:message in Logger');
            }
        }
        return {
            success: success,
            warn: warn,
            err: err,
            log: log,
        }
    },
    // Init background colors Logs 
    initLogBg() {
        // With Background Color
        function successBg(message) {
            if (typeof message === 'string' && message?.length > 0) {
                console.log(chalk.bold.bgHex(Logger.colors.success)(message));
            } else {
                this.err('Invalid success:message in Logger');
            }
        }
        function warnBg(message) {
            if (typeof message === 'string' && message?.length > 0) {
                console.log(chalk.bold.bgHex(Logger.colors.warn)(message));
            } else {
                this.err('Invalid warn:message in Logger');
            }
        }
        function errBg(message, err) {
            if (typeof message === 'string' && message?.length > 0) {
                console.log(chalk.bold.bgHex(Logger.colors.err)(message), err);
            } else {
                this.err('Invalid err:message in Logger');
            }
        }
        function logBg(message) {
            if (typeof message === 'string' && message?.length > 0) {
                console.log(chalk.bold.bgHex(Logger.colors.log)(message));
            } else {
                this.err('Invalid log:message in Logger');
            }
        }
        return {
            success: successBg,
            warn: warnBg,
            err: errBg,
            log: logBg,
        }
    },

}


export default Logger;
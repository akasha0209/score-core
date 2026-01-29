// check environment variables and set configuration values
var env = process.env.NODE_ENV || 'development';
// default configuration
var config = require('./config.json')[env];
// override with environment variables if they exist
Object.keys(config).forEach(key => {
    process.env[key] = config[key];
})
require("dotenv").config(); 
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});
sequelize.sync()
    .then(() => console.log("table synced successfully"))
    .catch(err => console.error("Error syncing tables:", err));

// Test database connection
sequelize.authenticate()
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.error("Error connecting to database:", err));

module.exports = sequelize;

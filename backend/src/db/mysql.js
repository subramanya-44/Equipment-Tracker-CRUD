console.log("ENV CHECK:");
console.log("DB_USER =", process.env.DB_USER);
console.log("DB_PASSWORD =", process.env.DB_PASSWORD ? "SET" : "NOT SET");
console.log("DB_NAME =", process.env.DB_NAME);
console.log("DB_PORT =", process.env.DB_PORT);

const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port : process.env.DB_PORT
});

module.exports = pool.promise();


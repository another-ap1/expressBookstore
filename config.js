/** Common config for bookstore. */

require("dotenv").config();

const DB_URI = (process.env.NODE_ENV === "test")
  ? {host:"localhost", port:5432, database:"books_test", user:"postgres", password:"postgres"}
  : {host:"localhost", port:5432, database:"books", user:"postgres", password:"postgres"};



module.exports = { DB_URI };
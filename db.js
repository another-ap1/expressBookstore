/** Database config for database. */


const { Client } = require("pg");

const DB_URI = (process.env.NODE_ENV === "test")
  ? {host:"localhost", port:5432, database:"books_test", user:"postgres", password:"postgres"}
  : {host:"localhost", port:5432, database:"books", user:"postgres", password:"postgres"};

let client = new Client({
  host:"localhost", 
  port:5432, 
  database:"books", 
  user:"postgres", 
  password:"postgres"});

client.connect();

module.exports = client;

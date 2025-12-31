
import dotenv from "dotenv";


dotenv.config({
    path: "./.env"
});

const myusername = process.env.username;
console.log("value:", myusername);

const mydatabasename = process.env.database;
console.log("database: ", mydatabasename);

console.log("Started of backend project");


import dotenv from "dotenv";
import express from "express";

dotenv.config({
    path: "./.env"
});

// const myusername = process.env.username;
// console.log("value:", myusername);

// const mydatabasename = process.env.database;
// console.log("database: ", mydatabasename);

// console.log("Started of backend project");



// const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello Bhole !')
});

app.get("/instagram", (req, res) => {
    res.send("This is an instagram page!");
});


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});


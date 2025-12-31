import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my basecampy!");
});

app.get("/slogan", (req, res) => {
    res.send("Bam Bam Bhole");
});

export default app;
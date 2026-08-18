import express from "express";
import axios from "axios";

const app = express();
const port = 4000;
const API_URL = "https://api.hyrule-compendium.com/v3/regions"

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    res.render("index.ejs", {data: "select a region"})
})


app.listen(port, ()=> {
    console.log(`Eureka on port ${port}`);
})

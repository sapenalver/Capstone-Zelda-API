import express from "express";
import axios from "axios";

const app = express();
const port = 4000;
const API_URL = "https://api.hyrule-compendium.com/v3/regions/all"
const API_REG = "https://api.hyrule-compendium.com/v3/regions/"

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    const options = await axios.get(API_URL);
    res.render("index.ejs", {
        regions: options.data.data
    })
})


app.get("/region/:name",async (req, res) => {
    const region = req.params.name;
    const result = await axios.get(`${API_REG}/${region}`)
    const shrines = result.data.data.shrines;
    const options = await axios.get(API_URL);
    const regionTitle= region.toUpperCase();
    res.render("index.ejs", {
        region: regionTitle,
        shrines:shrines,
        regions: options.data.data
    });
})


app.listen(port, ()=> {
    console.log(`Eureka on port ${port}`);
})


/* Make a nav bar using thie https://www.youtube.com/watch?v=R7b3OlEyqug */
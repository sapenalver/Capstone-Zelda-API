import express from "express";
import axios from "axios";

const app = express();
const port = 4000;
const API_URL = "https://api.hyrule-compendium.com/v3/regions/all"

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    const result = await axios.get(API_URL);

    res.render("index.ejs", {
        data: "select a region",
        regions: result.data.data
    })
})


app.listen(port, ()=> {
    console.log(`Eureka on port ${port}`);
})


/* Make a nav bar using thie https://www.youtube.com/watch?v=R7b3OlEyqug */
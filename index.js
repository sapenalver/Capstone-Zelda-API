import express from "express";
import axios from "axios";

const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", async (req, res) => {

    const result = await axios.get("https://api.hyrule-compendium.com/v3/regions/eldin");
    console.log(result.data);
    res.render("index.ejs")
})


app.listen(port, ()=> {
    console.log(`Eureka on port ${port}`);
})

/* Console log an api value
   Git + version control :) */
import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";


const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/submit",(req,res)=>{
    var qr_svg = qr.image(req.body["url"]);
qr_svg.pipe(fs.createWriteStream("public/url_img1.png"));
var img = true;
res.render("index.ejs",
    {img:img}
);

});

app.listen(port,()=>{
    console.log(`running on ${port}.`);
});

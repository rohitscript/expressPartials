const express=require("express");
// const { dirname } = require("path");
const hbs = require("hbs");
const app = express();
const path=require("path")
const port=3000;

//Built-in MiddleWare - staticPath Set 
const staticPath=path.join(__dirname, "../public");
//  app.use(express.static(staticPath));

//TemplatePath - middleware
const templatePath=path.join(__dirname,"../templates/views");

//Partials Path
const partialsPath=path.join(__dirname,"../templates/partials")

//Send Multiple HTML Tags
/*
app.get("/", (req,res)=>{
    res.write("<h1>This is our Home Page</h1>");
    res.write("<h1>Welcome</h1>");
    res.send();
});
 */

//Render or Send Files public/index.html
/*
app.get("/", (req,res)=>{
    res.render("index");
});
*/

//Set View Engine- hbs,ejs,pug
app.set("view engine","hbs");
app.set('views',templatePath);

//hbs Partials Path use
hbs.registerPartials(partialsPath);

//app.use(express.static(staticPath));


//Template engine Route -- render templates/views/index.hbs
app.get("/", (req,res)=>{
    res.render("index");
});

app.get("/about", (req,res)=>{
    res.send("about");
});

app.get("/contact", (req,res)=>{
    res.send("This is our Contact Us Page ");
});


app.listen(port,()=>{
    console.log(`Port is Listeninig at ${port}`);
});
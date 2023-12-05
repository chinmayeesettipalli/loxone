const express = require('express')
const app = express();
const path = require("path");
const hbs = require("hbs");
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.set("view engine","hbs")
const templatePath = path.join(__dirname,'../templates')
app.set("views",templatePath)
app.get('/',(req,res)=>{
    res.render("Dashboard");
});
app.get('/dashboard', (req, res) => {
    res.render('Dashboard');
});

app.get('/pages',(req,res)=>{
    res.render("pages");
});
app.get('/Profile', async(req, res) => {
    
        
    
    
    res.render('/Profile');
  });
app.get('/Authentication',(req,res)=>{
    res.render("Authentication");
});

app.get('/Miniserver',(req,res)=>{
    res.render("Miniserver");
});
app.post("/submit-form",async(req,res)=>{
    const data={
        Id : req.body.Id,
        Miniserver: req.body.Miniserver
    }
    res.redirect('/')
});

    









app.listen(7000,()=>{

    console.log("Server Online")

});

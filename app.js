let express=require('express');

let app=express();

app.get("/",function(req,res){
    res.send(" Hello to my first Express App!!!");
});

app.get("/wiki/:keyword/fit2095/:id",function(req,res){
    console.log(req.url);
    console.log(req.params);
    
});

app.get("/about",function(req,res){
    res.send(" this is the about page!!!");
});

app.get("/contactUs",function(req,res){
    res.send(" this is the Contact Us page!!!");
});



app.listen(8080);




















// let http=require('http');

// http.createServer(function(req,res){

//     if(req.method==="GET"){

//         if(req.url==="/"){
//             ///send back the home page
//         }else if(req.url==="/about"){
//             //send the about page
//         }
//         //handle get req
//     }else if(req.method==="POST"){
//         //handle the post request
//     }
// }).listen(8080);
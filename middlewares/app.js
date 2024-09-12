const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


// app.use((req,  res, next) =>{
//     console.log("Hi, I am middleware");
//     next();
// })

// app.use("/random", (req,res, next)=>{
//     console.log("I am only random");
//     next();
// })

app.use("/api", (req, res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED !");
})

app.get("/err", (req, res)=>{
    abcd = abcd;
})

app.get("/admin", (req, res)=>{
    throw new ExpressError(403, "Access to admin is forbidden");
})

app.use((err, req, res, next) =>{
    let {status = 500, message="Some error occurred"} = err;
    res.status(status).send(message);
})

app.get("/api", (req, res) =>{
    res.send("Data");
})

//Logger = Morgan
// app.use((req,  res, next) =>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next(); 
// })

app.get("/", (req, res)=>{
    res.send("Hi I am root");
})

app.get("/random", (req, res)=>{
    res.send("This is a random page");
})

app.use((req, res)=>{
    res.status(404).send("Page not found");
})

app.listen(8080, () =>{
    console.log("server listening the port 8080");
})
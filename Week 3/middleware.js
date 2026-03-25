const express = require("express");
const app =express();
function check (req,res,next){
    if(req.query.ticket=="free"){
        next();
    }
    else{
        res.send("wrong ticket");
    }
}
app.use(check);
app.get('/ride1',function(req,res){
    res.send("you rode the 1st ride")
})
app.get('/ride2',function(req,res){
    res.send("you rode the 2st ride")
})
app.get('/ride3',function(req,res){
    res.send("you rode the 3st ride")
})

app.listen(3000);
const express = require("express");
const app = express();
function sum(n){
    var ans=0;
    for(var i = 0;i<=n;i++){
        ans+=i;
    }
    return ans;
}
app.get('/',function(req,res){
    var s = sum(req.query.n)
    var a = s.toString();
    res.send(a);
})
app.post('/',function(req,res){

})
app.put('/',function(req,res){

})
app.delete('/',function(req,res){
    
})
app.listen(3000);
var express=require('express');
var app=new express();
app.get('/',function(req,resp){
    resp.send("Hello Express!");
})
app.listen(8008,'127.0.0.1');
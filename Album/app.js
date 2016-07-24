var express = require("express");
var app = express();
//控制器
var router = require("./controller");



app.set("view engine","ejs");
//路由器中间件
app.use(express.static("./public"));
app.use(express.static("./uploads"));

//首页
app.get("/",router.showIndex);
app.get("/:albumName",router.showAlbum);
app.get("/up",router.showUp);

//404
app.use(function(req,res){
    res.render("err");
});

app.listen(3000);

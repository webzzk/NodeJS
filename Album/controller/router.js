/**
 * Created by ZZK on 2016/7/8.
 */
var file = require("../models/file.js");

exports.showIndex = function(req,res,next){
    // 可用新版本fs.statSync
    //res.render("index",{
    //    "albums":file.getAllAlbums()
    //});
    file.getAllAlbums(function(err,allAlbums){
        if(err){
            next();
            return;
        }
       res.render("index",{
           "albums" : allAlbums
       });
    });
};

exports.showAlbum = function(req,res,next){
    //遍历
    var albumName = req.params.albumName;
    file.getAllImages( albumName,function(err,imagesArray){
        if(err){
            next();
            return;
        }
        res.render("album",{
            "albumname" : albumName,
            "images" : imagesArray
        });
    });
};
exports.showUp = function(req,res){
    res.render("up");
};

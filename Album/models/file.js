/**
 * Created by ZZK on 2016/7/5.
 */
var fs = require("fs");

exports.getAllAlbums = function(callback){
    //�ҵ������ļ���
    fs.readdir("./uploads",function(err,files){
        if(err){
            callback("û���ҵ�uploads�ļ���",null);
        }
        var allAlbums = [];
        //console.log(files);
        (function iterator(i){
            if(i == files.length){
                //console.log(allAlbums);
                //��������
                callback(null,allAlbums);
                return;
            }
            fs.stat("./uploads/" + files[i],function(err,stats){
                if(err){
                    callback("�Ҳ����ļ�" + files[i],null)
                }
                if(stats.isDirectory()){
                    allAlbums.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);


    });
};

exports.getAllImages = function(albumName,callback){
    fs.readdir("./uploads/" + albumName,function(err,files){
        if(err){
            callback("û���ҵ�uploads�ļ���",null);
            return;
        }
        var allImages = [];
        //console.log(files);
        (function iterator(i){
            if(i == files.length){
                console.log(allImages);
                //��������
                callback(null,allImages);
                return;
            }
            fs.stat("./uploads/" + albumName + "/" + files[i],function(err,stats){
                if(err){
                    callback("�Ҳ����ļ�" + files[i],null);
                    return;
                }
                if(stats.isFile()){
                    allImages.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);


    });
};
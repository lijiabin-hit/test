/**
 * Created by lijiabin on 2018/9/12.
 */
var http=require('http');
http.createServer(function (req,res) {
    res.end("hello world!!");
}).listen(3000);
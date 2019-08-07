var http=require('http');
var url=require('url');

function start(route){
    function onRequest(req,res){
        var pathname=url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(pathname);
        res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
        //获取Get内容-解析URL参数
        var params=url.parse(req.url,true).query;
        res.write("网站名："+params.name);
        res.write("\n");
        res.write("网站url："+params.url);
        res.end();
    }
    http.createServer(onRequest).listen(8090,'127.0.0.1');
    console.log('Http server has started.');
}

exports.start=start;
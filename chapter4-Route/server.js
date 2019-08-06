var http=require('http');
var url=require('url');

function start(route){
    function onRequest(req,res){
        var pathname=url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(pathname);
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('hello world');
    }
    http.createServer(onRequest).listen(8090,'127.0.0.1');
    console.log('Http server has started.');
}

exports.start=start;
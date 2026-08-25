import http from 'http'

const serv=http.createServer((req,res)=>{
  //res.writeHead(500, {
    //"Content-Type": "text/plain"
//});
    res.end("<h1>hey</h1>");
});
serv.listen(4444,()=>(console.log("server is running ")
));

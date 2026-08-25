import http from 'http';

/**for common js you need to write 
 const http=require(http)
 */
/*const server=http.createServer();
server.on('requeest',(req,res)=>{
    res.write("<h1>welcome to server side<h1> ");
    res.end();
}) */
const server =http.createServer((req,res)=>{
    res.end("<h2>welcome to server</h2>")
})

server.listen(5001,()=>{
    console.log("server is running");
})

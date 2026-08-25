import http from 'http'

const server=http.createServer((req,res)=>{//req res ki jgh a,b bhi likh skte ho
    if(req.url=='/product'){
        res.end("<h1>product</h1>");
    }
    else if(req.url =="/cart"){
        res.end("<h1>Cart</h1>")
    }
     else if(req.url =="/checkout"){
        res.end("<h1>checkout</h1>");
    }
    else {
        res.statusCode=404;
        res.end(`<h1>404 not found</h1>
            `);
    }
})
server.listen(3000,()=>{
    console.log("running");
    
})
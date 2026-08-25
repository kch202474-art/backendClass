import http from 'http'

const serv=http.createServer((req,res)=>{
    console.log("welcome");
    if(req.url=='/')
        res.end('<h1>home page ')
    else if(req.url =='/about')
        res.end('<h1>about')
    else if(req.url =='/product')
        res.end(`<h1>mobile phone</h1>
               <h2>gaming</h2>             `)

    else{
        res.statusCode=404;
        res.end(`<h1>not found</h1>
                <h2>page not found</h2> `);}
    });
serv.listen(4000,()=>{
    console.log("running");
    
})
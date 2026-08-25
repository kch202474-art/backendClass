import http from 'http'

const serveer= http.createServer((req,res)=>{
    console.log("welcome");
    
    console.log(req.url);// agr pta krna hai client chah kya rha hai then req.url se pta krskte ho 
     console.log(req.method);// by default GET method hota hai 
     console.log(req.readers);
     //console.log(req.socket);
     console.log(req.headers.host);
     
     res.end('hey');
   
    





    
});
/*serveer.listen(3000,()=>{
    console.log("server is messy")
})*/
const PORT=3000;
// instead u can write 
serveer.listen(PORT,()=>{
    console.log("KK");
//
})
import http from 'http'
import {readFile} from 'fs/promises'

const serv=http.createServer(async(req,res)=>{
    const text=await readFile("big-txt");
    res.end(text);
});
serv.listen(3000,()=>console.log("running"));
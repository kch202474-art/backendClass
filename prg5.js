import http from 'http'

const serv = http.createServer((req,res)=>{
    res.writeHead(2000,{"content-type":"application/json"});
    
})
const product={
    name: "product",
    price:24000,
    discount:"10%",
    company:"samsonoghj"
};
res.end(JSON.stringify(product)
);

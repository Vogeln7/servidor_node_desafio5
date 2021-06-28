const http = require(`http`);
const PUERTO = 3000;

let server = http.createServer((req,res)=>{
    let numAleatorio = ()=>Math.floor(Math.random()*(10)+1); 
    let precioAleatorio = ()=>(Math.random() * (10000 - 0)+0).toFixed(2)
    let producto = {
        id:numAleatorio(),
        title:`Producto: ${numAleatorio()}`,
        precio: precioAleatorio(),
        thumbnail:`Foto: ${numAleatorio()}`
    }
    
    res.end(JSON.stringify(producto));
});

server.listen(PUERTO,()=>{console.log("estoy escuchando en el puerto :"+ PUERTO)});

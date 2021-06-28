const http = require(`http`);
const PUERTO = 3000;

let server = http.createServer((req,res)=>{
    let numAleatorio = ()=>Math.floor(Math.random()*(10)); 
    let producto = {
        id:numAleatorio(),
        title:`Producto: ${numAleatorio()}`,
        precio: numAleatorio(),
        thumbnail:`Foto: ${numAleatorio()}`
    }
    console.log("Despues de aca responde");
    res.end(JSON.stringify(producto));
});

server.listen(PUERTO,()=>{console.log("estoy escuchando en el puerto :"+ PUERTO)});

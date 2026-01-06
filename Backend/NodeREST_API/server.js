const http=require('http');
const students=require('./students')
const url=require('url')
const port=3000;


const server=http.createServer((req,res)=>{
    const parsedurl=url.parse(req.url,true);
    const path=parsedurl.pathname;
    const method=req.method;
    if(path=='/students' && method=='GET'){
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify(students))
    }else if(path.startsWith('/students') && method==='GET'){
        const id=parseInt(path.split("/")[2]);
        const student = students.find( s => s.id === id);
        if(student){
            res.writeHead(200,{'content-type':'application/json'})
            res.end(JSON.stringify(student))
        }else{
            res.writeHead(404);
            res.end('student not found')
        }
    }else if(path=="/students" && method==='POST'){
        let body="";
        req.on('data',chunk=>{
            body+=chunk.toString();
        })
        req.on('end',()=>{
            const newStudent=JSON.parse(body)
            newStudent.id=Date.now();
            students.push(newStudent);
            res.writeHead(200,{'content-type':'application/json'})
            res.end(JSON.stringify(newStudent))
        })
    }
    else{
        res.writeHead(404);
        res.end('Route Not Found')
    }
})

server.listen(port);
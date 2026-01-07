const express=require('express')

const app=express();
const port=3000;
const userRoutes=require('./routes/userRoutes')

app.use("/api/users",userRoutes)
app.get("/get",(req,res)=>{
    res.send("Hello From Get Call")
})
app.post("/post",(req,res)=>{
    res.send("Hello From Post Call")
})
app.put("/put",(req,res)=>{
    res.send("Hello From Put Call")
})
app.delete("/delete",(req,res)=>{
    res.send("Hello From Delete Call")
})

app.listen(port,()=>{
    console.log(`server is listening at port no.:${port}`)
})
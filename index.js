import express from "express";

const app = express();
const port = 3000 ;


app.get("/",(req,res)=>{
    const today = new Date();
    const day = today.getDay();

    let dtype = "it's a weekday";
    let adv = "its time to work hard!";

    if(day === 5 || day===6){
        dtype = "it's a weekend";
        adv = "its time to rest!"
    }

    res.render("index.ejs",{
        dayType: dtype ,
        advice: adv,      
    });
})

app.listen(port,()=>{
    console.log(`server is running in port : ${port} .`); 
});
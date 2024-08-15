import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`server listing at port ${process.env.PORT}`);
});
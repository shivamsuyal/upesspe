import express  from "express";
import mainRouter from "./router/mainRoutes.js";
import {resolve} from 'path'


const app = express()
app.set('views', resolve('./views'));
app.set('view engine', 'ejs');
app.use("/assets",express.static("assets"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/",mainRouter)

app.listen(process.env.PORT || 4444,()=>{
    console.log("server started ...")
})

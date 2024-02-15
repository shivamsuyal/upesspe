import { Router } from "express";
import {readFileSync} from 'fs';
import {resolve} from 'path'

const mainRouter = Router()

mainRouter.get("/",(req,res)=>{
    res.render("pages/home")
})
mainRouter.get("/events",(req,res)=>{
    var data = JSON.parse(readFileSync(resolve("./EVENTS.json")))
    res.render("pages/events",{data})
})
mainRouter.get("/contact",(req,res)=>{
    res.render("pages/contact")
})
mainRouter.get("/team",(req,res)=>{
    res.render("pages/team")
})
mainRouter.get("/fest",(req,res)=>{
    res.render("pages/fest")
})


export default mainRouter


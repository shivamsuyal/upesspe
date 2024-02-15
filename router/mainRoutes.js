import { Router } from "express";

const mainRouter = Router()

mainRouter.get("/",(req,res)=>{
    res.render("pages/home")
})
mainRouter.get("/events",(req,res)=>{
    res.render("pages/events")
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


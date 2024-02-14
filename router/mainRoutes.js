import { Router } from "express";

const mainRouter = Router()

// mainRouter.get(['/'],(req,res)=>{
//     res.send("Comming Soon !!!")
// })
mainRouter.get("/",(req,res)=>{
    res.render("pages/home")
})

mainRouter.get("/events",(req,res)=>{
    res.render("pages/events")
})

// mainRouter.get("/contact",(req,res)=>{
//     res.render("pages/contact")
// })

export default mainRouter


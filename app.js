import express from "express";
import employees from "./db/employees.js"
const app = express()

app.route("/").get((req, res) =>{
    res.send("Hello employees!")
})

app.route("/employees").get((req,res)=>{
    res.send(employees)
})

app.route("/employees/random").get((req, res)=>{
    const idx = Number(Math.floor(Math.random()*employees.length))
    const found = employees[idx]
    res.send(found)
})

app.route("/employees/:id").get((req, res)=>{
    const emp = Number(req.params.id)-1
    const found = employees[emp]

if(found){
    res.send(found) 
}else{
    res.status(404).send("There's no empoyee with that ID in our database.")
}

})


export default app
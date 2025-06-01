import express from "express"
const router = express.Router();
export default router
import {getEmp, addEmp} from "../db/employees.js"


router.route("/").get((req,res)=>{
    const employees = getEmp();
    res.send(employees)
})
.post((req, res)=>{
    const {name} = req.body
    const {id} = req.body
    console.log(name)
    if(!req.body)
        return(res.status(400).send("Where is the body? (Request body required)"));

    addEmp(name);
    res.status(201).send(`You have added ${name} with the id of ${id}`)
})

router.route("/random").get((req, res)=>{
    const employees = getEmp()
    const idx = Number(Math.floor(Math.random()*employees.length))
    const found = employees[idx]
    res.send(found)
})


router.route("/:id").get((req, res)=>{
    const employees = getEmp()
    const emp = Number(req.params.id)-1
    const found = employees[emp]

if(found){
    res.send(found) 
}else{
    res.status(404).send("There's no empoyee with that ID in our database.")
}

})


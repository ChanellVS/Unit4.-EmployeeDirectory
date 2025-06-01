import express from "express";
import empRouter from "./api/empRouter.js"
const app = express()

app.use(express.json());


app.use((req, res, next)=> {
    console.log(req.method, req.originalUrl);
    next();
});

app.route("/").get((req, res) =>{
    res.send("Hello employees!")
});

app.use("/employees", empRouter);


app.use((err, req,res,next)=> {
    console.error(err);
    res.status(500).send("I don't feel so good Mr. Stark")
})

export default app
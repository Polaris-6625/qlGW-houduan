const express = require('express');
const cors = require('cors');
const db = require('./db/index');
const app = express();

app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/add",(req,resp)=>{
    const body = req.body;
    console.log(body);
    if(body) {
        sql = "insert into bm (std_name,std_number,std_xy,std_zy,std_forward,std_my) values (?,?,?,?,?,?);"
        db.query(sql,[body.std_name,body.std_number,body.std_xy,body.std_zy,body.std_forward,body.std_my],(err,result)=>{
            if(err) {
                console.log(err);
                resp.send("error");
            }
            else {
                resp.send("successful");
            }
        })
    }
})

app.listen(5438,()=>{
    console.log("server is running");
})
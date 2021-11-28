const express = require("express")
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const Employee = require("./models/Employee");
const insert = require("./InsertEmp");

mongoose.connect("mongodb://localhost:27017/Employeedb", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("MongoDB Connected\nSonali 19BDS0114");
    insert();
})

app.get('/', function (req, res) { 
    res.sendFile(__dirname + '/EmpForm.html');
});

app.post('/post', function (req, res) 
{    
    var eid=req.body.id;
    var vno=req.body.vn;
    var own=req.body.on;
    var br=req.body.bn;
    var y=req.body.yr;
    Employee.findOneAndUpdate({empid: eid},{$set:[{vnum: vno}, {owner: own},{brand: br},{year: y}]}, function (err,result) 
    {
        if (err)
            throw err;
        else
        {
            res.send("Employee"+eid+" Record Found\nUpdate Successful!\n")
            console.log(result)
        }
    });  
});

app.listen(3000, function () {
    console.log("\nServer has started. Open http://localhost:3000/ on your browser."); 
});

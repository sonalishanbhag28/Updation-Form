const mongoose = require("mongoose");
const Employee = require("./models/Employee");
const insert = () => {
    const emp1 = new Employee({
        empid: "114",
        vnum: "1000",
        owner: "Sonali",
        brand: "BMW",
        year: "2020"
    });
    emp1.save();

    const emp2 = new Employee({
        empid: "115",
        vnum: "1001",
        owner: "Jake",
        brand: "Toyota",
        year: "2019"
    });
    emp2.save(); 

    const emp3 = new Employee({
        empid: "116",
        vnum: "1002",
        owner: "Amy",
        brand: "BMW",
        year: "2020"
    });
    emp3.save();

    const emp4 = new Employee({
        empid: "117",
        vnum: "1003",
        owner: "Rosa",
        brand: "BMW",
        year: "2020"
    });
    emp4.save();

    const emp5 = new Employee({
        empid: "118",
        vnum: "1004",
        owner: "Charles",
        brand: "BMW",
        year: "2020"
    });
    emp5.save();

    const emp6 = new Employee({
        empid: "119",
        vnum: "1005",
        owner: "Holt",
        brand: "BMW",
        year: "2020"
    });
    emp6.save();

    const emp7 = new Employee({
        empid: "120",
        vnum: "1006",
        owner: "Cheddar",
        brand: "BMW",
        year: "2020"
    });
    emp7.save();

    const emp8 = new Employee({
        empid: "121",
        vnum: "1007",
        owner: "Gina",
        brand: "BMW",
        year: "2020"
    });
    emp8.save();

    const emp9 = new Employee({
        empid: "122",
        vnum: "1008",
        owner: "Doug",
        brand: "BMW",
        year: "2020"
    });
    emp9.save();

    const emp10 = new Employee({
        empid: "123",
        vnum: "1009",
        owner: "Terry",
        brand: "BMW",
        year: "2020"
    });
    emp10.save();
    console.log("Records added!\n");
}
module.exports = insert;

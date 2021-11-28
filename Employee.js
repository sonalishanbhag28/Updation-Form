const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
    empid: {
        type: String,
        required: true
    },
    vnum: {
        type: String,
        required: false
    },
    owner: {
        type: String,
        required: false
    },
    brand: {
        type: String,
        required: false
    },
    year: {
        type: String,
        required:false
    }
})

module.exports = mongoose.model('Employee', EmployeeSchema);

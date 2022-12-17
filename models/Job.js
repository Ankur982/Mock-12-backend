const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    company_name: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    role: {
        type:String,
        require: true,
    },
    level: {
        type: String,
        require: true,
    },
    position: {
        type: String,
        require: true,
    },
    language: {
        type:String,
        require: true,
    },
    contract: {
        type: String,
        require: true,
    },
    createdDate : { 
        type: String , 
        default: new Date()
    }

},
    { timestamps: true }
);


module.exports = mongoose.model("Job", jobSchema);
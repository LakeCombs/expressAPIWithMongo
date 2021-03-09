const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
    course:{
        type:String,
        required: true
    },
    picture:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("studentModel", studentSchema)
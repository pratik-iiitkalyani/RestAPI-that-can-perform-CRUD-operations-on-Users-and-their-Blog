const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const userSchema = new Schema({
	name: {
		type : String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	}

})

const user = Mongoose.model('user', userSchema)
module.exports = user
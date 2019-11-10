const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const blogSchema = new Schema({
	title: {
		type : String,
		required: true,
	},
	userId: {
		type: Schema.Types.ObjectId, ref: 'user'
	},
	description: {
		type: String,
		required: true,
	}

})

const blog = Mongoose.model('blog', blogSchema)
module.exports = blog
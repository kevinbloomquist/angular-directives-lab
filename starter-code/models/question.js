const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/Questions-db");

var QuestionSchema = new Schema({
	question: String,
	answer: String,
	answerHidden: Boolean

});






const db = mongoose.model('Question',QuestionSchema);
module.exports = db;
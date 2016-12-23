const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/Questions");

var QuestionSchema = new Schema({
	question: String,
	answer: String,
	answerHidden: Boolean

});






const Question = mongoose.model('Question',QuestionSchema);
module.exports = Question;
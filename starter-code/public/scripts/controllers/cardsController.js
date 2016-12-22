angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);
console.log("working");

CardsController.$inject = ['$http'];
function CardsController($http){
  console.log("insideController");
  var vm = this;
  vm.all = [];
  vm.getQuestions = getQuestions;
  // vm.questionsList = [
  //   {question: "What is Batman's guilty pleasure?"},
  //   {question: "I'm sorry professor, I couldn't complete my homework because _________."},
  //   {question: "I get by with a little help from _________."},
  //   {question: "_________. It's a trap!"},
  //   {question: "The class field trip was completely ruined by _________."},
  //   {question: "What's my secret power?"}
  // ]
  function getQuestions(){

$http
.get('https://shielded-forest-41789.herokuapp.com/api/flashcards')
.then(function(response){
  console.log(response.data);
  vm.all = response.data;

  });

}

getQuestions();
}




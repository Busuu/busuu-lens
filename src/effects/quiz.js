function startQuiz() {

    for(var key in localStorage) {
      //document.getElementById("quiz-pic").innerHTML = localStorage[key]["Image"]
      data = JSON.parse(localStorage[key])
      console.log(data)

      document.getElementById("source_word_quiz").textContent = data["en"]
      document.getElementById("answer_word_quiz2").textContent = data["ol"]
    }
    console.log("Let's do a quiz!")
}

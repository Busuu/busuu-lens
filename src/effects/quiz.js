function check_local_storage(){
var num = 0
  for(var i in localStorage)
{
    num = num + 1;
}
return num
}

function startQuiz() {
	num_keys = check_local_storage()
	bruces_bonus_sidebar
	document.getElementById("bruces_bonus_sidebar").style.visibility = "hidden";

	key1 = Math.round(Math.random() * (num_keys - 1) + 1);

      //document.getElementById("quiz-pic").innerHTML = localStorage[key]["Image"]
     data = JSON.parse(localStorage[key1])

     console.log(data["image"])

     document.getElementById("quiz-pic").src = data["Image"]
     document.getElementById("source_word_quiz").textContent = data["en"]
      document.getElementById("answer_word_quiz2").textContent = data["ol"]
   


    key2 = Math.round(Math.random() * (num_keys - 1) + 1);
    key3 = Math.round(Math.random() * (num_keys - 1) + 1);
    console.log(key2)

    data2 = JSON.parse(localStorage[key2])
    document.getElementById("answer_word_quiz1").textContent = data2["ol"]

    data3 = JSON.parse(localStorage[key3])
    document.getElementById("answer_word_quiz3").textContent = data3["ol"]

    console.log("Let's do a quiz!")
    document.getElementById("quiz_dialog").style.visibility = "visible";
}

function done_gone_wrong(id_yall){
document.getElementById(id_yall).style.backgroundColor = "red"
document.getElementById(id_yall).style.transform = "scale(1.2)";
}

function done_gone_right(id_yall){
document.getElementById(id_yall).style.backgroundColor = "green"
document.getElementById(id_yall).style.transform = "scale(1.2)";
startQuiz()
}

nextQuestion()
	
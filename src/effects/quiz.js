function check_local_storage(){
var num = 0
  for(var i in localStorage)
{
    num = num + 1;
}
return num
}

function reset_buttons(){
	sleep(1000)
document.getElementById("answer_word_quiz_button1").style.backgroundColor = "#2E8CCC";
document.getElementById("answer_word_quiz_button1").style.transform = "scale(1)";
document.getElementById("answer_word_quiz_button2").style.backgroundColor = "#2E8CCC";
document.getElementById("answer_word_quiz_button2").style.transform = "scale(1)";
document.getElementById("answer_word_quiz_button3").style.backgroundColor = "#2E8CCC";
document.getElementById("answer_word_quiz_button3").style.transform = "scale(1)";	
}

function startQuiz() {
	num_keys = check_local_storage()

	document.getElementById("bruces_bonus_sidebar").style.visibility = "hidden";
	  document.getElementById("first-time").style.visibility = "hidden";

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
    reset_buttons()
}

function done_gone_wrong(id_yall){
var ping = new Audio("sounds/fuckedit.mp3");
document.getElementById(id_yall).style.backgroundColor = "red"
document.getElementById(id_yall).style.transform = "scale(1.2)";
ping.play()
}

function done_gone_right(id_yall){
var ping = new Audio("sounds/Twinkle-sound-effect.mp3");
document.getElementById(id_yall).style.backgroundColor = "green"
document.getElementById(id_yall).style.transform = "scale(1.2)";
ping.play()
startQuiz()
}


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
player1_name = localStorage.getItem("player1_namekey");
player2_name = localStorage.getItem("player2_namekey");
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

player1_score = 0;
player2_score = 0;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

question_turn = "p1";
answer_turn = "p2";

document.getElementById("player_question").innerHTML = "QUESTION TURN:" + player1_name;
document.getElementById("player_answer").innerHTML = "ANSWER TURN:" + player2_name;

function send() {
  number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;
correct_answer=parseInt(number1)+parseInt(number2);
question_tag='<h4 id="questions"> Q.'+number1+' + '+number2+'</h4> <br>'; 
input_tag='answer: <input type="number" id="answers"> <br>';
button_tag = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
final_tag=question_tag+input_tag+button_tag
    
document.getElementById("output").innerHTML = final_tag;
document.getElementById("number1").value="";
document.getElementById("number2").value="";   
}


function check() {
    user_answer = document.getElementById("answers").value;
  if( user_answer==correct_answer){
    if(answer_turn=="p1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else if( answer_turn=="p2"){
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }

  }

    if (question_turn == "p1") {
        question_turn = "p2";
        document.getElementById("player_question").innerHTML = "QUESTION TURN:" + player2_name;

    } else if (question_turn == "p2") {
        question_turn = "p1";
        document.getElementById("player_question").innerHTML = "QUESTION TURN:" + player1_name;
    }

    if (answer_turn == "p1") {
        answer_turn = "p2";
        document.getElementById("player_answer").innerHTML = "ANSWER TURN:" + player2_name;

    } else if (answer_turn == "p2") {
        answer_turn = "p1";
        document.getElementById("player_answer").innerHTML = "ANSWER TURN:" + player1_name;
    }

    document.getElementById("output").innerHTML = "";

}
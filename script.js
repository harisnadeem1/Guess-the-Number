
let guessInput = 0;
let statusMessage = "Try Again";
let score = 100;
let hint =" ";

let userName = prompt("Please Enter your name: ");
document.getElementById("name").innerHTML = "Hello " + userName + "!";


const guessedNum = Math.floor(Math.random()*100)+1;



document.getElementById("score").innerHTML="Score: "+ score;




function checkInput(){
    console.log("checkinput");

    if (guessInput!=guessedNum){
        score-=1;
        if(guessInput>guessedNum){
            hint = "Number you are guessing is smaller than " + guessInput;
        }
        else if(guessInput<guessedNum){
            hint = "Number you are guessing is greater than " + guessInput;
        }
    }
    else if(guessInput==guessedNum){
        hint=" ";
        statusMessage="Congrats You Win";
    }
    

    if(score<1){
        document.getElementById("InputArea").style.display="none";
        statusMessage="You Lost the Game";

    }
    document.getElementById("score").innerHTML="Score: "+ score;

    document.getElementById("status").innerHTML=statusMessage;
    document.getElementById("hint").innerHTML=hint;
    if(statusMessage=="Congrats You Win"){
        // document.getElementById("userinput").style.display="none";
        document.getElementById("status").style.color = "green";
        document.getElementById("status").style.fontSize = "40px";

    }


}



function storeNumber()
{
    console.log("input");
    guessInput = document.getElementById('guessInput').value;


    document.getElementById('guessInput').value = "";
    checkInput();

}





const runGame = (a) => {
    
    if (a == 1) {
      document.getElementById("one_player").style.display = "none";
      document.getElementById("two_player").style.display = "none";
      document.getElementById("title").style.display = "none";
      document.getElementById("autors").style.display = "none";    
      document.getElementById("instruction_btn").style.display = "none";
      document.getElementById("game").style.display = "block";
      document.getElementById("autors_btn").style.display = "none";
      document.getElementById("back_btn").style.display = "block";
      document.getElementById("gameover_btn").style.display = "block";
      document.getElementById("gameover").style.display = "none";
      one_player();
      
    }
    else if (a == 2) {
      document.getElementById("one_player").style.display = "none";
      document.getElementById("two_player").style.display = "none";
      document.getElementById("title").style.display = "none";
      document.getElementById("autors").style.display = "none";    
      document.getElementById("instruction_btn").style.display = "none";
      document.getElementById("game").style.display = "block";
      document.getElementById("autors_btn").style.display = "none";
      document.getElementById("back_btn").style.display = "block";
      document.getElementById("gameover_btn").style.display = "block";
      document.getElementById("gameover").style.display = "none";
      two_player();
    }
  };
  
 const showAutors = () => {
  document.getElementById("title").style.display = "none";
  document.getElementById("autors_btn").style.display = "none";
  document.getElementById("instruction_btn").style.display = "none";
  document.getElementById("one_player").style.display = "none";
  document.getElementById("two_player").style.display = "none";
  document.getElementById("autors").style.display = "block";
  document.getElementById("back_btn").style.display = "block";
  document.getElementById("gameover_btn").style.display = "none";
  document.getElementById("gameover").style.display = "none";
 };

 const showInstruction = () => {
  document.getElementById("title").style.display = "none";
  document.getElementById("autors_btn").style.display = "none";
  document.getElementById("instruction_btn").style.display = "none";
  document.getElementById("instruction").style.display = "block";
  document.getElementById("one_player").style.display = "none";
  document.getElementById("two_player").style.display = "none";
  document.getElementById("autors").style.display = "none";
  document.getElementById("back_btn").style.display = "block";
  document.getElementById("gameover_btn").style.display = "none";
  document.getElementById("gameover").style.display = "none";
};
  
const goBack = () => {
  document.getElementById("one_player").style.display = "block";
  document.getElementById("two_player").style.display = "block";
  document.getElementById("back_btn").style.display = "none";
  document.getElementById("autors").style.display = "none";
  document.getElementById("instruction_btn").style.display = "block";
  document.getElementById("instruction").style.display = "none";
  document.getElementById("title").style.display = "block";
  document.getElementById("autors_btn").style.display = "block";
  document.getElementById("game").style.display = "none";
  document.getElementById("gameover_btn").style.display = "none";
  document.getElementById("gameover").style.display = "none";
};

var gameOver = () => {
  document.getElementById("one_player").style.display = "none";
  document.getElementById("two_player").style.display = "none";
  document.getElementById("back_btn").style.display = "block";
  document.getElementById("autors").style.display = "none";
  document.getElementById("instruction_btn").style.display = "none";
  document.getElementById("instruction").style.display = "none";
  document.getElementById("title").style.display = "none";
  document.getElementById("autors_btn").style.display = "none";
  document.getElementById("game").style.display = "none";
  document.getElementById("gameover_btn").style.display = "none";
  document.getElementById("gameover").style.display = "block";

}


var audio = document.getElementById("menu_audio"); 
var audioOn = () => {
  document.getElementById("audio_on").style.display = "block";
  document.getElementById("audio_off").style.display = "none";
  audio.play();
}

var audioOff = () => {
  document.getElementById("audio_off").style.display = "block";
  document.getElementById("audio_on").style.display = "none";
  audio.pause();

}
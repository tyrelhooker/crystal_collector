var characterNumberArr = [];
var characterImagesArray= [
  "assets/images/wonderwoman.png",
  "assets/images/wolverine.png",
  "assets/images/batman.png",
  "assets/images/spiderman.png"
];
var randomNumber;
var losses = 0;
var character = $(".character");
var playerCounter = 0;



function generateRan(){
  var characterRandomNumber;
  for (i = 0; i < 4; i++) {
    characterRandomNumber = Math.floor( Math.random() * 12) + 1;
    if (characterNumberArr.indexOf(characterRandomNumber) === -1){
      characterNumberArr.push(characterRandomNumber);
    } else {
      i --; 
    }
  }
  console.log(characterNumberArr);
};

function winlossCounter () {
  if (playerCounter === randomNumber) {
    console.log("You win!");
    wins++;
    $("#wins").append(wins);
    resetGame();
  } else if (playerCounter > randomNumber) {
    console.log("You lose!");
    losses++;
    $("#losses").append(losses);
    resetGame();
  }
}

function resetGame () {
  randomNumber = Math.floor( Math.random() * 102) + 19;
  var wins = 0;
  playerCounter = 0;
  $(".randomNumber").text(randomNumber);
  console.log("reset" + randomNumber);
  $(".userScore").text(playerCounter);
  console.log("reset" + playerCounter);
  characterNumberArr = [];
  generateRan();
  
}

// BEGIN GAME 
resetGame();

for (var i = 0; i < characterNumberArr.length; i ++) {
  var imagecharacter = $("<img>");
  imagecharacter.addClass("characterImage");
  imagecharacter.attr("src", characterImagesArray[i]);
  imagecharacter.attr("data-characterValue", characterNumberArr[i]);
  character.append(imagecharacter);
}

character.on("click", ".characterImage", function() {
  var characterValue = ($(this).attr("data-characterValue"));
  characterValue = parseInt(characterValue);
  playerCounter += characterValue;
  $(".userScore").text(playerCounter);
  console.log (characterValue);
  console.log (playerCounter);
  winlossCounter();
});


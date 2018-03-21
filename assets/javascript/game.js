var crystalNumberArr = [];
var crystalImagesArray= [
  "assets/images/wonderwoman.png",
  "assets/images/wolverine.png",
  "assets/images/batman.png",
  "assets/images/spiderman.png"
];
var randomNumber = Math.floor( Math.random() * 102) + 19;
var wins = 0;
var losses = 0;
var crystal = $(".crystal");
var playerCounter = 0;

$(".randomNumber").append(randomNumber);
$(".userScore").append(playerCounter);

function generateRan(){
  var crystalRandomNumber;
  for (i = 0; i < 4; i++) {
    crystalRandomNumber = Math.floor( Math.random() * 12) + 1;
    if (crystalNumberArr.indexOf(crystalRandomNumber) === -1){
      crystalNumberArr.push(crystalRandomNumber);
    } else {
      i --; 
    }
  }
  console.log(crystalNumberArr);
};
generateRan();

for (var i = 0; i < crystalNumberArr.length; i ++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystalImage");
  imageCrystal.attr("src", crystalImagesArray[i]);
  imageCrystal.attr("data-crystalValue", crystalNumberArr[i]);
  crystal.append(imageCrystal);
}

crystal.on("click", ".crystalImage", function() {
  var crystalValue = ($(this).attr("data-crystalValue"));
  console.log (crystalValue);
  crystalValue = parseInt(crystalValue);
  playerCounter += crystalValue;
  $(".userScore").text(playerCounter);
  console.log (crystalValue);
  console.log (playerCounter);
  winlossCounter();
});

function winlossCounter () {
  if (playerCounter === randomNumber) {
    console.log("You win!");
    wins++;
    $("#wins").append(wins);
  } else if (playerCounter > randomNumber) {
    console.log("You lose!");
    losses++;
    $("#losses").append(losses);
  }
}

function resetGame () {}
function diceRoll(){

var sourcePartOne = 'images/dice';
var sourcePartTwo = '.png';

var sideOne = parseInt(Math.random() * 6 + 1, 10);

var sideTwo = parseInt(Math.random() * 6 + 1, 10);


document.querySelector(".diceOne").setAttribute("src", sourcePartOne + sideOne +sourcePartTwo);
document.querySelector(".diceTwo").setAttribute("src", sourcePartOne + sideTwo +sourcePartTwo);

if (sideOne > sideTwo) {
      document.getElementsByTagName("h1")[0].innerHTML = '<img class="titleFlag" src="images/flag.png" alt="">Player 1 Wins!';
    }

if (sideTwo > sideOne){
    document.getElementsByTagName("h1")[0].innerHTML = '<img class="titleFlag" src="images/flag.png" alt="">Player 2 Wins!';

}

if (sideOne === sideTwo){
    document.getElementsByTagName("h1")[0].innerHTML= "Draw!";
}

}

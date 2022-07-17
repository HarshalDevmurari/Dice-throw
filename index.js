

var name1 = prompt("Enter the first player's name!");
var name2 = prompt("Enter the second player's name!");

roll();

var i = 0;

function roll() {

    if(i != 0){
        var delayInMilliseconds = 200; 

setTimeout(function() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImage = "images/dice" + randomNumber1 + ".png";
    var image1 = document.querySelectorAll("img")[0];

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1];


    image1.setAttribute("src", randomImage);
    image2.setAttribute("src", randomImage2);


    var changeName1 = document.querySelectorAll("p")[0];
    var changeName2 = document.querySelectorAll("p")[1];

    changeName1.innerText = name1;
    changeName2.innerText = name2;


    var a = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) a.innerText = "🚩 " + name1 + " wins!";
    else if (randomNumber1 < randomNumber2) a.innerText = name2 + " wins! 🚩";
    else a.innerText = "A draw!";

}, delayInMilliseconds);
    }
    i++;
}

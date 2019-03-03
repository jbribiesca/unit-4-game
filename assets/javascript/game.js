$(document).ready(function() {

    var randomNumber = 0;
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var crystalBlue = 0;
    var crystalRed = 0;
    var crystalPurple = 0;
    var crystalUnicorn = 0;
  
    function initializeGame() {
        randomNumber = Math.floor(Math.random() * 120) + 10; 
        crystalBlue = Math.floor(Math.random() * 12) + 1; 
        crystalRed = Math.floor(Math.random() * 12) + 1; 
        crystalPurple = Math.floor(Math.random() * 12) + 1; 
        crystalUnicorn = Math.floor(Math.random() * 12) + 1; 
        $("#ranNum").text(randomNumber)
        $("#crystal1").attr("data-crystalvalue", crystalBlue)
        $("#crystal2").attr("data-crystalvalue", crystalRed)
        $("#crystal3").attr("data-crystalvalue", crystalPurple)
        $("#crystal4").attr("data-crystalvalue", crystalUnicorn)
        totalScore = 0;
        $("#totScore").empty();
    }
    
    initializeGame();

    $(".crystalImage").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        totalScore += crystalValue
        $("#totScore").text(totalScore)

        if (totalScore === randomNumber) {
            wins++;
            alert("You win!")
            $("#wintext").text(wins)
            initializeGame();
        }
        else if (totalScore >= randomNumber) {
            losses++;
            alert("You lose!")
            $("#losstext").text(losses)
            initializeGame();
        }
    })


})
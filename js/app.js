console.log("Hi Dan")
var correctAnswer = null
var answerCounterP1 = 0
var answerCounterP2 = 0
var playerCount = 0




var singlePlayer = null   //true or false


var game = {
       player1: {
         score: 0
       },
       player2: {
         score: 0
       },
        round: 0,
        currentQuestion: 0,
        movies: [
               {
                 title: "Jurassic Park",
                 trailer: 'http://www.youtube.com/embed/QWBKEmWWL38?autoplay=1&loop=1&playlist=QWBKEmWWL38',

                 questions: [ // game.movies[game.round].questions[game.currentQuestion]
                   'Who directed this movie?', // director 0
                   'Who wrote this movie?', // writer
                   'What did this movie gross wordlwide?', // gross
                   'What was the production cost?', // production cost
                   'When was this movie released?', // release date
                   'Who composed the soundtrack?', // composer
                   'Which character said: "God creates dinosaurs. God destroys dinosaurs. God creates man. Man destroys God. Man creates dinosaurs."', //quote1 6
                   'Who said: "Find Nedry! Check the vending machines!"', //quote2
                   'Who said:"Yeah, but, John, if Pirates of the Caribbean breaks down, the pirates do not eat the tourists."', //quote3 7
                   'Who played the character John Hammond?',
                     'Who directed this movie?', // TITANIC!!!!!
                     'Who wrote this movie?', // writer
                     'Who composed the soundtrack?', // composer
                     'What did this movie gross wordlwide?', // gross
                     'What was the production cost?', // production cost
                     'When was this movie released?', // release date
                     'Which character said: "That is what everybody says but, with all due respect, Miss, I am not the one hanging off the back of a ship here."', //quote1 6
                     'Who said: "You are not to see that boy again. Do you understand me? Rose, I forbid it."', //quote2
                     'Who said:"Seeing her coming out of the darkness like a ghost ship, it still gets me every time."', //quote3 7
                     'Who played the female lead Rose?',
                             'Who directed this movie?', // SHAWSHANK
                             'Who wrote this movie?', // writer
                             'Who composed the soundtrack?', // composer
                             'What did this movie gross wordlwide?', // gross
                             'What was the production cost?', // production cost
                             'When was this movie released?', // release date
                             'Which character said: "Get busy living, or get busy dying."', //quote1 6
                             'Who said: "Andy Dufresne - who crawled through a river of [expletive] and came out clean on the other side."', //quote2
                             'Who said:"Lord! It is a miracle! Man up and vanished like a fart in the wind!" ', //quote3 7
                             'Who played Andy Dufresne',

                  ], //DO Not move this bracket
                 buttonOptions: [
                   [ "James Cameron","Ed Zwick","Colin Trevorrow","Steven Spielberg","Chris Columbus"], //director
                   [ "James Cameron", "David Koepp","Tony Gilroy","David S. Goyer"," Andy Wachowski"], // Writer
                   ["$1.3 Billion", "$1.8 Billion","$550 Million","$257 Million"," $100 Million"], //Gross
                   [ "$125 Million","$55 Million", "$63 Million","$25 Million"," $104 Million"], //budget
                   ["1995","1989","1997"," 2001", "1993"], //release
                   [ "Hans Zimmer","Alan Silvestri", "James Horner", "John Williams","Thomas Newman"], //composer
                   ["Dr. Ian Malcolm","Dr. Alan Grant","Dr. Ellie Sattler","John Hammond","Ray Arnold"], //qoute1
                   ["John Hammond","Dr. Ian Malcolm","Dr. Alan Grant","Dr. Ellie Sattler","Ray Arnold"], //quote2
                   ["Dr. Alan Grant", "Dr. Ian Malcolm","Dr. Ellie Sattler","John Hammond","Ray Arnold"], //qoute2
                   [ "Michale Kane", "Ian McKellen","Lewis Dodgson", "Bob Peck", "Richard Attenborough"],
                      [ "Stephen Spielberg","George Lucas","James Cameron","Ridley Scott","Chris Columbus"], //TITANIC!!!! director
                      [ "James Cameron", "David Koepp","Tony Gilroy","David S. Goyer"," Andy Wachowski"], // Writer
                      ["John Williams", "James Horner","Hans Zimmer","Alan Silvestri","Thomas Newman"], //Composer
                      ["$2.19 Billion", "$1.6 Billion","$550 Million","$257 Million"," $100 Million"], //Gross
                      [ "$125 Million","$175 Million","$200 Million","$50 Million"," $104 Million"], //budget
                      [ "1993","1989","2003"," 2001", "1997"], //release
                      ["Jack Dawson","Rose DeWitt Bukater","Caledon 'Cal' Hockley","Molly Brown","Brock Lovett"], //qoute1
                      ["Ruth Dewitt Bukater","Rose DeWitt Bukater","Caledon 'Cal' Hockley","Molly Brown","Brock Lovett"], //quote2
                      ["Jack Dawson","Rose DeWitt Bukater","Brock Lovett","Caledon 'Cal' Hockley","Molly Brown"], //qoute2
                      [ "Kate Beckinsale", "Kate Winslet", "Cate Blanchett","Kathy Bates", "Gloria Stuart"],
                                [ "Stephen Spielberg","Frank Darabont","Christopher Nolan","Ridley Scott","Chris Columbus"], //Shawshank director
                                [ "David Koepp","Tony Gilroy","David S. Goyer", "Frank Darabont", "Andy Wachowski"], // Writer
                                ["John Williams", "James Horner","Hans Zimmer","Alan Silvestri","Thomas Newman"], //Composer
                                ["$200 Million", "$1.6 Billion","$50 Million", "$28 Million", "$100 Million"], //Gross
                                [ "$125 Million","$175 Million","$200 Million","$50 Million","$25 Million"], //budget
                                ["1997", "1994","1989","2003"," 2001"], //release
                                ["Andy Dufresne","Ellis 'Red' Redding","Warden Norton","Heywood,Tommy", "Colonel Coetzee"], //qoute1
                                ["Andy Dufresne","Ellis 'Red' Redding","Warden Norton","Heywood,Tommy", "Colonel Coetzee"], //quote2
                                ["Andy Dufresne","Ellis 'Red' Redding","Warden Norton","Heywood,Tommy", "Colonel Coetzee"], //qoute2
                                ["George Wyner", "Tom Hanks", "Tim Robbins","Morgan Freeman", "Bob Eastman"],

                 ], //DO NOT move this bracket

                 answerList: [
                   ["Steven Spielberg"], //director
                   ["David Koepp",], // Writer
                   ["$1.3 Billion"], //Gross
                   ["$63 million"], //budget
                   ["1993"], //release
                   ["John Williams"], //composer
                   ["Dr. Ian Malcolm"], //qoute1
                   ["John Hammond"], //quote2
                   ["Dr. Ian Malcolm"], //qoute2
                   ["Richard Attenborough"],
                      ["James Cameron"], //TITANIC !!!!!!!!director
                      [ "James Cameron"], // Writer
                      ["James Horner"], //composer
                      ["$2.19 Billion"], //Gross
                      ["$200 million"], //budget
                      ["1997"], //release
                      ["Jack Dawson"], //qoute1
                      ["Ruth Dewitt Bukater"], //quote2
                      ["Brock Lovett"], //qoute2
                      ["Kate Winslet"],
                              ["Frank Darabont"], //Shawshank!!!!director
                              [ "Frank Darabont"], // Writer
                              ["Thomas Newman"], //composer
                              ["$28 Million"], //Gross
                              ["$25 Million"], //budget
                              ["1994"], //release
                              ["Andy Dufresne"], //qoute1
                              ["Ellis 'Red' Redding"], //quote2
                              ["Warden Norton"], //qoute2
                              ["Tim Robbins"],
                   ] //DO NOT move this bracket


                },

                {
                  title: "Titanic",
                  trailer: 'http://www.youtube.com/embed/zCy5WQ9S4c0?autoplay=1&loop=1&playlist=zCy5WQ9S4c0',

                  questions: [ // game.movies[game.round].questions[game.currentQuestion]
                    'Who directed this movie?', // director 0
                    'Who wrote this movie?', // writer
                    'What did this movie gross wordlwide?', // gross
                    'What was the production cost?', // production cost
                    'When was this movie released?', // release date
                    'Who composed the soundtrack?', // composer
                    'Which character said: "That is what everybody says but, with all due respect, Miss, I am not the one hanging off the back of a ship here."', //quote1 6
                    'Who said: "You are not to see that boy again. Do you understand me? Rose, I forbid it."', //quote2
                    'Who said:"Seeing her coming out of the darkness like a ghost ship, it still gets me every time."', //quote3 7
                    'Who played the female lead Rose?'
                  ], //array 9 which is Q10
                  buttonOptions: [
                    ["James Cameron", "Stephen Spielberg","George Lucas","Ridley Scott","Chris Columbus"], //director
                    [ "James Cameron", "David Koepp","Tony Gilroy","David S. Goyer"," Andy Wachowski"], // Writer
                    ["$2.19 Billion", "$1.6 Billion","$550 Million","$257 Million"," $100 Million"], //Gross
                    ["$200 million", "$125 Million","$175 Million","$50 Million"," $104 Million"], //budget
                    ["1997", "1993","1989","2003"," 2001"], //release
                    ["James Horner", "john Williams","Hans Zimmer","Alan Silvestri","Thomas Newman"], //composer
                    ["Jack Dawson","Rose DeWitt Bukater","Caledon 'Cal' Hockley","Molly Brown","Brock Lovett"], //qoute1
                    ["Ruth Dewitt Bukater","Rose DeWitt Bukater","Caledon 'Cal' Hockley","Molly Brown","Brock Lovett"], //quote2
                    ["Brock Lovett","Jack Dawson","Rose DeWitt Bukater","Caledon 'Cal' Hockley","Molly Brown"], //qoute2
                    ["Kate Winslet", "Kate Beckinsale", "Cate Blanchett","Kathy Bates", "Gloria Stuart"],
                  ]


                 },


                {
                  title: "The Shawshank Redemption",
                  director:"Frank Darabont",
                  wrongDirectors:["James Cameron","Christopher Nolan","Robert Zemeckis","Ridley Scott"],
                  writer:"Frank Darabont",
                  gross:"$28 Million",
                  production: "$25 million",
                  release:"1994",
                  composer:"Thomas Newman",
                  actor:["Andy Dufresne","Ellis Boyd 'Red' Redding","Warden Norton","Heywood,Tommy", "Colonel Coetzee"],
                  quotes: ["Get busy living, or get busy dying.",
                           "Andy Dufresne - who crawled through a river of [$%#$] and came out clean on the other side.","Forty years I been asking permission to piss. I can't squeeze a drop without say-so.",
                            " We sat and drank with the sun on our shoulders and felt like free men. Hell, we could have been tarring the roof of one of our own houses.","Lord! It's a miracle! Man up and vanished like a fart in the wind!"],
               },


        ]

}

game.currentPlayer = game.player1


//Start screen
function start(){
$("#question").text("Welcome to MoviePop: a movie quiz game. Please select one or two players to begin. ");
$("#p1").hide();
$("#p2").hide();
$("#b-box").hide();
$( ".p" ).click(function() {
  $( "#b-box-player" ).fadeOut( "slow", function() {
    setTrailer()
    populateBoard()
    $("#b-box").fadeIn()

  });
});

}



$("#single-player-button").click(function() {
   console.log("single player")
   singlePlayer = true;
   $("#p2-counter").fadeOut();
   $("#p2-score").fadeOut();
    });


start();


//Sets First Trailer
function setTrailer(){
$('#trailer-container').attr('src', game.movies[0].trailer)
//if playerCount > 9
//$('#trailer-container').attr('src', game.movies[1].trailer)
//if playerCount > 19
//$('#trailer-container').attr('src', game.movies[2].trailer)


}



function populateBoard(){




  //This is saying correct answer is in position 1(change later to randowmize)
  correctAnswer = game.movies[0].answerList[game.currentQuestion]


//This is saying the
  var buttonOptions = game.movies[0].buttonOptions[game.currentQuestion]

  // Question: This s saying to change quesion div to our question array above, and it notes currentQuestion as the position.
  //Our click function below says we are changinf current question number eveytime we click.
  $("#question").html(game.movies[0].questions[game.currentQuestion]);
  $("#1").html(buttonOptions[0]);
  $("#2").html(buttonOptions[1]);
  $("#3").html(buttonOptions[2]);
  $("#4").html(buttonOptions[3]);
  $("#5").html(buttonOptions[4]);
}

//populateBoard()

$('.answer-button').click(function(){
  console.log($(this).text())
  // check if it's the correct answer
  if($(this).text() == correctAnswer) {
    console.log("Correct!")
    $("#correct").text("Correct! "+ correctAnswer+".");
console.log(playerCount)
    //if single player true

  //   if(singlePlayer == true ){
  //     answerCounterP1 += 1
  //   $("#p1-score").text(answerCounterP1);
  //
  //
  //   }
  // else { //paramaters of single player if there is two players
  //   if (playerCount % 5 == 0{
  //     answerCounterP1 += 1
  //     $("#p1-score").text(answerCounterP1);
  //     $("#p1").fadeIn()
  //
  //   } else {
  //     answerCounterP2 += 1
  //     $("#p2-score").text(answerCounterP2);
  //
  //   }
  // }
  } else {//for wrong answers
    console.log("Wrong!")
    $("#correct").text("Sorry.  Try the next question.");
  }
    game.currentQuestion += 1
    playerCount += 1

    playerTurn()
    populateBoard()
})


function playerTurn(){
  // if((playerCount % 5 == 0) && (game.currentPlayer == game.player2)) {
  //   game.currentPlayer == game.player1
  //   console.log("Switched back to player 1")
  // } else if((playerCount % 5 == 0) && (game.currentPlayer == game.player1)) {
  //   game.currentPlayer == game.player2
  //   console.log("Switched players to player 2")
  // }

  if(playerCount % 5 == 0) {
    if(game.currentPlayer == game.player1){
      game.currentPlayer = game.player2
      console.log('Player 2 turn')
    } else {
      game.currentPlayer = game.player1
      console.log('Player 1 turn')
    }
  }
}
///tomorrow increase scorebaord by current

console.log("Hi Dan")
var correctAnswer = null
var game = {
        player1: {},
        player2:{},
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
                   'Who played the character John Hammond?'], //array 9 which is Q10
                 buttonOptions: [
                   ["Steven Spielberg", "James Cameron","Ed Zwick","Colin Trevorrow","Chris Columbus"], //director
                   ["David Koepp", "James Cameron","Tony Gilroy","David S. Goyer"," Andy Wachowski"], // Writer
                   ["$1.3 Billion", "$1.8 Billion","$550 Million","$257 Million"," $100 Million"], //Gross
                   ["$63 million", "$125 Million","$55 Million","$25 Million"," $104 Million"], //budget
                   ["1993", "1995","1989","1997"," 2001"], //release
                   ["John Williams", "James Horner","Hans Zimmer","Alan Silvestri","Thomas Newman"], //composer
                   ["Dr. Ian Malcolm","Dr. Alan Grant","Dr. Ellie Sattler","John Hammond","Ray Arnold"], //qoute1
                   ["John Hammond","Dr. Ian Malcolm","Dr. Alan Grant","Dr. Ellie Sattler","Ray Arnold"], //quote2
                   ["Dr. Ian Malcolm","Dr. Alan Grant","Dr. Ellie Sattler","John Hammond","Ray Arnold"], //qoute2
                   ["Richard Attenborough", "Michale Kane", "Ian McKellen","Lewis Dodgson", "Bob Peck"],
                 ]


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
                    'Who played the female lead Rose?'], //array 9 which is Q10
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
                           "Andy Dufresne - who crawled through a river of S_^$^ and came out clean on the other side.","Forty years I been asking permission to piss. I can't squeeze a drop without say-so.",
                            " We sat and drank with the sun on our shoulders and felt like free men. Hell, we could have been tarring the roof of one of our own houses."," Lord! It's a miracle! Man up and vanished like a fart in the wind!"],
               },



        ]





}
//Jurassic Park 10 Qs
 // $("#question").html("What is Kaiser of this Monkey?");
 // $("#1").html("Boogey");
 // $("#2").html("Boogey");
 // $("#3").html("Boogey");
 // $("#4").html("Boogey");


function setTrailer(){
  $('#trailer-container').attr('src', game.movies[game.round].trailer)
}

setTrailer();

function populateBoard(){


  //This is saying correct answer is in position 1(change later to randowmize)
  correctAnswer = game.movies[game.round].buttonOptions[game.currentQuestion][0]


//This is saying the
  var buttonOptions = game.movies[game.round].buttonOptions[game.currentQuestion]

  // Question: This s saying to change quesion div to our question array above, and it notes currentQuestion as the position.
  //Our click function below says we are changinf current question number eveytime we click.
  $("#question").html(game.movies[game.round].questions[game.currentQuestion]);
  $("#1").html(buttonOptions[0]);
  $("#2").html(buttonOptions[1]);
  $("#3").html(buttonOptions[2]);
  $("#4").html(buttonOptions[3]);
  $("#5").html(buttonOptions[4]);
}

populateBoard()

$('.b').click(function(){
  console.log($(this).text())
  // check if it's the correct answer
  if($(this).text() == correctAnswer) {
    console.log("Correct!")
    $("#correct").text("Correct! "+ correctAnswer+".");
  } else {
    console.log("Wrong!")
    $("#correct").text("Sorry.  Try the next question.");
  }
  game.currentQuestion += 1
  populateBoard()
})

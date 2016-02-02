console.log("Hi Dan")
var correctAnswer = null
var game = {
        player1: {},
        player2:{},
        round: 0,
        currentQuestion: 0,
        questions: [
          'Who directed this movie?', // director 0
          'Who wrote this movie?', // writer
          'What did this movie gross wordlwide?', // gross
          'What was the production cost?', // production cost
          'When was this movie released?', // release date
          'Who composed the soundtrack?', // composer
          'Which character said: "God creates dinosaurs. God destroys dinosaurs. God creates man. Man destroys God. Man creates dinosaurs."', //quote1 6
          'Who said: "Find Nedry! Check the vending machines!"', //quote2
          'Who said:"Yeah, but, John, if Pirates of the Caribbean breaks down, the pirates do not eat the tourists."', //quote3 7
            ],
        movies: [
               {
                 title: "Jurassic Park",

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
                 ]

                //  director:"Steven Spielberg",
                //    wrongDirectors:["James Cameron","Ed Zwick","Colin Trevorrow","Chris Columbus"],
                //  writer:"David Koepp",
                //    wrongActors:["James Cameron","Tony Gilroy","David S. Goyer"," Andy Wachowski"],
                //  gross:"$1.3 Billion",
                //    wrongGross:["$1.8 Billion","$550 Million","$257 Million"," $100 Million"],
                //  production: "$63 million",
                //    wrongProduction:["$125 Million","$55 Million","$25 Million"," $104 Million"],
                //  release:"1993",
                //    wrongRelease:["1995","1989","1997"," 2001"],
                //  composer:"John Williams",
                //     wrongcomposer:["James Horner","Hans Zimmer","Alan Silvestri","Thomas Newman"],
                 //
                //  actor:["Dr. Alan Grant","Dr. Ellie Sattler","Dr. Ian Malcolm","John Hammond","Ray Arnold","Dennis Nedry",
                //         "Henry Wu"],
                //  quotes: ["God creates dinosaurs. God destroys dinosaurs. God creates man. Man destroys God. Man creates dinosaurs.",
                //           "Find Nedry! Check the vending machines!","It's a UNIX system! I know this!","We have all the problems of a major theme park and a major zoo and the computer's not even on its feet yet.",
                //            "Keep absolutely still. Its vision is based on movement."]

                },

                 {
                   title: "Blood Diamond",
                   director:"Edward Zwick",
                   wrongDirectors:["James Cameron","Tony Scott","Robert Zemeckis","Ridley Scott"],
                   writer:"Charles Leavitt",
                   gross:"$171 Million",
                   production: "$100 million",
                   release:"2006",
                   composer:"James Newton Howard",
                   actor:["Danny Archer","Solomon Vandy","Maddy Bowen","Dia Vandy"],
                   quotes: ["In America, it's bling bling. But out here it's bling bang.",
                            "The world is falling apart and all we hear about is blowjob-gate.",
                             "T.I.A. This is Africa."],


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

function populateBoard(){

  //This is saying correct answer is in position 1(change later to randowmize)
  correctAnswer = game.movies[game.round].buttonOptions[game.currentQuestion][0]


//This is saying the
  var buttonOptions = game.movies[game.round].buttonOptions[game.currentQuestion]

  // Question: This s saying to change quesion div to our question array above, and it notes currentQuestion as the position.
  //Our click function below says we are changinf current question number eveytime we click.
  $("#question").html(game.questions[game.currentQuestion]);
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
  } else {
    console.log("Wrong!")
  }
  game.currentQuestion += 1
  populateBoard()
})

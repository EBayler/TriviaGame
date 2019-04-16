window.onload = function () {

    var sweetQuestions = [{
            question: "In what movie does Brad Pitt play Lieutenant Aldo Raine?",
            choices: ["Inglorious Basterds", "Fight Club", " Bastard Out Of Carolina", "The Departed"],
            answer: 0,
            gif: "assets/images/IngloriousBasterds.gif"
        },
        {
            question: "In what movie does Bill say, \"I'm a killer, a murdering bastard, and there are consequences to breaking the heart of a murdering bastard \"?",
            choices: ["Bill and Ted's Excellent Adventure", "The Bill Collector", "Kill Bill Vol. 2", "The Great Adventures of Wild Bill Hickock"],
            answer: 2,
            gif: "assets/images/KillBill.gif"
        },
        {
            question: "In the HBO Television Series Game of Thrones who said, \"I have a tender spot in my heart for cripples, bastards and broken things\"?",
            choices: ["Sansa Stark", "Tyrion Lannister", "Cercei Lannister", "Jaime Lannister"],
            answer: 1,
            gif: "assets/images/Tyrion.gif"
        },
        {
            question: "Which of these is a Shakespearean quote?",
            choices: ["\"The bastard brains with these proper hands shall I dash out\".", "\"I should of been that I am, had the maidenliest star in the firmament twinkled on my bastardizing\".", "\"I am a bastard too, I love bastards.\".", "All of the above."],
            answer: 3,
            gif: "assets/images/shakespeare.gif"
        },
        {
            question: "Name that movie: \"Little bastard shot me in the ass\".",
            choices: ["Blazing Saddles", "Willy Wonka and the Chocolate Factory", "Robin Hood: Men In Tights", "Young Frankenstein"],
            answer: 0,
            gif: "assets/images/BlazingSaddles.gif"
        },
        {
            question: "What movie is this argument from: \"A: Don’t use that tone to me. - Ar: What tone? - A: That sarcastic contemptuous tone.That means you know everything because you’re a man, and I know nothing because I’m a woman. - Ar: You’re not a woman. - A: Oh, you bastard!\"?",
            choices: ["Hedwig and the Angry Itch", "Birdcage", "To Wong Foo, Thanks for Everything! Julie Newmar", "Die Hard"],
            answer: 1,
            gif: "assets/images/Birdcage.gif"
        },
        {
            question: "Complete this quote from the BBC television show The I.T. Crowd: \"People, what a bunch of _______\".",
            choices: ["fudge dragons!", "marshmallows!", "snowflakes!", "bastards!"],
            answer: 3,
            gif: "assets/images/I.T.Crowd.gif"
        },
        {
            question: "Which amazing Monty Python movie was this famous quote from: \"You lucky, lucky bastard...Proper little jailer's pet, aren't we!\"",
            choices: ["Life of Brian", "Monty Python and the Holy Grail", "The Meaning of Life", "And Now For Something Completely Different"],
            answer: 0,
            gif: "assets/images/LifeOfBrian.gif"
        },
        {
            question: "What police film is this quote from: \"You don't mind a bit of manpower, do ya Doris?...[laughing] Oh, dirty bastard!\"",
            choices: ["Let's Be Cops", "Zootopia", "Super Troopers", "Hot Fuzz"],
            answer: 3,
            gif: "assets/images/HotFuzz.gif"
        }
    ];

    var numGuessedCorrectly = 0;
    var numGuessedWrong = 0;
    var numUnanswered = 0;
    var timer = 30;
    var intervalId;
    var userGuess = "";
    var running = false;
    var numQ = sweetQuestions.length;
    var pick;
    var questionI;
    var gifArray = [];
    var theGoods = [];


    $("#reset").hide();

    $("#start").on("click", function () {

        $("#start").hide();
        displayQuestion();
        runTimer();
        for (var i = 0; i < sweetQuestions.length; i++) {
            theGoods.push(sweetQuestions[i]);
        }
        var audio = $("#bastardJams")[0];
        audio.play();

    })

    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }

    function decrement() {
        $("#timeLeft").html("<h2>Time remaining: " + timer + "</h2>");
        timer--;

        if (timer === 0) {
            numUnanswered++;
            stop();
            $("#answerDiv").html("<p>Time is up! The correct answer is: " + pick.choices[pick.answer] + "</p>")
            hideGif();
        }
    }

    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    function displayQuestion() {
        questionI = Math.floor(Math.random() * sweetQuestions.length);
        pick = sweetQuestions[questionI];

        $("#questionDiv").html("<h2>" + pick.question + "</h2>");
        for (var i = 0; i < pick.choices.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerChoice");
            userChoice.html(pick.choices[i]);
            userChoice.attr("data-guessValue", i);
            $("#answerDiv").append(userChoice);
        }



        $(".answerChoice").on("click", function () {
            userGuess = parseInt($(this).attr("data-guessValue"));
            if (userGuess === pick.answer) {
                stop();
                numGuessedCorrectly++;
                userGuess = "";
                $("#answerDiv").html("<p>Correct!</p>");
                hideGif();
            } else {
                stop();
                numGuessedWrong++;
                userGuess = "",
                    $("#answerDiv").html("<p>Not likely! <br> The correct answer is: " + pick.choices[pick.answer] + "</p>");
                hideGif();
            }

        })
    }


    function hideGif() {
        $("#answerDiv").append("<img src=" + pick.gif + ">");
        gifArray.push(pick);
        sweetQuestions.splice(questionI, 1);

        var hiddenGif = setTimeout(function () {
            $("#answerDiv").empty();
            timer = 30;

            if ((numGuessedWrong + numGuessedCorrectly + numUnanswered) === numQ) {
                $("#questionDiv").empty();
                $("#questionDiv").html("<h3> How'd You Do?: </h3>");
                $("#questionDiv").append("<h4> Woot Woot! You know your stuff!: " + numGuessedCorrectly + "</h4>");
                $("#questionDiv").append("<h4> Close but no cigar!: " + numGuessedWrong + "</h4>");
                $("#questionDiv").append("<h4> Come on! You didn't even try!: " + numUnanswered + "</h4>");
                $("#reset").show();

                numGuessedCorrectly = 0;
                numGuessedWrong = 0;
                numUnanswered = 0;
            } else {
                runTimer();
                displayQuestion();
            }
        }, 3000);

    }


    $("#reset").on("click", function () {
        $("#reset").hide();
        $("#answerDiv").empty();
        $("#questionDiv").empty();

        for (var i = 0; i < theGoods.length; i++) {
            sweetQuestions.push(theGoods[i]);
        }
        var audio = $("#bastardJams")[0];
        audio.play();
        runTimer();
        displayQuestion();
    })


}
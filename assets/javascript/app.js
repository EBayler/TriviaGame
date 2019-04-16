window.onload = function () {

    var options = [{
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

    var correctCount = 0;
    var wrongCount = 0;
    var unansweredCount = 0;
    var timer = 30;
    var intervalId;
    var userGuess = "";
    var running = false;
    var qCount = options.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];


    $("#reset").hide();

    $("#start").on("click", function () {

        $("#start").hide();
        displayQuestion();
        runTimer();
        for (var i = 0; i < options.length; i++) {
            holder.push(options[i]);
        }

    })

    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }

    function decrement() {
        $("#timeLeft").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;

        if (timer === 0) {
            unansweredCount++;
            stop();
            $("#answerBlock").html("<p>Time is up! The correct answer is: " + pick.choices[pick.answer] + "</p>")
            hideGif();
        }
    }

    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    function displayQuestion() {
        index = Math.floor(Math.random() * options.length);
        pick = options[index];

        $("#questionBlock").html("<h2>" + pick.question + "</h2>");
        for (var i = 0; i < pick.choices.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerChoice");
            userChoice.html(pick.choices[i]);
            userChoice.attr("data-guessValue", i);
            $("#answerBlock").append(userChoice);
        }

    }

    $(".answerChoice").on("click", function () {
        userGuess = parseInt($(this).attr("data-guessValue"));
        if (userGuess === pick.answer) {
            stop();
            correctCount++;
            userGuess = "";
            $("#answerBlock").html("<p>Correct!</p>");
            hideGif();
        } else {
            stop();
            wrongCount++;
            userGuess = "",
                $("#answerBlock").html("<p>Not likely! The correct answer is: " + pick.choices[pick.answer] + "</p>");
            hideGif();
        }

    })


    function hideGif() {
        $("#answerBlock").append("<img src=" + pick.gif + ">");
        newArray.push(pick);
        options.splice(index, 1);

        var hiddenGif = setTimeout(function () {
            $("#answerBlock").empty();
            timer = 30;

            if ((wrongCount + correctCount + unansweredCount) === qCount) {
                $("#questionBlock").empty();
                $("#questionBlock").html("<h3> Game Over! Here's your score: </h3>");
                $("#questionBlock").append("<h4> You right!: " + correctCount + "</h4>");
                $("#questionBlock").append("<h4> It's a NO from me: " + wrongCount + "</h4>");
                $("#questionBlock").append("<h4> Come on! You didn't even try!: " + unansweredCount + "</h4>");
                $("#reset").show();

                correctCount = 0;
                wrongCount = 0;
                unansweredCount = 0;
            } else {
                runTimer();
                displayQuestion();
            }
        }, 3000);

    }


    $("#reset").on("click", function () {
        $("#reset").hide();
        $("#answerBlock").empty();
        $("#questionBlock").empty();

        for (var i = 0; i < holder.length; i++);
        options.push(holder[i]);
    })
    runTimer();
    displayQuestion();


}
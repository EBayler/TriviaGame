var questionsAnswers = [{
        question: "In what movie does Brad Pitt play Lieutenant Aldo Raine?",
        answers: {

            a: "Inglorious Basterds",
            b: "Fight Club",
            c: " Bastard Out Of Carolina",
            d: "The Departed",
        },

        correctAnswer: "a",

    },
    {
        question: "In what movie does Bill say, \"I'm a killer, a murdering bastard, and there are consequences to breaking the heart of a murdering bastard \"?",
        answers: {
            a: "Bill and Ted's Excellent Adventure",
            b: "The Bill Collector",
            c: "Kill Bill Vol. 2",
            d: "The Great Adventures of Wild Bill Hickock",
        },
        correctAnswer: "c",

    },
    {
        question: "In the HBO Television Series Game of Thrones who said, \"I have a tender spot in my heart for cripples, bastards and broken things\"?",
        answers: {
            a: "Sansa Stark",
            b: "Tyrion Lannister",
            c: "Cercei Lannister",
            d: "Jaime Lannister",
        },
        correct: "b",

    },
    {
        question: "Which of these is a Shakespearean quote?",
        answers: {
            a: "\"The bastard brains with these proper hands shall I dash out\".",
            b: "\"I should of been that I am, had the maidenliest star in the firmament twinkled on my bastardizing\".",
            c: "\"I am a bastard too, I love bastards.\".",
            d: "All of the above.",
        },
        correct: "d",

    },
    {
        question: "Name that movie: \"Little bastard shot me in the ass\".",
        answers: {
            a: "Blazing Saddles",
            b: "Willy Wonka and the Chocolate Factory",
            c: "Robin Hood: Men In Tights",
            d: "Young Frankenstein",
        },
        correct: "a",

    },
    {
        question: "What movie is this argument from: \"Albert: Don’t use that tone to me. - Armand: What tone? - Albert : That sarcastic contemptuous tone.That means you know everything because you’re a man, and I know nothing because I’m a woman. - Armand: You’re not a woman. - Albert: Oh, you bastard!\"?",
        answers: {
            a: "Hedwig and the Angry Itch",
            b: "Birdcage",
            c: "To Wong Foo, Thanks for Everything! Julie Newmar",
            d: "Die Hard",
        },
        correct: "b",

    },
    {
        question: "Complete this quote from the BBC television show The I.T. Crowd: \"People, what a bunch of _______\".",
        answers: {
            a: "fudge dragons!",
            b: "marshmallows!",
            c: "snowflakes!",
            d: "bastards!",
        },
        correct: "d",

    },
    {
        question: "Which amazing Monty Python movie was this famous quote from: \"You lucky, lucky bastard...Proper little jailer's pet, aren't we!\"",
        answers: {
            a: "Life of Brian",
            b: "Monty Python and the Holy Grail",
            c: "The Meaning of Life",
            d: "And Now For Something Completely Different",
        },
        correct: "a",

    },
    {
        question: "What police film is this quote from: \"You don't mind a bit of manpower, do ya Doris?...[laughing] Oh, dirty bastard!\"",
        answers: {
            a: "Let's Be Cops",
            b: "Zootopia",
            c: "Super Troopers",
            d: "Hot Fuzz",
        },
        correct: "d",
        
    },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');




function buildQuiz() {}

function showResults() {}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
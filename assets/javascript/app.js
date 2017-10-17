// start screen with button
// make questions using <p> or <h> tags
// assign radio buttons for quesitons
// assign functionality to radio buttons
// make sure only one button can be selected at once
// make a timer
// if player doesnt answer the questions in time the quiz is done and they get the unanswered questions wrong
// submit questions button at the end
// displays correct answers

// will need a database of questions and answers to pull from and check from
// use an array of objects?

//generates images



var myQuestions = [

    {
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator",
            c: "Waluigi, obviously",
            d: "Poopscum"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator",
            c: "Waluigi, obviously",
            d: "Poopscum"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator",
            c: "Waluigi, obviously",
            d: "Poopscum"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator",
            c: "Waluigi, obviously",
            d: "Poopscum"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator",
            c: "Waluigi, obviously",
            d: "Poopscum"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator",
            c: "Waluigi, obviously",
            d: "Poopscum"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator",
            c: "Waluigi, obviously",
            d: "Poopscum"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator",
            c: "Waluigi, obviously",
            d: "Poopscum"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator",
            c: "Waluigi, obviously",
            d: "Poopscum"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the strongest?",
        answers: {
            a: "Superman",
            b: "The Terminator",
            c: "Waluigi, obviously",
            d: "Poopscum"
        },
        correctAnswer: "c"
    },
];

function setQuestions() {
    for (var i = 0; i < myQuestions.length; i++) { //start at 0 bc of array index (0 based)
        // pull questions from object
        $(".question").append('<p>' + myQuestions[i].question + '</p>');

    }
}

$(document).ready(function() {

    $(".btn").click(function() {
        setQuestions();
    })
})
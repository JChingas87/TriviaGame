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
        question: "1.)  Which player has won the most NBA championships?",
        answers: [
            "a. Michael Jordan",
            "b. Bill Russell",
            "c. Kareem Abdul Jabbar",
            "d. Wilt Chamberlain"
        ],
        correctAnswer: "c"
    },
    {
        question: "2.)  Who is the strongest?",
        answers: [
            "a: Superman",
            "b: The Terminator",
            "c: Waluigi, obviously",
            "d: Poopscum"
        ],
        correctAnswer: "c"
    },
    {
        question: "3.) Who is the strongest?",
        answers: [
            "a: Superman",
            "b: The Terminator",
            "c: Waluigi, obviously",
            "d: Poopscum"
        ],
        correctAnswer: "c"
    },
    {
        question: "4.) Who is the strongest?",
        answers: [
            "a: Superman",
            "b: The Terminator",
            "c: Waluigi, obviously",
            "d: Poopscum"
        ],
        correctAnswer: "c"
    },
    {
        question: "5.) Who is the strongest?",
        answers: [
            "a: Superman",
            "b: The Terminator",
            "c: Waluigi, obviously",
            "d: Poopscum"
        ],
        correctAnswer: "c"
    },
    {
        question: "6.) Who is the strongest?",
        answers: [
            "a: Superman",
            "b: The Terminator",
            "c: Waluigi, obviously",
            "d: Poopscum"
        ],
        correctAnswer: "c"
    },
    {
        question: "7.) Who is the strongest?",
        answers: [
            "a: Superman",
            "b: The Terminator",
            "c: Waluigi, obviously",
            "d: Poopscum"
        ],
        correctAnswer: "c"
    },
    {
        question: "8.) Who is the strongest?",
        answers: [
            "a: Superman",
            "b: The Terminator",
            "c: Waluigi, obviously",
            "d: Poopscum"
        ],
        correctAnswer: "c"
    },
    {
        question: "9.) Who is the strongest?",
        answers: [
            "a: Superman",
            "b: The Terminator",
            "c: Waluigi, obviously",
            "d: Poopscum"
        ],
        correctAnswer: "c"
    },
    {
        question: "10.) Who is the strongest?",
        answers: [
            "a: Superman",
            "b: The Terminator",
            "c: Waluigi, obviously",
            "d: Poopscum"
        ],
        correctAnswer: "c"
    },
];

function setQuestions() {
    for (var i = 0; i < myQuestions.length; i++) { //start at 0 bc of array index (0 based)
        // pull questions from object
        $(".questions").append('<p>' + myQuestions[i].question + '</p>');
        for (var j = 0; j < myQuestions[i].answers.length; j++) {
            // pull questions from object
            var radioBtn = $('<input type="radio" class="radio" name="radio" />');
            radioBtn.appendTo(".questions");
            // $(".questions").append('<p>' + radioBtn + myQuestions[i].answers[j] + '</p');
            $(".questions").append('<p>' + myQuestions[i].answers[j] + '</p');
        }
    }
}

$(document).ready(function() {

    $(".btn").click(function() {
        setQuestions();
    })
})
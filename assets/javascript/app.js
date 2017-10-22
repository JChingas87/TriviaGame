var myQuestions = [

    {
        question: "1.)  Which player has won the most NBA championships?",
        answers: [
            "a. Michael Jordan",
            "b. Bill Russell",
            "c. Kareem Abdul Jabbar",
            "d. Wilt Chamberlain"
        ],

        correctAnswer: "Bill Russell"
    },
    {
        question: "2.)  Who did the New England Patriots beat to win their first Super Bowl?",
        answers: [
            "a. St. Louis Rams",
            "b. Atlanta Falcons",
            "c. Carolina Panthers",
            "d. Philadelphia Eagles"
        ],
        correctAnswer: "St. Louis Rams"
    },
    {
        question: "3.) Which player is nicknamed the Great Bambino?",
        answers: [
            "a. Ty Cobb",
            "b. Ted Williams",
            "c. Babe Ruth",
            "d. Yogi Berra"
        ],

        correctAnswer: "Babe Ruth"
    },
    {
        question: "4.) How many victories did Muhammad Ali earn during his famous three fights against Joe Frazier?",
        answers: [
            "a. 3",
            "b. 2",
            "c. 0",
            "d. 1"
        ],
        correctAnswer: "2"
    },
    {
        question: "5.) Which university did Michael Jordan play basketball for?",
        answers: [
            "a. MSU",
            "b. Kentucky",
            "c. Duke",
            "d. UNC"
        ],

        correctAnswer: "UNC"
    },
    {
        question: "6.) Which player has hit the most  homeruns in a single season?",
        answers: [
            "a. Mark McGuire",
            "b. Barry Bonds",
            "c. Sammy Sosa",
            "d. Alex Rodriguez"
        ],

        correctAnswer: "Barry Bonds"
    },
    {
        question: "7.) Which golfer has won the second most major titles of all-time?",
        answers: [
            "a. Greg Norman",
            "b. Jack Nicklaus",
            "c. Tiger Woods",
            "d. Arnold Palmer"
        ],

        correctAnswer: "Tiger Woods"
    },
    {
        question: "8.) How many World Series titles have the Red Sox won?",
        answers: [
            "a. 2",
            "b. 3",
            "c. 5",
            "d. 4"
        ],
        correctAnswer: "3"
    },
    {
        question: "9.) Who is number one on the all-time NBA scoring list?",
        answers: [
            "a. Kareem Abdul Jabbar",
            "b. Karl Malone",
            "c. Michael Jordan",
            "d. Lebron James"
        ],
        correctAnswer: "Kareem Abdul Jabbar"
    },
    {
        question: "10.) Which team has the most world championships across all of the major US sports?",
        answers: [
            "a. Montreal Canadians",
            "b. Boston Celtics",
            "c. Pittsburg Steelers",
            "d. New York Yankees"
        ],

        correctAnswer: "New York Yankees"
    },
];

var correct = 0;
var incorrect = 0;

function setQuestions() {
    for (var i = 0; i < myQuestions.length; i++) { //start at 0 bc of array index (0 based)
        // pull questions from object
        $(".questions").append('<p>' + myQuestions[i].question + '</p>');
        for (var j = 0; j < myQuestions[i].answers.length; j++) {
            // pull questions from object
            var radioBtn = $('<input type="radio" class=' + [i] + ' name=' + [i] + ' value="' + myQuestions[i].answers[j] + '"/>')
            radioBtn.appendTo(".questions");
            // $(".questions").append('<p>' + radioBtn + myQuestions[i].answers[j] + '</p');
            $(".questions").append('<p>' + myQuestions[i].answers[j] + '</p');
        }
    }
}

$(document).ready(function() {

    var countdownTimer = {
        time: 40,
        reset: function() {
            countdownTimer.time = 40;
            $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
            $('.timer').hide();
        },
        start: function() {
            counter = setInterval(countdownTimer.count, 1000);
        },
        stop: function() {
            clearInterval(counter);
        },
        count: function() {
            countdownTimer.time--;
            console.log(countdownTimer.time);

            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');

            } else {
                countdownTimer.stop();
                countdownTimer.reset();
                calculateScore();
                $(".btn").text("Try Again!");
                $(".btn").show();
                $(".questions").hide();

            }
        }

    };

    $(".btn").click(function() {
        $('.timer').show();
        $(".btn").hide();
        setQuestions();
        countdownTimer.start();
        countdownTimer.count();
        $(".questions").show();
        $(".correct").empty();
        correct = 0;
        $(".incorrect").empty();
        incorrect = 0;
    })

    function correctAnswer() {
        correct++;
    }

    function wrongAnswer() {
        incorrect++;
    }

    function calculateScore() {
        correctOrWrong();
        $(".correct").append('<p>' +
            correct + ' correct</p>');
        $(".incorrect").append('<p>' +
            incorrect + ' incorrect</p>');
    }

    function correctOrWrong() {

        console.log($("input[name='0']:checked").val());
        for (var i = 0; i < myQuestions.length; i++) {
            if ($("input[name=" + i + "]:checked").val() !== undefined && $("input[name=" + i + "]:checked").val().includes(myQuestions[i].correctAnswer)) {
                correctAnswer();
            } else {
                wrongAnswer();
            }
        }
    }

})
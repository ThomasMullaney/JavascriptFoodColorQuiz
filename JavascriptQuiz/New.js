
// timer count down
let startingTimer = 1;
let time = startingTimer * 60;
let timerEl = document.getElementById("timer");
let clock = setInterval(countDown, 1000);
function countDown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (time === 0) {
        clearInterval(clock)
    }
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
};
// create questions
let startQuestions = [
    { question: "What color is a blueberry", answer: 4 },
    { question: "What color is an orange?", answer: 1 },
    { question: "What color is a tomato", answer: 3 },
    { question: "What color is a bananana", answer: 1 },
    { question: "What color is a apple:", answer: 4 }
];
// create answers
let answers = [
    { "1": "REd", "2": "White", "3": "Orange", "4": "Blue" },
    { "1": "Orange", "2": "blue", "3": "pink", "4": "yellow" },
    { "1": "green", "2": "brown", "3": "red", "4": "yellow" },
    { "1": "yellow.", "2": "purple", "3": "blue", "4": "pink" },
    { "1": "green", "2": "red.", "3": "brown.", "4": "They can be lots of colors!" },
];
console.log(
    answers[0][4],
    answers[0][1],
    answers[0][3],
    answers[0][1],
    answers[0][4]
)
// user score starts at 0
let userScore = 0;
$("#question").text(startQuestions[0].question);
$(".answer1").text(answers[0][4]);
$(".answer2").text(answers[0][1]);
$(".answer3").text(answers[0][3]);
$(".answer4").text(answers[0][1]);
$(".answer5").text(answers[0][4]);
var index = 0;
function renderQuestion() {
    $("#question").text(startQuestions[index].question);
    $(".answer1").text(answers[index][1]);
    $(".answer2").text(answers[index][2]);
    $(".answer3").text(answers[index][3]);
    $(".answer4").text(answers[index][4]);
}
$(".answers").on("click", function () {
    var buttonStart = $(this).val();
    console.log(buttonStart);

    if (parseInt(buttonStart) === parseInt(startQuestions[index].answer)) {
     index++
    userScore++;

        if  (startQuestions.length > index) {
            parseInt(buttonStart) === parseInt(startQuestions[index].answer)
         {
            index++
            userScore++;
        } else {
            time -= 10
        }
        
        renderQuestion()
    } else {
     
        $(".scoreEl").show()
        $(".playAgain").show()
        $(".questionContainer").hide()
        clearInterval(clock)
        localStorage.setItem("userScore", scoreEl)
    }
};
console.log(startQuestions[1].question, startQuestions[0].answer);
// High score (local storage) and save initials
// add event listerner to attach to sumbit button
// take initials/ score and save to local storage 
// conditions for keeping score






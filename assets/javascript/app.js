// Initializes game.

// Starts game.
var start = $('start-btn').on('click', function() {
    $(this).parent().hide();
    $('#trivia').show();
    countdown(20);
    questionDisplay();
});

// Questions.
var questions = [{

    question: 'What is the name of the furthest star from the Earth?',
    options: ['Arcturus', 'Betelgeuse', 'Vega', 'Icarus'],
    answer: 'Icarus',

}, {
    question: 'What is the name of the brightest star we know?',
    options: ['Sirius', 'Rigel', 'Altair', 'Deneb'],
    answer: 'Sirius',
},
    {
    question: 'What is the furthest discovered object from us space?',
    options: ['PC 1247-3406', 'Hale Bopp', 'MACS0647-JD', 'NGC 1277'],
    answer: 'MACS0647-JD',
}, 
    {
    question: 'Is mayonaise an instrument?',
    options: ['No, Patrick', 'No', 'Yes', 'It depends'],
    answer: 'No, Patrick.',
},
    {
    question: 'What is the hardest metal?',
    options: ['Chromium', 'Diamond', 'Tungsten', 'Titanium'],
    answer: 'Chromium',
}];

// Trivia functions.
// Displays questions.
var questionDisplay = function() {
    $('#question').html(questions);
    // Loop to get questions.
    for (var questionIndex = 0; questionIndex < 5; questionIndex++) {
        $('#question').prepend('div id"' + questions[questionIndex].name + '"></div>');
        $(questions[questionIndex].divId).append('<div id ="ques-title">' + questions[questionIndex].ques + '</div>');
        // Another loop that gets the answers.
    }
}

// Function for countdown timer

// Function that shows if answer is correct
// Brings up correct screen without refresh.

// Function that shows if answer is incorrect
// if/else loop that brings up incorrect screen without refresh for getting question wrong or running out of time.
// Will simultaneosly show correct answer.

// Function that keeps track of score and shows it at the end.



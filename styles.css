const correctAnswers = {
    q1: 'a',
    q2: 'b',
    q3: 'a',
    q4: 'a',
    q5: 'a',
    q6: 'a',
    q7: 'a',
    q8: 'a',
    q9: 'a',
    q10: 'a',
    q11: 'a',
    q12: 'a',
    q13: 'a',
    q14: 'a',
    q15: 'a',
    q16: 'a',
    q17: 'a',
    q18: 'a',
    q19: 'a',
    q20: 'a'
};

function submitQuiz() {
    let score = 0;
    const incorrectAnswersList = [];
    const quizForm = document.getElementById('quiz-form');

    // Check answers
    for (let question in correctAnswers) {
        const selectedAnswer = quizForm.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        } else {
            if (selectedAnswer) {
                incorrectAnswersList.push({
                    question: question,
                    selectedAnswer: selectedAnswer.value
                });
            } else {
                incorrectAnswersList.push({
                    question: question,
                    selectedAnswer: null
                });
            }
        }
    }

    // Show score
    document.getElementById('score').innerText = `You scored ${score} out of 20.`;
    
    // Show incorrect answers
    const incorrectList = document.getElementById('incorrect-list');
    incorrectList.innerHTML = '';
    incorrectAnswersList.forEach(incorrect => {
        const li = document.createElement('li');
        li.textContent = `Question ${incorrect.question}: Your answer: ${incorrect.selectedAnswer || 'No answer'} (Correct answer: ${correctAnswers[incorrect.question]})`;
        incorrectList.appendChild(li);
    });

    // Hide quiz form and show result
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}

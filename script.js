document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Array of correct answers (corresponding to each question)
    const correctAnswers = ['b', 'b', 'a', 'a', 'b', 'b', 'b', 'c', 'a', 'b', 'a', 'b', 'b', 'c', 'c', 'a', 'a', 'b', 'b', 'a'];
    
    let score = 0;
    
    // Loop through each question and check the user's answer
    for (let i = 1; i <= correctAnswers.length; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[i - 1]) {
            score++;
        }
    }
    
    // Calculate the percentage score
    const percentage = (score / correctAnswers.length) * 100;
    
    // Determine the level based on the score
    let resultText;
    if (percentage === 100) {
        resultText = `🌟 Perfect! You got all ${score} out of ${correctAnswers.length} correct! 🌟`;
    } else if (percentage >= 80) {
        resultText = `Great job! You scored ${score} out of ${correctAnswers.length}. Keep it up!`;
    } else if (percentage >= 50) {
        resultText = `Good effort! You scored ${score} out of ${correctAnswers.length}. Study a bit more!`;
    } else {
        resultText = `You scored ${score} out of ${correctAnswers.length}. Don't worry, review the material and try again!`;
    }

    // Display the result
    const resultSection = document.createElement('div');
    resultSection.className = 'result';
    resultSection.textContent = resultText;

    // Remove previous result if any
    const existingResult = document.querySelector('.result');
    if (existingResult) {
        existingResult.remove();
    }

    // Append the result to the form
    document.getElementById('quiz').appendChild(resultSection);
});

let randomNumber;
let attempts;

function initGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = 'Attempts: 0';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').focus();
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const messageElement = document.getElementById('message');
    const guessInput = document.getElementById('guessInput');
    
    guessInput.value = '';
    guessInput.focus();
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageElement.textContent = 'Please enter a valid number between 1 and 100';
        messageElement.style.color = 'red';
        return;
    }

    attempts++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

    if (guess === randomNumber) {
        messageElement.textContent = `Congratulations! You got it in ${attempts} attempts!`;
        messageElement.style.color = 'green';
        document.getElementById('guessInput').disabled = true;
    } else if (guess < randomNumber) {
        messageElement.textContent = 'Too low! Try a higher number.';
        messageElement.style.color = 'blue';
    } else {
        messageElement.textContent = 'Too high! Try a lower number.';
        messageElement.style.color = 'blue';
    }
}

function resetGame() {
    document.getElementById('guessInput').disabled = false;
    initGame();
}

// Initialize the game when the page loads
window.onload = initGame;

// Add keyboard support
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const guessInput = document.getElementById('guessInput');
        if (document.activeElement === guessInput) {
            checkGuess();
        }
    }
}); 
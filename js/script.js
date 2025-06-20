function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const btn = document.getElementById("darkModeBtn");
    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
}

const text = "Hi, I'm Riddhi! I write about life, code, and dreams 🌸";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50);
    }
}
window.onload = type;


function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = { rock: '✊', paper: '✋', scissors: '✌️' };

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win! 🎉';
    } else {
        result = 'You lose! 😢';
    }

    document.getElementById('result').innerHTML = `
      You chose <strong>${emojis[playerChoice]}</strong> — 
      Computer chose <strong>${emojis[computerChoice]}</strong><br>
      <strong>${result}</strong>
    `;
}

function generateQuote() {
    const quotes = [
        "Be yourself; everyone else is already taken.",
        "Magic is believing in yourself.",
        "Not all those who wander are lost.",
        "Do what you love and love what you do.",
        "You can't stop me loving myself – BTS 💜"
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteBox").textContent = quote;
}

window.onload = function() {
    let btn = document.getElementById('btn');
    let startContainer = document.getElementById('startContainer');
    let gameContainer = document.getElementById('gameContainer');
    let scoreboard = document.getElementById('scoreboard');
    let score = document.getElementById('score');

    let balloonInterval = ['normal', 'normal', 'star', 'normal', 'normal'];
    let currentScore = 0;
    score.innerText = currentScore;

    let running = false;

    btn.onclick = function() {
        if (!running) {
            startContainer.style.display = 'none';
            startContainer.style.zIndex = '-1';
            gameContainer.style.display = 'block';
            scoreboard.style.display = 'block';
            running = true;
        }
        startGame();
    };

    function createBalloon() {
        if (!running) return;
        let balloon = document.createElement('div');
        balloon.classList.add(balloonInterval[Math.trunc(Math.random() * 5)]);
        balloon.style.left = Math.random() * (gameContainer.clientWidth - 50) + 'px';
        let duration = Math.random() * 8 + 5;
        balloon.style.animationDuration = duration + 's';


        balloon.addEventListener('click', function() {
            new Audio('Media/soundeffect.mp3').play();
            currentScore++;
            score.innerText = currentScore;
            balloon.style.top = balloon.offsetTop + 'px';
            
            balloon.classList.add('popped');
            setTimeout(() => {
                balloon.remove();
            }, 200);
            balloon.style.pointerEvents = 'none';
            //*
        });
        
        
        balloon.addEventListener('animationend', function() {
            gameContainer.removeChild(balloon);
        });
        gameContainer.appendChild(balloon);
    };

    function startGame() { 
        running = true;
        setInterval(createBalloon, 1000);
        
    }



};
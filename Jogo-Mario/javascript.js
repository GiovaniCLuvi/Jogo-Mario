const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const audioJump = document.querySelector('.audiojump');
const gameOver = document.querySelector('.gameover');
const textStart = document.getElementById('text-start');


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 700);
    audioJump.currentTime = 0;
    audioJump.volume = 0.1;
    audioJump.play();
}

const loop = setInterval(() => {

    const tuboPos = tubo.offsetLeft;
    const marioPos = +window.getComputedStyle(mario).bottom.replace('px','');
    if (tuboPos <= 120 && tuboPos > 0 && marioPos < 80) {
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPos}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPos}px`;

        mario.src = './imagens/game-over.png'
        mario.style.width ='77px';/* tamanho do Mario quando ele morre*/
        mario.style.marginLeft = '50px';/* distância do Mario da borda*/






        gameOver.currentTime = 0;
        gameOver.volume = 0.4;
        gameOver.play();

        document.getElementById("text-start").style.color = "black";
        document.getElementById("text-start").innerHTML = "<strong>GAME OVER</strong>";


        clearInterval(loop);
    }
},10);

document.addEventListener('keydown', jump);
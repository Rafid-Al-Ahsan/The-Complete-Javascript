'use strict';

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentScore, activePlayer, scores, playing; 

function reset(){
    currentScore = 0;
    activePlayer = 0;
    scores = [0,0];
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
}

reset();

const switchPlayer = function(){
    currentScore =0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function(){
      
    if(playing){
    //1.Roll the dice
    let dice = Math.trunc(Math.random()*6)+1;

    //2.Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.If the number is not equal 1
    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }

    //4.If the number is 1, then switch player
    else{
        switchPlayer();
    }

}
});

//5. When the hold button is pressed
btnHold.addEventListener('click', function(){
     
    if(playing){
    //6.Store the current score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //7. Check if the score of the active player is greater or equal 20
    if(scores[activePlayer] >=20){
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    }
    //8. switchplayer
    else{
        switchPlayer();
    }

}
    
});

//9. Adding funtionality to new game button
btnNew.addEventListener('click', reset);

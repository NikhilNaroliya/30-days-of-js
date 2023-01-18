const score0El=document.querySelector('#score--0')
const score1El=document.querySelector('#score--1')
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new')
const btnRoll=document.querySelector('.btn--roll')
const btnHold=document.querySelector('.btn--hold');
const current0El=document.getElementById('current--0')
const current1El=document.getElementById('current--1')

const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1')

let score1=0;
let score2=0;
// starting condition

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden')

let activePlayer=0;
let currentPlayer=0;
//rolling the dice
 btnRoll.addEventListener('click',function(){
    const dice=Math.trunc(Math.random()*6)+1;

    //dispaly the dice
     
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`

    if(dice!==1){
        score1+=dice;

        document.getElementById(`current--${activePlayer}`).textContent=score1;
    }
     else{

        document.getElementById(`current--${activePlayer}`).textContent=0;
        score1=0;
        activePlayer=activePlayer===0?1:0;

        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
     }
         
       

    

 })
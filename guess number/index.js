let score=20;

let highscore=0;

const number=Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent=number;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value)
    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent='No number is selected'
    }
   else if(guess===number){
    document.querySelector('.message').textContent='correct guess hurray!';

      if(score>highscore){
        highscore=score;
      }
    
}
 
else if(guess<number){
    if(score>0){
    document.querySelector('.message').textContent='guess some higher number';
    score--;

    document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('.message').textContent='you lost continue..';
    }

}
else if(number<5){
    
        document.querySelector('.message').textContent='guess some lower number';
        score=score-1;
        document.querySelector('.score').textContent=score;
       
    }
    document.querySelector('.highscore').textContent=highscore;


})
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
// 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// // 5. destructuring object
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

 1 //challenge to read the player name and show the corresponding number of goal he scored

   
  const playersName=Object.entries(game.scored);
  const playerKeys=Object.keys(game.scored);

    // Property VALUES
    
    //1 
const values = Object.values(game.scored);
let i=1;
    for (const x of values) {
      console.log(`goal ${i++} is scored by ${x}`)
    }
   
//2   challenge to calculate odd average

   const OddValues=Object.values(game.odds)
   console.log(OddValues)

   let sum;
     for (const x of OddValues) {
      sum=+x;
      }
     console.log(`average is ${sum/3}`)
  
     //3 to print odd values in a formated way

     const teamName=[ game.team1,'draw',game.team2];
    for (let i =0;i<3;i++) {
      console.log(`Odd of  ${teamName[i]} is :${OddValues[i]}`)
      
    } 

    // Bonus 
    const scorers = {};
    for (const player of game.scored) {
      scorers[player] ? scorers[player]++ : (scorers[player] = 1);
    }
    console.log(scorers);
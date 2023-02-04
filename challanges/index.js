// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//       [
//         'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnarby',
//         'Lewandowski',
//       ],
//       [
//         'Burki',
//         'Schulz',
//         'Hummels',
//         'Akanji',
//         'Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze',
//       ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },
//   };
// // 1.
// // const [players1, players2] = game.players;
// // console.log(players1, players2);

// // // 2.
// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // // 3.
// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // // 4.
// // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// // // 5. destructuring object
// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;
// // console.log(team1, draw, team2);

// // // 6.
// // const printGoals = function (...players) {
// //   console.log(players);
// //   console.log(`${players.length} goals were scored`);
// // };

// // // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // // printGoals('Davies', 'Muller');
// // printGoals(...game.scored);

// // // 7.
// // team1 < team2 && console.log('Team 1 is more likely to win');
// // team1 > team2 && console.log('Team 2 is more likely to win');

//  1 //challenge to read the player name and show the corresponding number of goal he scored


//   const playersName=Object.entries(game.scored);
//   const playerKeys=Object.keys(game.scored);

//     // Property VALUES

//     //1 
// const values = Object.values(game.scored);
// let i=1;
//     for (const x of values) {
//       console.log(`goal ${i++} is scored by ${x}`)
//     }

// //2   challenge to calculate odd average

//    const OddValues=Object.values(game.odds)
//    console.log(OddValues)

//    let sum;
//      for (const x of OddValues) {
//       sum=+x;
//       }
//      console.log(`average is ${sum/3}`)

//      //3 to print odd values in a formated way

//      const teamName=[ game.team1,'draw',game.team2];
//     for (let i =0;i<3;i++) {
//       console.log(`Odd of  ${teamName[i]} is :${OddValues[i]}`)

//     } 

//     // Bonus 
//     const scorers = {};
//     for (const player of game.scored) {
//       scorers[player] ? scorers[player]++ : (scorers[player] = 1);
//     }
//     console.log(scorers);

// challenge 3 to iterate over a map

//  const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// 1 numbr task
//    const events=new Set(gameEvents.values())
//   console.log(events)
// //  2 number task
//    gameEvents.delete(64);
//    console.log(gameEvents)

// 3 number task

//    console.log(`an event happend on an average ,every ${90/gameEvents.size}minutes`)
//  // 4 to mark the events based on first half and second half of the game

//   for(const [key,value] of gameEvents){
//     if(key<45)
//      console.log(`event happend on first half is ${value} on ${key} minutes `)
//       if(key>45)
//        {
//         console.log(`event happend on  second half is ${value} on ${key} minutes `)
//        }
//   }


                    
                            //string challenge

              // function to  convert underscore to camelCase

// nikhil_naroliya to nikhilNaroliya
//  function tocameCase(str,i)
// {
// let lastname;
// let firstname;


// // console.log(str)
// index = str.indexOf('_')


// str.replace('_', '');

// lastname = str.slice(index + 1);

// firstname = str.slice(0, index);


// let upp = lastname[0].toUpperCase();
// lastname = upp + lastname.slice(1)

// let ans='';
//  let space=''.padStart(12,' ');
//  let starString=' '
//   for(let t=0;t<i+1;t++)
//    {
//      starString+='*';
//    }
// ans = firstname + lastname;
// console.log(ans.padEnd(20,' ')+starString)
// // console.log(ans + starString)


// }
//    const arr=['nikhil_naroliya','camel_case','raju_shrivastav','chotu_yadav']
//     for(let i=0;i<4;i++)
//      {
//              tocameCase(arr[i],i)
//      }


           // challenge to user input from user throgh prompt and  increase the index value based on user input
          
           
            // const poll={
            //   question:'what is your fav prog language ?',
            //   option:['0:js','1:python','2:cpp','3:rust'],

            //   answers:new Array(4).fill(0),

            //   registerNewAns(){
            //     const answer=Number(prompt(`${this.question}\n ${this.option.join('\n)}`
            //   }

            // }
            

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀
*/


// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

            // <-----coding challenge from arrays section------>


    // const Juliaowner1=[1,2,2,5,3,5,4];
    // const Kateowner2=[2,2,5,5,1,6,7];

    //  const Juliaowner2=Juliaowner1;  /// created a copy
      
    //  console.log(Juliaowner1);
    //  Juliaowner2.splice(0,1)   // after 0 delete 1 element
    //  Juliaowner2.splice(-2);

    //  console.log(Juliaowner2);

    //   function checkDogsAge(Juliaowner1,Kateowner2)
    //  {
    //         Juliaowner2.forEach(element => {
    //            if(element>3)
    //             {
    //               console.log('the dog is adult')
    //             }
    //             else
    //              console.log('the dog is still a  puppy')
    //             });

    //            console.log('--------For kate----------') 
    //            Kateowner2.forEach(element => {
    //             if(element>3)
    //              {
    //                console.log('the dog is adult')
    //              }
    //              else
    //               console.log('the dog is still a  puppy')
    //              });
    //  }

    //  checkDogsAge(Juliaowner2,Kateowner2);

    //   <-----------array challenge dog ->human age ------------->
       
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
    const calcAverageHumanAge = function (ages) {
      const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
      const adults = humanAges.filter(age => age >= 18);
      console.log(humanAges);
      console.log(adults);
      // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
      const average = adults.reduce(
        (acc, age, i, arr) => acc + age / arr.length,
        0
      );
      // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5
      return average;
    };
    const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
    const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
    console.log(avg1, avg2);

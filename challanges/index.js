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


// let Juliaowner1=[1,2,2,5,3,5,4];
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
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);
//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );
//   // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);



// <---------------challenge number 4---------------->
//                      1


//     let Juliaowner1=[1,2,2,5,3,5,4];
//     const Kateowner2=[2,2,5,9,1,6,7];

//          Juliaowner1=Juliaowner1.map(ele=>(ele**0.75*28)/1000)
//           console.log(Juliaowner1)

//           //                  2

//           //let say sarah dog is 9 one and its eating lot

//            // Method (return element > 0).
//     var found = Kateowner2.find(function (element) {
//       return element ==9;
//   });

//    console.log(found)

//----------------------NEOG PRACTICE--------------
//SET-1

// -------ques -1------

//  function oldEnough(num){
//     if(num>18)console.log(`eligible to vote`)
//     else 
//     console.log(`not eligible to vote`)
//  }
//  console.log(oldEnough(16));
//  console.log(oldEnough(45))

//----------ques2----------

// function isGreater(num1,num2)
// {
//    num1>num2?console.log(`${num1} is greater`):console.log(`${num2} is greater`)

// }
// isGreater(2,3)

//-----------ques 3---------

//    function pos_neg(num){
//     if(num>0)console.log(`it  is +ve`)
//     else
//     console.log(`it is -ve`);
//    }

//    pos_neg(-3)

// -------------ques 4---------
// function even_odd(num)
//  {
//     if(num%2==0)
//      console.log(` it is even `);
//      else 
//       console.log(` it  is odd `)
//  }
//   even_odd(34)

//-------------ques 5--------------

//   function Contains_a_A(str)
//    {
//       if(str.includes('a'))
//       { console.log(' it is having a ');
//        if(str.includes('A'))
//        console.log('it is having A')
//    }
//        else
//        console.log('it does not contain a || A')

//    }
//    Contains_a_A('neog')

//---------------------ques 6--------------

//  const str='nikhil';
//  console.log(str.length)

//   const getLenght=str=>

//   {  if(str.length>5)
//      console.log('greater than 5')
//       else
//        console.log('lesser than 5')
//   }
//   getLenght('nik')

//---------------ques --------------------

// const isBetWeen_1_to_10=num=>{
//     if(num>=1 && num<=10)
//      {
//         console.log(`${num} is between 1 to 10`);

//      }
//      else console.log(num+' is not between 1 to 10')
// }
// isBetWeen_1_to_10(33)

//---------------ques 8------------

//    function Contains_a_A(str)
//        {
//           if(str.includes('hello'))
//           { console.log(' it is having  ');
//            if(str.includes('Hello'))
//            console.log('it is having ')
//        }
//            else
//            console.log('it does not contain ')

//        }
//        Contains_a_A('hello')

// -------------ques 9------------


//        function multiple_of_3(num)
//  {
//     if(num%3==0)
//      console.log(` it is multiple of 3 `);
//      else 
//       console.log(` it  is not multiple of 3 `)
//  }
//   multiple_of_3(33)


//-------------ques 10--------------

//  const multiply_By_10=num=>{
//    return  num*10

//  }
//  console.log(multiply_By_10(3));

//--------------ques 11------------

// const product = {
//     title: "iPhone",
//     price: 5999,
//     description: "The iPhone is a smartphone developed by Apple"
//   }
//   console.log(product.title); // iPhone
//   console.log(product.price); // 999
//   console.log(product.description);

//------------ques 12----------------

//    book={
//         author:"nikhil",
//         title:"the snake crucified",
//         page:101,
//     }
//     function getBookDetails(obj)
//      {
//         if(obj.page>100)
//          console.log('Having pages greater than 100')
//          else console.log('having less than 100 pages')
//      }
//      getBookDetails(book)

// --------------------ques 13------------

                        // person = {
                        //     name: "nikhil",
                        //     occupation: "writer",
                        //     age: 23,

                        // }
                        // function changeOccupation(obj, newOccupation) {
                        //     obj.occupation = newOccupation;

                        // }

                        // console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
                        // changeOccupation(person, 'Product Manager');
                        // console.log(person); 
                        
//------------------ques 14-------------------
// const numbers = [1, 2, 3];
// // Your ES6 code here
//  const [num1,num2,num3]=numbers


// console.log(num1); // logs 1 to the console
// console.log(num2); // logs 2 to the console
// console.log(num3); // logs 3 to the console

//  --------------------ques 15--------------

// const defaultParamsFunc=(a, b, c=4)=> {

//     return a * b * c;
// 	};
// 	console.log(defaultParamsFunc(3, 1)); // 12
// 	console.log(defaultParamsFunc(3, 10)); // 120

             //-------------------set 2-----------------

     // -------------ques 1----------   
        //    Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30.

    // const person={
    //     name:'nikhil',
    //     age:30,
    // }

    //  person.age=23;
    //  console.log(person.age)

    //--------------ques 2----------
    // Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)

//     function isSportsCar(obj)
//      {
//         if(obj.horsepower>300)
//         return console.log(` ${obj.make} is a sports car`)
//         else
//        return console.log(` ${obj.make} is  not  a sports car`)
         
//      }


// const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
// const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };
// isSportsCar(car1); // true
// isSportsCar(car2); // false

     //-----------------ques 3-------
    // Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than or equal to 21. Otherwise, it should return false.
     
//Your ES6 code here

//  function isEligible(obj,additionalAge)
//   {
//     if(obj.age+additionalAge>21)
//       return true;
//       else
//       return false;
//   }
// const person1 = { name: 'Ajay', age: 20 };
// console.log(isEligible(person1, 1)); // false
// console.log(isEligible(person1, 2)); // true

//-----------------ques 4---------------
  //Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000)
                // function getViews(blog){
                //     if(blog.views>1000)return true;

                //     return false
                // }
                
                // const blog1 = {title: 'How to Learn JavaScript', author: 'John Doe', views: 1430};
                // const blog2 = {title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500};
                // console.log(getViews(blog1)); // true
                // console.log(getViews(blog2)); // false

       //---------------ques 5-------------------
    //    Swap the values of two variables using array destructuring.

//        let a = 1;
// let b = 2;
// // Your ES6 Code here
// [a,b]=[b,a]


// console.log(a) // 2
// console.log(b) // 1

 //----------------------------ques 6--------------
    // Convert this function into ES6 with least amount of characters.
    // function add(a = 30, b = 0) {
// 	  return a + b;
// 	}

// console.log(add(2, 3));

//                            solution--------------------
// const add=(a = 30, b = 0) => a + b;
  

// console.log(add(2, 3));

// -----------------ques 7--------------

// Write an ES6 function combineObjects with least amount of characters which merges two objects into one.

// Your ES6 function here

// function combineObjects(ob1,ob2)
//  {
//    const combineObj={...ob1,...ob2}
//    return combineObj
//  }

// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4};
// const combinedObj = combineObjects(obj1, obj2);
// console.log(combinedObj);
// // Expected Output: {a: 1, b: 2, c: 3, d: 4}

//----------------------ques 8-----------------
// Convert the function getData, into an ES6 function with least amount of characters. 

// function getData(person) {
//     const name = person.name;
// 		const address = person.address.city
//     console.log(name); // John Doe
//     console.log(address); // New York
// }

// const person = {
//   name: 'John Doe',
//   address: {
//     city: 'New York',
//     state: 'NY',
//   },
// };
// getData(person);

//           --sol-- 

// const getData=(person)=> {
//     [ name1,address] =[ person.name,person.address.city];
	
//     console.log(`${name1}\n${address}`); // John Doe
//                                         // New York
// }

// const person = {
//   name: 'John Doe',
//   address: {
//     city: 'New York',
//     state: 'NY',
//   },
// };
// getData(person);


//          --ques 9------ 

// 9. Write a function that takes a string as input and returns the string in all uppercase letters.

// Youe ES6 code here

// function stringToUpperCase(str)
//  {
//     return str.toUpperCase()
//  }

// console.log(stringToUpperCase("hello")); // "HELLO"

//----------------------ques 10--------------
// Write a function that takes two strings as input and concatenates them together.

// Your ES6 code here

// const concatenateStrings=(str1,str2)=>str1+str2;

// console.log(concatenateStrings("hello", "world")); // "helloworld"

//----------------------ques 11---------------
// Write a function that takes an array and returns the last element in the array.

// Your ES6 code here

// const lastElement=(arr=[])=>{
//     return arr[arr.length-1]
// }
// console.log(lastElement([1, 2, 3, 4, 5])); // 5


// -----------------ques 12----------
// Write a function that takes an array and returns the first element of the array.

// Your ES6 code here
// const firstElement=(arr=[])=>{
//     return arr[0]
// }
// console.log(firstElement([1, 2, 3, 4, 5])); // 1


// -----------------ques 13------------
// Write a function that takes an array and a number and returns the sum of first element and the number.

// Your ES6 code here
        //  const addingNumber=(arr=[],num)=>arr[0]+num
        //   console.log(addingNumber([12,12,42,4],234))

 
        // ----------------ques 14--------------

        //Write a function that takes an array and returns the sum of first and last element.
        
        // Your ES6 code here

        //  const sumFirstAndLast=(arr=[])=>arr[0]+arr[arr.length-1];
        // console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9

        // --------------------ques 15--------------
        // Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.

        // Your ES6 code here

// const personInfo=(obj)=>`${obj.name } is ${obj.age} yrs old `


// const person1 = { name: 'John', age: 25, occupation: 'Software Engineer' }
// const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }
// console.log(personInfo(person1)) // Expected output: "John is 25 years old."
// console.log(personInfo(person2)) // Expected output: "Jane is 45 years old."

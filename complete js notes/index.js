
// const arr=[2,3,4];
// const a=arr[0];
// const b=arr[1];
// const c=arr[2];

// // console.log(a,b,c)

//                    // destructuring
//  const [x,y,z]=arr;
//  console.log(x,y,z);

//  //swaping using destructuring 
//  //can assign directly to new variables from array

//  let [X,,Y]= arr;

//  [Y,X]=[X,Y];
//  console.log(X,Y);

//                   // nested array

//  const nested=[2,4,[5,6]];

//  const [i,,j]=nested;

//  console.log(i,j);

//  // indorder to access individual values
//  //we should use destructuring in destructuring or else it will return array

//  const [t,,[l,k]]=nested
//  console.log(t,l,k);

//  // assigning default values

//  const [p=1,q=2,r=3]=[2343,3434,];
//  console.log(p,q,r);
//  // here 3 will be used as a default value

                             // coding challenge for functions 

// const calAverage=(score1,score2,score3)=>{
//     return (score1+score2+score3)/3;
// }
// average1=calAverage(44,23,71);
// average2=calAverage(65,54,49);
//   function checkWinner(average1,average2){
//     if(average1>average2){
//         console.log(`kolas win by ${average1 } vs ${average2}`);
//     }
//     else
//     console.log(`dolphins  win by ${average1 } vs ${average2}`);
//   }
// checkWinner(average1,average2)

              //arrays 

                        //    const friends=['brajesh','anil','nikhil'];
                        //    console.log(friends)

                        //    console.log("array lenght is "+friends.length);

                        //    friends[2]='raju '

                        //    console.log("updated array "+ friends);


         // array methods 

                        // const array=['sonu','monu'];

                        // array.unshift('nikhil') // to addd the element at the start
                        //  array.shift() // to remove the first element

                        //  array.push('tahil na') // to add at last

                        //  console.log(array.includes('sonu'))// to cheeck the array element whether its in the array or not this function return boolean value

                        //  console.log(array.indexOf('monu')) // return the index value
          //coding challenge

                        //  function calTip(number){
                        //     if(number>50 && number<300)
                        //      {
                        //         return (number*15)/100;
                        //      }
                        //      else
                        //      return (number*20)/100;
                        //  }
                        //  console.log(calTip(100));

                        //  const bills=[100,200,300];
                        //  const tips=[];
                        //   for(let i=0;i<bills.length;i++)
                           
                        //  tips.push(calTip(bills[i]));

                        //  console.log(tips);

                        //  const total=[];
                        //   for(let i=0;i<bills.length;i++)
                        //   total.push(bills[i]+tips[i])

                        //   console.log(total);

            // objects
                          // it stores the values in key value pair
                          // if  we want to store the values in some unstructured way we should use objects 
             //object example
                          // const object={
                          //   firstname:'nikhil',
                          //   age:22,
                          //   lastname:'naroliya',
                          //   friends:['sonu','monu'],
                          //   calcAge:function(){
                          //       console.log('the age is '+this.age);
                          //   }
                          // }
                        //   console.log(object.firstname)

            // bracket and dot notation
                         // in order to access the object property whicn uses some calculations we should use [] notation 
                         // while for simply accessing the property we should use . notation 

                         // [ iske andar ' '<= isse key ko pass karnege ]

                //example
                        //    const nameKey='name';
                        //    console.log(object['first'+nameKey]);
                        
                        //kisi value ko object ke expression me dalkar bhi values ko search kiya ja sakta hai
                 // example

                        // const ask=prompt('what do you want to know from object which includes firstname and lastname')
                        // if(object[ask]){
                        //     console.log('you asked about '+object[ask])
                        // }
                        // else
                        // {
                        //     console.log('you havent asked right question')
                        // }
                        
                 //new key assignment
                 //example     
                          // object.location='rajgarh';
                        //   console.log(object);

                          //challenge

                    // console.log(`nikhil has ${object.friends.length} friends and his best frient is ${object.friends[0]}`)      
            //notes 
                    // you can also assign function to the object and can use object values inside the function using this keyword

             //example
                  
                        //   object.calcAge();
                        //  object.calcAge()


       // coding challenge on objects 3
                
            //     var markMiller={
            //         firstname:'Mark',
            //         lastname:'Miller',
            //         mass:44,
            //         height:6,
            //          BMI:function(){
            //             return this.mass/(this.height*this.height);
            //         }
            //     }    
                   
                    
            //     var johnMiller={
            //         firstname:'john',
            //         lastname:'Miller',
            //         mass:47,
            //         height:5,
            //         BMI:function(){
            //             return this.mass/(this.height*this.height);
            //         }
                    
            //     } 
            //  let markBMI=markMiller.BMI();
            //  let johnBMI=johnMiller.BMI();
              
            //  let result;
            //  if(markBMI>johnBMI)
            //   {
            //     result=markMiller;
            //   }
            //   else
            //   result=johnMiller;

            //   console.log(result.firstname+result.lastname);

       //this keyword in js
       
       //in case of objects if we are using arrow functions insied the obj then this keyword will refer to its parent 

                       //    // example
                       //   obj={
                       //    na : "nikhil",
                       //    greet:()=>{
                       //     console.log(this.na)
                       //    }
                       //  }

                       //  obj.greet()

                       //  // result is undefined

        // destructuring objects 
        
        const restaurant = {

              name: 'Classico Italiano',
              location: ['Via Angelo', 'Tavanti 23', 'Firenze, Italy'],
              categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
              starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
              mainMenu: ['Pizza', 'Pasta', 'Risotto'],
            
              // ES6 enhanced object literals
              
            
              order(starterIndex, mainIndex) {
                return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
              },
              orderDelivery:function({starterINdex,mainIndex,time,address}){
                     console.log(`order received ${this.starterMenu[starterINdex]} and ${this.mainMenu[mainIndex]}will be delivered on ${address} at ${time}`);
              }
         };


       //     // destructuring example
       //     const {name,mainMenu,categories}=restaurant;
       //     console.log(name,mainMenu,categories);
           
       //      //can set default values while destructuring 

       //      //ex
       //          const {menu=[],starterMenu=[],starters=[]}=restaurant
       //          console.log(menu,starters,starterMenu)

       //          //note  we can also re name the existing name 
       //          //ex naming starterMenu as sM
       //          const {starterMenu:sM=[]}=restaurant
       //          console.log(sM)

       //     // mutating variables
                        
       //                   let a=111
       //                   let b=100
       //                   const object={ a:'nikhil',b:23};

       //                   ({a,b}=object)

       //                   console.log(a,b);
                           
           //passing an object as a parameter in a function
           
                     //       restaurant.orderDelivery({
                     //       time:'22:20',
                     //       address:'talab mohalla',
                     //       mainIndex:2,
                     //       starterINdex:2,
                     //      })
  

                     //looping over object
          
                    //  const properties=Object.keys(restaurant.location);
                    //  console.log(properties)

                    //  let openLocation=`we are available at ${properties.length} numbers`

                    //  for(const city of properties)
                    //   {
                    //     openLocation+=`${city},`;
                    //   }
                    //   console.log(openLocation)

                    //   const entries=Object.entries(restaurant.mainMenu)
                       
                    //   for(const x of entries)
                    //    {
                    //     console.log(x)
                    //    }

//           map 

                  //   const res=new Map();
                  //   res.set('name','nikhil kumar naroliya');
                  //   res.set(1,'iam the better version of myself')
                  //   console.log(res.get('name'))
                  //   console.log(res.get(1))

                  //   res.set(true,'iam happier')
                  //   const arr=[1,2]
                  //   res.set(arr,'this is an array')
                    
                  //  console.log(res.get(arr))

                   // to clear the map elements we use clear

                  //  res.clear()
                  //  console.log(res)

                   //  to delete particular element in map we use  delete 
                  // res.delete('pas the key ')
                  // console.log(res)

            //closer look at functions
                  // higher look at functions
                  // str=' '
                  // const oneWord=function(str){
                  // return str.replace(/ /g,'').toLowerCase();// replcing all the spce with non space

                  // };
                  //  const upperFirstWord=function(str){
                  //   const[first, ...others]=str.split(' ');
                  //   return[first.toUpperCase(),...others].join(' ')
                  //  }
                  //  console.log(upperFirstWord('nikhil kumar naroliya'))

                  //  const transformer=function(str,fn){
                  //   return `transformed string is =${fn(str)}`
                  //  }
                  //  console.log(transformer('nikhil Kumar Naroliya',oneWord))
       
                  //  //note yaha par call back functionn is oneWord hai

    // second parameter for call back function 
             
            //  const greet=function(greeting){
            //   return function(name){
            //     console.log(`${greeting} ${name}`)
            //   }
            //  }
            //  greet('hi')('Nikhil') // here the second parameter is for callback function

 // call apply and bind method 
       // inorder to direct the this keyword to a particular object we use
        //call apply and bind methods or else js wont understand where to point the this keyword  

  //  note     -> kisi dusre object se agar aap kisi aur object ko call kar rahe ho using the call method to dono  object ke property name same hone chahiye
    
                        // obj1={
                        //   name:'nikhil', 
                        //   work(s){
                        //      console.log(`a software engineer ${s}` )
                        //   }
                        // }
                        // obj2={
                        //   name:'chandan',
                        // }
                        // const work=obj1.work;      // dont apply () while calling method from another                       object
                        //   // calling work taking referece of obj2 with the help of call method 
                        //  work.call(obj2,' nasfsdsf')

             //apply method 
             // it is same as call method just it takes array list with refereced object           
// const numbers = [10, 5,20, 8, 1, 7]
// function myFun (arr){
//     let len = arr.length;
//     let min = Infinity;
//     while(len--){
//         if(arr[len] < min){
//           min = arr[len];
//         }

//     }
//     return min;
// }
// console.log(myFun(numbers));

// const fruits = ["Banana", "Orange", "Apple", "Mango","Kiwi"];
// console.log(fruits);

//  fruits.copyWithin(2,0,3);
// console.log(fruits);

// let letters = ["A","B","C","D","E"];
// let test= '';

// // for(let x of letters.entries()){
// //     test+= x + " ";
// // }
// //console.log(test);
// console.log(Object.entries(letters));

/*
//????????=============== .every ===
==> array.every(function(currentValue, index, arr), thisValue)
const ages = [32, 33, 16, 40];
//let myTry = ages.every(x=> x > 10);<==>//console.log( myTry);

function myF(age){
    return age > 18;
}
let myT = ages.every(myF);
console.log(myT);
*/
//console.log(t);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let tt = fruits.toSpliced(1,1,"MIM")
// // console.log(fruits.slice(4));
// // console.log(fruits.slice(0,2));
// // console.log(fruits);
// console.log(fruits.fill("MIM",1,3));

/*********    
             <========>
  
    const words = ["hello", "world"];
    let result = words.flatMap(word => word.split(' '));
    //console.log(result);
    const arr = [1, 2, 3];
    let rr= arr.flatMap(x=> [x,x*2]);
    //console.log(rr);
            <========>
    const numbers = [1, 2, 3, null, 4,0,undefined];
            let result = numbers.flatMap(num =>num ? [num] : []);
            console.log(result);

            <========>
        const nested = [[1], [2, 3], [[4]]];
          let result = nested.flatMap(x => x)  
          console.log(result);
 const arr = [1, 2, 3];   
 let result = arr.map(x=>x,x*2).flat()
 console.log(result);
 
            <========>
            <========>
          
            <========>
            <========>
********/

// let text = "ABCDEFG"
// const myArr = Array.from(text);
// console.log(myArr instanceof Array);
// console.log(myArr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let i = fruits.includes("Banana", 0);
// console.log(i)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = Array.isArray(fruits)
// console.log(result);
// console.log(typeof fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join("");
// console.log(text);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.keys();
// let txt = '';
// for(let i of text ){
//     txt+= i;

// }
// console.log(txt);

// const numbers = [65, 44, 12,3, 4];
// numbers.forEach(myFunction);
// function myFunction(item,index,arr){
//     console.log('Item:'+ item + ' ' + "Index:" + index + ' ' + "arr="+' '+arr);

// }

// let test = numbers.forEach((item,index,arr)=>{
//     console.log('Item:'+ item + ' ' + "Index:" + index + ' ' + "arr="+' '+arr);
// })

//console.log(numbers.includes(12,0))

//=====
/* const persons = [
            {firstname : "Malcom", lastname: "Reynolds"},
            {firstname : "Kaylee", lastname: "Frye"},
            {firstname : "Jayne", lastname: "Cobb"}
          ];
          
          console.log(persons.map(getFullName));
          
          function getFullName(item) {
            return [item.firstname,item.lastname].join(' ');
          } */

// console.log(['e',"r","a", "b" ].findIndex((x)=> x==='a')); // 1

// <========>
/* console.log(Array.from("hello")); // ["h", "e", "l", "l", "o"]
        console.log(Array.from("hello").join('')); // hello
 */

// ?<========>  ProType Custome Method=====
/* Array.prototype.myCustomeMathod = function(){
                return this.map(x => x**2)
            }
            let num = [2,3,4];
            console.log(num.myCustomeMathod());

            let myCon = (x)=>{
                console.log(x);
                
            }
            myCon(num) 
        */

//?=====Reduce Method
const numbers = [15.5, 2.3, 1.1, 4.7];

function res(total, sum) {
  return total + sum;
}
//console.log(numbers.reduce(res,0));
let total = numbers.reduce(
  (accumulator, currvalue) => accumulator + currvalue,
  0
);
// console.log(total);

/* const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount); */

// const fruitCount = fruits.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// }, {});

// console.log(fruitCount);

// ?? .With Method

// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");
// console.log(myMonths);
// let MM = months.splice(4,"May");
// console.log(MM)

/*==================
 //? Math.floor()
console.log(Math.floor(3.4))//3
console.log(Math.floor(3.5));//3
 
//? Math.ceil()
console.log(Math.ceil(4.5));//5
console.log(Math.ceil(4.4))//5

//? Math.Round()
console.log(Math.trunc(4.5));///4
console.log(Math.trunc(4.4))//4 
================
*/



console.log(Math.trunc(-3.4));
console.log(Math.trunc(-3.5));













////?==Question 1

/*            const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
            const fruitCount = fruits.reduce((acc, fruit) => {
              acc[fruit] = (acc[fruit] || 0) + 1;
              return acc;
            }, {});

            console.log(fruitCount);
            // আউটপুট: { apple: 3, banana: 2, orange: 1 }
 */

/*       const nestedArray = [
          [1, 2],
          [3, 4],
          [5, 6],
        ];
        const flattenedArray = nestedArray.reduce(
          (acc, currentValue) => acc.concat(currentValue),
          []
        );

        console.log(flattenedArray);
 */

        /* 

const numbers = [3, 5, 7, 2, 8];
const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
console.log(max); // Output: 8


const str = 'hello';
const reversed = str.split('').reduce((acc, char) => char + acc, '');
console.log(reversed); // Output: 'olleh'


        
        */

let arrayLike = { 0: "a", 1: "b", length: 2 };
let realArray = Array.from(arrayLike);

console.log(realArray);

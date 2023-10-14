var numbers = [3, 56, 2, 48, 5];
//here we are going to study many thing

//.....Map -Create a new array by doing something with each item in an array.
// {
//method 1
// function double(x) {
//   return x * 2;
// }
//  const newNumbers=numbers.map(double);    /*here double means double(x).. map has property like for loop it will
//                          call functioon double by passing each time one value of array numbers
//                          and each time rreturn value will be stored in newNumbers*/
// console.log(newNumbers); //it will print all doubled value in console
//method 2
// const newNumbers = numbers.map(function double(x) {
//   return x * 2;
// });
//  console.log(newNumbers);
//  }

//.....do same without using map(usinf for each loop)
//  {

//   var newNumbers = [];
// function double(x) {
//    newNumbers.push(x * 2);
//   }
// numbers.forEach(double);
// console.log(newNumbers);
//method 2
//   var newNumbers = [];
// function double(x) {
//    newNumbers.push(x * 2);
//   }
// numbers.forEach(function double(x) {
//   newNumbers.push(x * 2);
//  });
// console.log(newNumbers);
//method 3
// var newNumbers = [];
// function double(x) {
//   newNumbers.push(x * 2);
// }
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });
// console.log(newNumbers);

// }

//Filter -ye select which number is greater than 10....... Create a new array by keeping the items that return true.

{
  //method 1
  // const newNumbers = numbers.filter(function(num) {
  //   return num < 10;
  // });
  // console.log(newNumbers);
  //method 2
  // var newNumbers = [];
  // numbers.forEach(function(num) {
  //   if (num < 10) {
  //     newNumbers.push(num);
  //   }
  // })
  // console.log(newNumbers);
}

//Reduce - Accumulate a value by doing something to each item in an array.
{
  //method 1
  // var newNumbers = numbers.reduce(function (accumulator, currentNumber) {
  //   //here initial value of accumualtor is 3 and of currentvalue is 56
  //     return accumulator + currentNumber;
  // });
  // console.log(newNumbers);
  //method 2
  // var newNumber = 0;
  // numbers.forEach(function (currentNumber) {
  //   newNumber += currentNumber
  // })
}

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

// console.log(newNumber);

//Challenge Solution
import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);

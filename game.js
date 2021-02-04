


import { commonWords } from './constants'
// console.log(commonWords)


const threeOrMoreLetters = commonWords.filter (function(word){
    return word.length >= 3;
})

/// get a random array index number to generate each new word
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
// round each index number to avoid decimals


let indexNumber = Math.round(getRandomArbitrary(0, 76))

// // display random word in HTML
// let clickCount = 0
// function handleBtnClick(e)
// if (clickCount >= 6) {
//     return
// }
//     clickCount++ ?
//     // console.log('clicked')


document.querySelector('.secretWord').innerHTML = threeOrMoreLetters[indexNumber]

// THOMAS CODE PEN -- select the DOM element
const btnContainer = document.querySelector('#btns')
// Declare some letters
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'
, 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// make a string of html
const htmlString = letters.map(function (item) {
  return `<button>${item}</button>`
}).join('')
// insert that string into buttonContainer element
btnContainer.innerHTML = htmlString
// the logic of the game...
function handleClick(e) {
  // the button
  console.log(e.target)
  // the text of the button
  console.log(e.target.innerHTML)
}
// listen to the click of the div and handle when the user clicks
btnContainer.addEventListener('click', handleClick)



// The hardest part of this entire assignment is figuring out how to either place a dash or not.

// My advice and hint...
// Ask yourself - how can I track what guesses a user made?
// --------- 

// document.getElementById('btns')....or ..... 
// Hangman.prototype.askLetter = function (letter) {
//     if (this.letters.indexOf(letter) > -1) {
//       return;
//     }
//     this.letters.push(letter);
//     var correct = this.secretWord.indexOf(letter) > -1;
//     if (!correct) {
//       this.errorsLeft -= 1;
//     }
//     return correct;
//   };

// How can I use this thing that tracks the guesses to put either a letter or a dash?
// You will need to do dashes in two different ways...
// --------
//IF STATEMENT?
// When the page loads...

// When the user guesses correctly...

// -----------------THIS CRAP IS NOT IT---------------------------------
// function replaceLetter(underscores){
//     //Replace each letter of word with '_'
//     for (var i = 0; i <underscores.length; i++){
//       let char = document.createElement("span");
//       char.className = "char";
      
//       //Do not count a space as a letter
//       if (threeOrMoreLetters[i] === " "){
//         char.innerHTML = " ";
//       } else {
//         char.innerHTML = "_";
//         wordLength++;
//       }
//       secretWord.append(char);
//     }
// }


    // const btn = document.querySelector('#myBtn')

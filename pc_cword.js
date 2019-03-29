"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Dajah Medina
   Date:   3.28.19
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/
var allLetters;
var currentLetters;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection;

window.onload = init;

function init() {
      allLetters = document.querySelectorAll("table#corssword");
      currentLetters[i].onclick = allLetters;
      var acrossID = ("data-clue-a");
      var downID = ("data-clue-d");
      acrossClue = document.getElementById("acrossID");
      downClue = document.getElementById("downId");
}


function formatPuzzle(puzzleLetter) {
      for (var i = 0; i < allLetters.length; i++) {
            style.backgroundColor = "";
      }
      acrossClue[i].style.color === "";
      downClue[i].style.color === "";
}

if (currentLetters.)


      /*====================================================*/



function getChar(keyNum) {
      return String.fromCharCode(keyNum);
}
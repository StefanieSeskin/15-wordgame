


<!-- # Wordgame

## Description

You know the word-guessing game hangman? Well that's what you'll be building with this assignment.

Basically, it works like this:

You get 5 incorrect guesses.  Life decreases by one -->

PAGE HAS BUTTONS CONTAINING EACH LETTER OF THE ALPHABET
SIX STARS ARE DISPLAYED ARE ON THE PAGE (Full life)
(HIDDEN "RESET" BUTTON)

- The app starts by choosing a random word
Underscores appear on page - # of underscores = number of letters in random word

- The player can guess a single letter at a time
by clicking a button

Letter in word?  Update underscore with letter chosen
THEY ENTER NEXT LETTER

OR 

Letter NOT in the word?  Remove a star from page
THEY ENTER NEXT LETTER


- The player can keep guessing 

If 6 wrong guesses, game ends, USER NOTIFIED "GAME OVER"

When all letters are filled out, USER NOTIFIED "YOU WIN"

RESET BUTTON APPEARS ON PAGE?

- The app should indicate when the player has won or lost


Please feel free to get fancy with it!

## Objectives

After completing this assignment, you should…

- Understand functions, conditionals, loops, arrays
- Be able to properly sequence JavaScript statements
- Be able to change the DOM based on application state (win/loss, valid/invalid guess)

### to get started (install the packages you need (parcel for instance)

```bash
npm install
```

### to start the server (localhost:1234 or whatever it is...)

```bash
npm run start
```

### to stop the node server

```bash
control c
```

## Details

### Instructions

- Create your project
- import the common words into whatever file you need to use it (IE game.js or index.js)

### Example

Say your game logic has chosen the word: "hello".

You should display:

    _ _ _ _ _

A visual indication (such as an underscore) for each letter in the word.

You should also display the number of turns remaining:

    Turns: 8

Next, the user guesses: a

You should decrement the number of turns remaining:

    Turns: 7

Next, the user guesses: l

You should display:

    _ _ l l _

And so forth.

### Deliverables

- An app containing at least:
  - `index.html`
  - css
  - One or more JavaScript files

## Normal Mode

The game should:

- Choose a random word _of 3 letters or more_ from the `commonWords` array
- Allow the user to guess one letter at a time
- When the user runs out of turns, show a losing screen
- When the user guesses all of the letters in the word, show a winning screen

## Hard Mode

Normal mode plus the following:

- Make it look good!
- Don't let the user guess the same letter more than once
- Display all guesses on screen so the user knows what letters he/she has guessed already

## Nightmare Mode

Hard mode plus any or all of the following:

- Instead of showing the number of turns, you could show a health meter
- Try playing a sound when the user guesses incorrectly
- When the player loses, play a video or show some funny losing animation

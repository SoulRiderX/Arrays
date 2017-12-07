'use strict';

function andrewAboutGame () {

  var user = prompt('what is your name?');
  console.log('users answer:', user);

  alert('Nice to meet ya, ' + user);

  var gameOne = prompt('do I play cardfight vanguard? Y or N only.');
  console.log('gameOne:', gameOne);

  gameOne.toUpperCase();

  if (gameOne === 'Y' || gameOne === 'y') {
    alert('Sweet!');
  } else {
    alert('Not a problem.');
  }

  var gameTwo = prompt('do I play yugioh? Y or N only.');
  console.log('gameTwo:', gameTwo);

  gameTwo.toUpperCase();

  if (gameTwo === 'Y' || gameTwo === 'y') {
    alert('Nice!');
  } else {
    alert('Oh well.');
  }

  var gameThree = prompt('do I play pokemon? Y or N only.');
  console.log('gameThree:', gameThree);

  gameThree.toUpperCase();

  if (gameThree === 'Y' || gameThree === 'y') {
    alert('Great!');
  } else {
    alert('ok.');
  }

  var gameFour = prompt('do I play magic? Y or N only.');
  console.log('gameFour:', gameFour);

  gameFour.toUpperCase();

  if (gameFour === 'Y' || gameFour === 'y') {
    alert('Awesome!');
  } else {
    alert('Meh. Whatever.');
  }

  var gameFive = prompt('do you I buddyfight? Y or N only.');
  console.log('gameFive:', gameFive);

  gameFive.toUpperCase();

  if (gameFive === 'Y' || gameFive === 'y') {
    alert('good!');
  } else {
    alert('K then.');
  }

}

andrewAboutGame ();

function favThings () {

  var fav = ['chess', 'kittens', 'puppies', 'vanguard', 'coding'];

  var answer = prompt('what is one of my fav things?');
  var flag;

  for (var i = 0; i < fav.length; i++) {
    console.log('each item at each iteration:', fav[i]);

    if (answer === fav[i]) {
      alert('Well done!');
      flag = true;
      break;
    }
  }

  if (!flag) {
    alert('nope wrong');
  }

  var number;
  var counter = 1;

  while (number !== 81) {
    number = parseInt(prompt('what is my fav number?'));

    if (number < 81) {
      alert('sorry too low');
      counter++;
    } else if (number > 81)
      alert('sorry too high');
  }

  console.log('counter:', counter);

}

favThings ();

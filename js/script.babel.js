var score = 0;

'use strict';

var cardsArray = [{
  'name': 'img1',
  'img': 'images/img1.png'
}, {
  'name': 'img2',
  'img': 'images/img2.png'
}, {
  'name': 'img3',
  'img': 'images/img3.png'
}, {
  'name': 'img4',
  'img': 'images/img4.png'
}, {
  'name': 'img5',
  'img': 'images/img5.png'
}, {
  'name': 'img6',
  'img': 'images/img6.png'
}, {
  'name': 'img7',
  'img': 'images/img7.png'
}, {
  'name': 'img8',
  'img': 'images/img8.png'
 }, {
   'name': 'img9',
   'img': 'images/img9.png'
 }, {
   'name': 'img10',
   'img': 'images/img10.png'
 }, {
   'name': 'img11',
   'img': 'images/img11.png'
 }, {
   'name': 'img12',
   'img': 'images/img12.png'
}, {
  'name': 'img13',
  'img': 'images/img13.png'
}, {
  'name': 'img14',
  'img': 'images/img14.png'
}, {
  'name': 'img15',
  'img': 'images/img15.png'
}, {
  'name': 'img16',
  'img': 'images/img16.png'
}, {
  'name': 'img17',
  'img': 'images/img17.png'
}, {
  'name': 'img18',
  'img': 'images/img18.png'
}, {
  'name': 'img19',
  'img': 'images/img19.png'
}, {
  'name': 'img20',
  'img': 'images/img20.png'
}, {
  'name': 'img21',
  'img': 'images/img21.png'
}];

var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;

var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
  var name = item.name,
      img = item.img;


  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var match = function match() {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
};

var resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', function (event) {

  var clicked = event.target;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        score = score + 1;
        console.log("The score is " + score);
        document.getElementById('score').innerHTML = score;
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});

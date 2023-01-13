var searchBar = document.getElementById('searchBar');
var tcgCardSets = document.getElementById('cardSets');
var pokeContainer = document.querySelector('#pokeResults');


var pokeBaseUrl = `https://pokeapi.co/api/v2`;
// name, number, type, 

const tcgBaseUrl = `https://api.pokemontcg.io/v2`;
//cards (*image*), card sets (base, 


function getSet() {
  var setId = 'swsh1' //placeholder, change to be result of user input
  fetch('https://api.pokemontcg.io/v2/sets/' + setId).then((response) => response.json())
    .then((data) => console.log(data));
}
getSet();

var pokemon;
var search;

function fetchPoke(search) {

  fetch(pokeBaseUrl + '/pokemon' + '/' + search)
    .then((response) => response.json())
    .then((data) => {
      pokemon = (data);
    })
    .then(() => console.log(pokemon))
    .then(() => console.log((pokemon).name))
    .then(function () {
      renderPokeResults();
    });
}

var searchFormEl = document.querySelector('#search-form');
searchFormEl.addEventListener('submit', handleSearchFormSubmit);

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#searchBar').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var search = searchInputVal;

  fetchPoke(search);
}


// Function for results display
function renderPokeResults() {
  // Removes past results
  const pastResults = document.getElementById('card');
  if (pastResults != null) {
    pastResults.remove();
  };

  var pokeName = (pokemon).name;
  var pokeImgUrl = (pokemon).sprites.front_default;
  var pokedexNumber = (pokemon).id;
  var pokeHeight = (pokemon).height;
  var pokeWeight = (pokemon).weight;
  var pokeGen = (pokemon).generation;
  //let {urlName} = pokeName;

  var card = document.createElement('div');
  var cardBody = document.createElement('div');
  var nameHeading = document.createElement('h2');
  var numberHeading = document.createElement('h3');
  var pokeImg = document.createElement('img');
  var heightEl = document.createElement('p');
  var weightEl = document.createElement('p');
  var genEl = document.createElement('p');

  card.setAttribute('class', 'box');
  card.setAttribute('id', 'card');
  cardBody.setAttribute('class', 'box');
  card.append(cardBody);

  //nameHeading.setAttribute();
  //numberHeading.setAttribute();
  //heightEl.setAttribute();
  //weightEl.setAttribute();
  //genEl.setAttribute();

  nameHeading.textContent = (pokeName);
  numberHeading.textContent = (pokedexNumber);
  pokeImg.setAttribute('src', (pokeImgUrl));
  pokeImg.setAttribute('alt', 'Front default sprite');
  //pokeImg.setAttribute('class',);
  heightEl.textContent = 'Height: ' + (pokeHeight);
  weightEl.textContent = 'Weight: ' + (pokeWeight);
  genEl.textContent = (pokeGen);
  cardBody.append(pokeImg);
  cardBody.append(nameHeading);
  cardBody.append(numberHeading);
  cardBody.append(heightEl);
  cardBody.append(weightEl);
  cardBody.append(genEl);

  //pokeContainer.innerHTML = 'This is a result box containing the information on the pokemon you searched: ' + ${urlName};
  pokeContainer.append(card);
}

var base1 = document.getElementById('packImageBase1');
var col1 = document.getElementById('packImageCol1');
var dv1 = document.getElementById('packImageDv1');
var neo1 = document.getElementById('packImageNeo1');
var ex5 = document.getElementById('packImageEx5');

function fetchSet1() {
  fetch(tcgBaseUrl + '/cards?q=set.id:base1')
    .then((response) => response.json())
    .then((data) => {
      cardImgUrl = (data);
    })
    .then(() => console.log(cardImgUrl))
};
fetchSet1();

function fetchSet2() {
  fetch(tcgBaseUrl + '/cards?q=set.id:neo1')
    .then((response) => response.json())
    .then((data) => {
      cardImgUrl = (data);
    })
    .then(() => console.log(cardImgUrl))
};
fetchSet2();

function fetchSet3() {
  fetch(tcgBaseUrl + '/cards?q=set.id:ex5')
    .then((response) => response.json())
    .then((data) => {
      cardImgUrl = (data);
    })
    .then(() => console.log(cardImgUrl))
};
fetchSet3();

function fetchSet4() {
  fetch(tcgBaseUrl + '/cards?q=set.id:dv1')
    .then((response) => response.json())
    .then((data) => {
      cardImgUrl = (data);
    })
    .then(() => console.log(cardImgUrl))
};
fetchSet4();

function fetchSet5() {
  fetch(tcgBaseUrl + '/cards?q=set.id:col1')
    .then((response) => response.json())
    .then((data) => {
      cardImgUrl = (data);
    })
    .then(() => console.log(cardImgUrl))
};
fetchSet4();

//do for each card image
base1.addEventListener('click', function() {
  fetchSet1();
  //append data to page innerHTML so on so forth
});

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });
});
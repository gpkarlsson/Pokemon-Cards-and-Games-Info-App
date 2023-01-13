var searchBar = document.getElementById('searchBar');
var modalEl = document.querySelector('#error');
var errorContentEl = document.querySelector('#errorContent');
var tcgCardSets = document.getElementById('cardSets');
var pokeContainer = document.querySelector('#pokeResults');
var pokemon;

var pokeBaseUrl = `https://pokeapi.co/api/v2`;
// Base URL variable for PokéAPI 

const tcgBaseUrl = `https://api.pokemontcg.io/v2`;
//Base URL variable for Pokémon TCG API


// Function to create api call depending on user input 
function fetchPoke(search) {

  //*Bug: Returns "Invalid search" modal even when valid input is searched*
  
  // if (!search.ok) {
  //   errorContentEl.textContent = 'Invalid search. Please try again.';
  //   searchBar.value = '';
  //   modalEl.classList.add('is-active');
  //   return;
  // }

  //Calls PokéApi and concatenates user inputted pokémon name to 
  fetch(pokeBaseUrl + '/pokemon' + '/' + search)
    .then((search) => search.json())
    .then((data) => {
      pokemon = (data);
    })
    .then(() => console.log(pokemon))
    .then(() => console.log((pokemon).name))
    .then(function () {
      renderPokeResults();
    });
};

// Declaring search form variable
var searchFormEl = document.querySelector('#search-form');
searchFormEl.addEventListener('submit', handleSearchFormSubmit);

// Search Bar Submit
function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#searchBar').value.toLowerCase().trim();

  //Returns error message modal if user does not put anything in search bar
  if (!searchInputVal) {
    errorContentEl.textContent = 'You need a search input value!';
    modalEl.classList.add('is-active');
    return;
  }

  var search = searchInputVal;

  fetchPoke(search);
};


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
};

// Variable declarations to be used in card set image display
var base1 = document.getElementById('packImageBase1');
var col1 = document.getElementById('packImageCol1');
var dv1 = document.getElementById('packImageDv1');
var neo1 = document.getElementById('packImageNeo1');
var ex5 = document.getElementById('packImageEx5');

// Functions to get card images based on which set image is clicked
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
base1.addEventListener('click', function () {
  fetchSet1();
  //append data to page innerHTML so on so forth
});

function closeModal($el) {
  $el.classList.remove('is-active');
  errorContentEl.textContent = '';
}

function closeAllModals() {
  (document.querySelectorAll('.modal') || []).forEach(($modal) => {
    closeModal($modal);
  });
}

// Add a click event on various child elements to close the parent modal
(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
  const $target = $close.closest('.modal');

  $close.addEventListener('click', () => {
    closeModal($target);
  });
});

// Add a keyboard event to close all modals
document.addEventListener('keydown', (event) => {
  const e = event || window.event;

  if (e.keyCode === 27) { // Escape key
    closeAllModals();
  }
});

// Submit Button
var searchBar = document.getElementById('searchBar');
var searchHistorySelect = document.querySelector('#searchHistory');

var modalEl = document.querySelector('#error');
var errorContentEl = document.querySelector('#errorContent');
var tcgCardSets = document.getElementById('cardSets');
var pokeContainer = document.querySelector('#pokeResults');
var pokemon;

// Base URL variable for PokéAPI 
var pokeBaseUrl = `https://pokeapi.co/api/v2`;

//Base URL variable for Pokémon TCG API
const tcgBaseUrl = `https://api.pokemontcg.io/v2`;


// Function to create api call depending on user input 
function fetchPoke(search) {

  //Calls PokéApi and concatenates user inputted pokémon name to 
  fetch(pokeBaseUrl + '/pokemon' + '/' + search)
    .then((search) => search.json())
    //Error Handling
    .catch(function () {
      errorContentEl.textContent = 'Invalid search. Please try again.';
      searchBar.value = '';
      modalEl.classList.add('is-active');
      return;
    })
    .then((data) => {
      pokemon = (data);
    })
    .then(() => console.log(pokemon))
    .then(() => console.log((pokemon).name))
    .then(function () {
      renderPokeResults();
      appendToHistory(search);
    });
};

// Declaring search form variable
var searchFormEl = document.querySelector('#search-form');
searchFormEl.addEventListener('submit', handleSearchFormSubmit);

// Search Bar Submit
function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = searchBar.value.toLowerCase().trim();

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

  //Create variables for API data
  var pokeName = (pokemon).name.charAt(0).toUpperCase() + (pokemon).name.slice(1);
  var pokeImgUrl = (pokemon).sprites.front_default;
  var pokedexNumber = (pokemon).id;
  var pokeHeight1 = (pokemon).height.toString();
  var pokeWeight1 = (pokemon).weight.toString();
  var pokeGen = (pokemon).generation;

  //Add proper decimal places
  var pokeHeight = [pokeHeight1.slice(0, -1), '.', pokeHeight1.slice(-1)].join('');
  var pokeWeight = [pokeWeight1.slice(0, -1), '.', pokeWeight1.slice(-1)].join('');

  //Create elements to display API call data
  var card = document.createElement('div');
  var card2 = document.createElement('div');
  var nameHeading = document.createElement('h2');
  var numberHeading = document.createElement('h3');
  var pokeImg = document.createElement('img');
  var heightEl = document.createElement('p');
  var weightEl = document.createElement('p');
  var genEl = document.createElement('p');

  card.setAttribute('class', 'box');
  card.setAttribute('id', 'card');
  card2.setAttribute('class', 'box');
  card2.setAttribute('id', 'card');

  nameHeading.textContent = 'Name: ' + (pokeName);
  numberHeading.textContent = 'Pokedex Number: #' + (pokedexNumber);
  pokeImg.setAttribute('src', (pokeImgUrl));
  pokeImg.setAttribute('alt', 'Front default sprite');
  pokeImg.setAttribute('class', 'pokeImgClass');
  heightEl.textContent = 'Height: ' + (pokeHeight) + ' m';
  weightEl.textContent = 'Weight: ' + (pokeWeight) + ' kg';
  genEl.textContent = (pokeGen);

  card.append(pokeImg);
  card.append(card2);
  card2.append(nameHeading);
  card2.append(numberHeading);
  card2.append(heightEl);
  card2.append(weightEl);
  card2.append(genEl);

  //pokeContainer.innerHTML = 'This is a result box containing the information on the pokemon you searched: ' + ${urlName};
  pokeContainer.append(card);
};


//Append Search History from Local Storage
var searchHistory = [];

// Function to display the search history list.
function renderSearchHistory() {
  searchHistorySelect.innerHTML = '';

  var selectName = document.createElement('option');
  selectName.setAttribute('name', '');
  selectName.setAttribute('hidden', '');
  selectName.textContent = "Search History";
  searchHistorySelect.append(selectName);

  // Start at end of history array and count down to show the most recent at the top.
  for (let i = 0; i < searchHistory.length; i++) {
    var optn = document.createElement('option');
    optn.textContent = searchHistory[i];
    searchHistorySelect.append(optn);
  }
}

// Function to update history in local storage then updates displayed history.
function appendToHistory(search) {
  searchHistory.push(search);

  localStorage.setItem('search-history', JSON.stringify(searchHistory));
  renderSearchHistory();
}

// Function to get search history from local storage
function initSearchHistory() {
  var localHistory = localStorage.getItem('search-history');
  if (localHistory) {
    searchHistory = JSON.parse(localHistory);
  }
  renderSearchHistory();
}

initSearchHistory();


// Variable declarations to be used in card set image display
var base1 = document.getElementById('packImageBase1');
var col1 = document.getElementById('packImageCol1');
var dv1 = document.getElementById('packImageDv1');
var neo1 = document.getElementById('packImageNeo1');
var ex5 = document.getElementById('packImageEx5');

var pokemon1 = document.getElementById('pokemon1');


//Function that displays card images by iteratively creating URLs then passing those URLs into iteratively source tags for the created img tags 
function cardImg(x, y) {
  pokemon1.innerHTML = '';
  for (let i = 1; i < x; i++) {
    let image = document.createElement('img')
    var imgUrl = 'https://images.pokemontcg.io/' + y + '/' + i + '.png';
    image.setAttribute('src', imgUrl);
    pokemon1.appendChild(image);
  }
};

// Display set release dates above each booster pack after clicking on the booster pack
function getReleaseDate(x, y) {
  var releaseEl = document.getElementById(x);
  fetch(tcgBaseUrl + '/cards?q=set.id:' + x).then((response) => {
    return response.json();
  })
    .then((data) => {
      releaseEl.textContent = y + JSON.stringify(data.data[0].set.releaseDate)
    })
}

//Event listeners to call their respective image display functions when each respective function is clicked
base1.addEventListener('click', function() {
  cardImg('102', 'base1');
  getReleaseDate('base1', 'Base1: ');
});

col1.addEventListener('click', function() {
  cardImg('96', 'col1');
  getReleaseDate('col1', 'Call of Legends: ');
});

dv1.addEventListener('click', function() {
  cardImg('22', 'dv1');
  getReleaseDate('dv1', 'Dragon Vault: ');
});

ex5.addEventListener('click', function() {
  cardImg('102', 'ex5');
  getReleaseDate('ex5', 'Hidden Legends: ');
});

neo1.addEventListener('click', function() {
  cardImg('111', 'neo1');
  getReleaseDate('neo1', 'Neo Genesis: ');
});


//Clears all cards from screen
var clearBtn = document.getElementById('clear');

//On click, sets Clear button to an empty string to clear card images off of the page 
clearBtn.addEventListener('click', function () {
  pokemon1.innerHTML = '';
});

//For modal error messages
function closeModal($el) {
  $el.classList.remove('is-active');
  errorContentEl.textContent = '';
};
function closeAllModals() {
  (document.querySelectorAll('.modal') || []).forEach(($modal) => {
    closeModal($modal);
  });
};
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
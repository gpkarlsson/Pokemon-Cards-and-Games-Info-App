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
  
  //nameHeading.setAttribute();
  //numberHeading.setAttribute();
  //heightEl.setAttribute();
  //weightEl.setAttribute();
  //genEl.setAttribute();

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

    // data-search allows access to city name when click handler is invoked
    // optn.setAttribute('data-search', searchHistory[i]);
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



// Variable declarations to be used in card set image display
var base1 = document.getElementById('packImageBase1');
var col1 = document.getElementById('packImageCol1');
var dv1 = document.getElementById('packImageDv1');
var neo1 = document.getElementById('packImageNeo1');
var ex5 = document.getElementById('packImageEx5');

var pokemon1 = document.getElementById('pokemon1');

//Event listeners to call their respective image display functions when each respective function is clicked
base1.addEventListener('click',
  imgBase1, getReleaseDate1());

col1.addEventListener('click',
  imgCol1, getReleaseDate2());

dv1.addEventListener('click',
  imgDv1, getReleaseDate3());

neo1.addEventListener('click',
  imgNeo1, getReleaseDate4());

ex5.addEventListener('click',
  imgEx5, getReleaseDate5());

//Functions that display card images by iteratively creating URLs then passing those URLs into iteratively source tags for the created img tags 
function imgBase1() {
  pokemon1.innerHTML = '';
  for (let i = 1; i < 102; i++) {
    let image = document.createElement('img')
    var base1ImgUrl = 'https://images.pokemontcg.io/base1/' + i + '.png';
    image.setAttribute('src', base1ImgUrl);
    pokemon1.appendChild(image);
  }
};

function imgCol1() {
  pokemon1.innerHTML = '';
  for (let i = 1; i < 106; i++) {
    let image = document.createElement('img')
    var imgUrl = 'https://images.pokemontcg.io/col1/' + i + '.png';
    image.setAttribute('src', imgUrl);
    pokemon1.appendChild(image);
  }
};

function imgDv1() {
  pokemon1.innerHTML = '';
  for (let i = 1; i <= 21; i++) {
    let image = document.createElement('img')
    var imgUrl = 'https://images.pokemontcg.io/dv1/' + i + '.png';
    image.setAttribute('src', imgUrl);
    pokemon1.appendChild(image);
  }
};

function imgNeo1() {
  pokemon1.innerHTML = '';
  for (let i = 1; i < 111; i++) {
    let image = document.createElement('img')
    var imgUrl = 'https://images.pokemontcg.io/neo1/' + i + '.png';
    image.setAttribute('src', imgUrl);
    pokemon1.appendChild(image);
  }
};

function imgEx5() {
  pokemon1.innerHTML = '';
  for (let i = 1; i < 102; i++) {
    let image = document.createElement('img')
    var imgUrl = 'https://images.pokemontcg.io/ex5/' + i + '.png';
    image.setAttribute('src', imgUrl);
    pokemon1.appendChild(image);
  }
};

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


// Display set release dates above each booster pack after clicking on the booster pack
function getReleaseDate1() {
  var base1 = document.getElementById('base1');
  fetch(tcgBaseUrl + '/cards?q=set.id:base1').then((response) => {
    return response.json();
  })
    .then((data) => {
      base1.textContent = 'Base1: ' + JSON.stringify(data.data[0].set.releaseDate)
    })};

function getReleaseDate2() {
  var col1 = document.getElementById('col1');
  fetch(tcgBaseUrl + '/cards?q=set.id:col1').then((response) => {
    return response.json();
  })
    .then((data) => {
      col1.textContent = 'Call of Legends: ' + JSON.stringify(data.data[0].set.releaseDate)
    })};

function getReleaseDate3() {
  var dv1 = document.getElementById('dv1');
  fetch(tcgBaseUrl + '/cards?q=set.id:dv1').then((response) => {
    return response.json();
  })
    .then((data) => {
      dv1.textContent = 'Dragon Vault: ' + JSON.stringify(data.data[0].set.releaseDate)
    })};

function getReleaseDate4() {
  var ex5 = document.getElementById('ex5');
  fetch(tcgBaseUrl + '/cards?q=set.id:ex5').then((response) => {
    return response.json();
  })
    .then((data) => {
      ex5.textContent = 'Hidden Legends: ' + JSON.stringify(data.data[0].set.releaseDate)
    })};

function getReleaseDate5() {
  var neo1 = document.getElementById('neo1');
  fetch(tcgBaseUrl + '/cards?q=set.id:neo1').then((response) => {
    return response.json();
  })
    .then((data) => {
      neo1.textContent = 'Neo Genesis: ' + JSON.stringify(data.data[0].set.releaseDate)
})};

initSearchHistory();
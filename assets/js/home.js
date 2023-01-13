var searchBar = document.getElementById('searchBar');
var modalEl = document.querySelector('#error');
var errorContentEl = document.querySelector('#errorContent');
var tcgCardSets = document.getElementById('cardSets');
var pokeContainer = document.querySelector('#pokeResults');
var pokemon;


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


function fetchPoke(search) {

  if (!search.ok) {
    errorContentEl.textContent = 'Invalid search. Please try again.';
    searchBar.value = '';
    modalEl.classList.add('is-active');
    return;
  }

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


var searchFormEl = document.querySelector('#search-form');
searchFormEl.addEventListener('submit', handleSearchFormSubmit);

// Search Bar Submit
function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#searchBar').value.toLowerCase().trim();

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




// https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data#:~:text=How%20To%20Use%20the%20JavaScript%20Fetch%20API%20to,3%20Step%203%20%E2%80%94%20Handling%20POST%20Requests%20
// be sure to read the comments to fix typos in the main article

// const ul = document.getElementById('authors')
//     const list = document.createDocumentFragment();
//     const url = 'https://jsonplaceholder.typicode.com/users/';
//     fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       let authors = data;
//     authors.map(function(author) {
//       let li = document.createElement('li');
//       let name = document.createElement('h2');
//       let email = document.createElement('span');

//       name.innerHTML = `${author.name}`;
//       email.innerHTML = `${author.email}`;
// console.log('test');
//       li.appendChild(name);
//       li.appendChild(email);
//       list.appendChild(li);
//       ul.appendChild(list);
//       })
//       })
//       .catch(function(error) {
//         console.log(error);
//     })

//     ul.appendChild(list);

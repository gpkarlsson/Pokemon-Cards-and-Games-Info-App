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

function fetchPoke() {

  fetch(pokeBaseUrl + '/pokemon' + '/charizard')
    .then((response) => response.json())
    .then ((data) => {
      pokemon = (data);
    })
    .then(() => console.log(pokemon))
    .then(() => console.log((pokemon).name))
    .then(function () {
      renderPokeResultsCard();
    });
}

// Function for results display
function renderPokeResultsCard () {
  var pokeName = (pokemon).name;
  var pokeImgUrl = (pokemon).sprites.front_default;
  var pokedexNumber = (pokemon).id;
  var pokeHeight = (pokemon).height;
  var pokeWeight = (pokemon).weight;
  var pokeGen = (pokemon).generation.name;
  
  var card = document.pokeResults.createElement('div');
  var cardBody = document.pokeResults.createElement('div');
  var nameHeading = document.pokeResults.createElement('h2');
  var numberHeading = document.pokeResults.createElement('h3');
  var pokeImg = document.pokeResults.createElement('img');
  var heightEl = document.pokeResults.createElement('p');
  var weightEl = document.pokeResults.createElement('p');
  var genEl = document.pokeResults.createElement('p');
  
  card.setAttribute('class', 'box');
  cardBody.setAttribute('class', 'box');
  card.append(cardBody);
  
  //nameHeading.setAttribute();
  //numberHeading.setAttribute();
  //heightEl.setAttribute();
  //weightEl.setAttribute();
  //genEl.setAttribute();
  
  nameHeading.textContent = (pokeName);
  numberHeading.textContent = (pokedexNumber);
  pokeImg.setAttribute('src', );
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
  
  //pokeContainer.innerHTML = '';
  pokeContainer.append(card);
  }
  

fetchPoke();


// EXAMPLE OF GETTING DATA FROM API USING FETCH AND DISPLAYING TO PAGE - FOLLOW LINK FOR STEPS
//both APIs return data as object, either figure out how to pull and display data from object or convert to an array (entries) then pull and display data

//getPokemon();
// https://pokeapi.co/api/v2/pokemon/{id or name}/


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
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

var pokeName
var pokedexNumber
var pokeHeight
var pokeWeight
var pokeGen
var searchBar = document.getElementById('searchBar');
var tcgCardSets = document.getElementById('cardSets');

var pokeGameInput

const pokeBaseUrl = `https://pokeapi.co/api/v2`;
// name, number, type, 

const tcgBaseUrl = `https://api.pokemontcg.io/v2`;
//cards (*image*), card sets (base, 

fetch(`https://pokeapi.co/api/v2/berry-flavor/sweet/`).then((response) => response.json())
  .then((data) => console.log(data));

function getSet() {
  var setId = 'swsh1' //placeholder, change to be result of user input
  fetch('https://api.pokemontcg.io/v2/sets/' + setId).then((response) => response.json())
    .then((data) => console.log(data));
}
getSet();


var pokemonName = [];
var pokeFetch = fetchPoke();

function fetchPoke() {
  fetch(pokeBaseUrl + '/pokemon' + '/charizard').then((response) => response.json())
    .then((data) => console.log(data));
}

fetchPoke();

console.log(pokeFetch);

// EXAMPLE OF GETTING DATA FROM API USING FETCH AND DISPLAYING TO PAGE - FOLLOW LINK FOR STEPS

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

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
  var setId = 'base1' //placeholder, change to be result of user input
fetch('https://api.pokemontcg.io/v2/sets/'+ setId).then((response) => response.json())
.then((data) => console.log(data));
}
getSet();



var poke1 = document.getElementById('pokemon1')


var pokemonName = [];
var pokeFetch = fetchPoke();

 function fetchPoke() {
  fetch(pokeBaseUrl + '/pokemon' + '/charizard').then((response) => response.json())
  .then((data) => console.log(data));
}

fetchPoke();

console.log(pokeFetch);

poke1.innerHTML = pokeFetch;

//getPokemon();
// https://pokeapi.co/api/v2/pokemon/{id or name}/
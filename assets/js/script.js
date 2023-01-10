
var PokeBaseUrl = `https://pokeapi.co/api/v2`;
var tcgBaseUrl = `https://api.pokemontcg.io/v2`;

fetch(`https://pokeapi.co/api/v2/berry-flavor/sweet/`).then((response) => response.json())
.then((data) => console.log(data));
  
function getSet() {
  var setId = 'base1' //placeholder, change to be result of user input
fetch('https://api.pokemontcg.io/v2/sets/'+ setId).then((response) => response.json())
.then((data) => console.log(data));
}
getSet();

function getName() {

}
fetch('https://pokeapi.co/api/v2/pokemon/158')
  .then(response => response.json())
  .then(data => console.log('Success', data))
  .catch(error => console.error(error));

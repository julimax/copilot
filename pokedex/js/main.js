// Fetch data from the PokeAPI
fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    // Process the fetched data
    const pokemonList = data.results;
    const pokedex = document.getElementById('pokedex');
    pokemonList.forEach(pokemon => {
      // Fetch details for each Pokemon
      fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
          // Create a new div for each Pokemon
          const div = document.createElement('div');
          // Add Pokemon name
          const p = document.createElement('p');
          p.textContent = pokemonData.name;
          div.appendChild(p);
          // Add Pokemon image
          const img = document.createElement('img');
          img.src = pokemonData.sprites.front_default;
          div.appendChild(img);
          // Append the div to the pokedex
          pokedex.appendChild(div);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
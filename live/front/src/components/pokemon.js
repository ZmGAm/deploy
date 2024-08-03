import React, { useEffect, useState } from 'react';

function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);
  const id = 132; // Replace 4 with the desired Pokémon ID
  const pokemon_api = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const fetchData = async () => {
    try {
      const response = await fetch(pokemon_api);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {pokemonData ? (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          {/* Add more details or components to display additional data */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Pokemon;

import React, {useEffect} from 'react'
import usePokemonCollection from '../../hooks/UsePokemonCollection/UsePokemonCollection'

const UsePokemonCollection = () => {
    const { filter, setFilter, pokemonCollection, loadPokemon } =
    usePokemonCollection();

  useEffect(() => {
    loadPokemon();
  }, [filter]);


  return (
    <div>
         <input value={filter} onChange={(e) => setFilter(e.target.value)} />
         <ul>
        {pokemonCollection.map((pokemon, index) => (
          <li key={index}>
            <h1>{pokemon.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsePokemonCollection
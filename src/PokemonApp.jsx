import { useEffect } from 'react';
import './pokemon/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices';

export const PokemonApp = () => {
  const { pokemons, isLoading, pages } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  console.log(pokemons, isLoading, pages);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div className="poke-container">
      <div className="poke-header">
        <h1>PokemonApp</h1>
        <span
          className={`poke-load poke-load-${!isLoading ? 'true' : 'false'}`}
        >
          Loading : {!isLoading ? 'true' : 'false'}
        </span>
      </div>
      <hr />
      <ul>
        {pokemons.map((pokemon) => {
          return <li key={pokemon.name}>{pokemon.name}</li>;
        })}
      </ul>
      <div className="poke-header">
        <button
          disabled={isLoading}
          onClick={() => dispatch(getPokemons(pages - 2))}
        >
          Prev
        </button>
        <span>{pages}</span>
        <button
          disabled={isLoading}
          onClick={() => dispatch(getPokemons(pages))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

import { pokemonApi } from '../../../api';
import { setPokemons, starLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(starLoadingPokemons());

    //TODO : realizar petición https
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await resp.json();

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    console.log(data.results);

    dispatch(setPokemons({ pokemons: data.results, pages: page + 1 }));
  };
};

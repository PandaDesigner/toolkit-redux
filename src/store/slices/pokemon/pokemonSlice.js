import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemonSlice',
  initialState: {
    pages: 0,
    pokemons: [],
    isLoading: false
  },
  reducers: {
    starLoadingPokemons: (state /* action */) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.pages = action.payload.pages;
      state.pokemons = action.payload.pokemons;
      console.log(action);
    }
  }
});

// Action creators are generated for each case reducer function
export const { starLoadingPokemons, setPokemons } = pokemonSlice.actions;

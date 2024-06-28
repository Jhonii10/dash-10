import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemons';

interface PokemonState {
    favorite: {[key:string]:SimplePokemon},
}


const initialState: PokemonState = {
  favorite:{}
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action:PayloadAction<{[key:string]:SimplePokemon}>){
        state.favorite = action.payload;
    },
    toggleFavorite(state , action: PayloadAction<SimplePokemon>){
            const pokemon = action.payload;
            const {id} = pokemon;
            if (!!state.favorite[id]) {
                delete state.favorite[id];
                return;
            }
            else{
                state.favorite[id] = pokemon;
            }

            localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorite))
    }
  }
});

export const {toggleFavorite , setFavoritePokemons} = pokemonSlice.actions

export default pokemonSlice.reducer
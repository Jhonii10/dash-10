'use client'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux';
import { store } from './';
import { setFavoritePokemons } from './pokemons/pokemonSlice';

export const Providers = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
        store.dispatch(setFavoritePokemons(favorites))
    }, []);


  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

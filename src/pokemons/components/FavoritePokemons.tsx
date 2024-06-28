'use client'

import React from 'react'
import { PokemonsGrid } from './PokemonsGrid'
import { useAppSelector } from '@/store'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () => {
  
    const favoritePokemons = useAppSelector(state => state.pokemons.favorite)
    const pokemons = Object.values(favoritePokemons)

    return (
        <>
        {
            pokemons.length === 0
            ?  <div className='flex flex-col h-[80vh] items-center justify-center'>
                    <IoHeartOutline size={100} className='text-red-600'/>
                    <span>No hay pokemones favoritos</span>
                </div>
            :
                 <PokemonsGrid pokemons={pokemons}/>
            
        }
        </>
    
  )
}



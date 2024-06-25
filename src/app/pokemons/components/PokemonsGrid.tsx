import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemons'
import Image from 'next/image';
import { PokemonsCard } from './PokemonsCard';

interface Props {
    pokemons : SimplePokemon[];
}

export const PokemonsGrid = ({pokemons}:Props) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center border '>
            {
                pokemons.map((pokemon)=>{
                    return (
                        <PokemonsCard key={pokemon.id} pokemons={pokemon}/>
                    )
                })
            }
            
        </div>
  )
}

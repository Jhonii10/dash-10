import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemons'
import Image from 'next/image';

interface Props {
    pokemons : SimplePokemon[];
}

export const PokemonsGrid = ({pokemons}:Props) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center border '>
            {
                pokemons.map((pokemon)=>{
                    return (
                        <div key={pokemon.id}>
                                 <h3>{pokemon.name}</h3>
                                <Image
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                        </div>
                    )
                })
            }
            
        </div>
  )
}

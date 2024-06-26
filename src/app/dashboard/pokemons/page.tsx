
import { PokemonsGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';
import { error } from 'console';
import Image from 'next/image';
import React from 'react'

const getPokemons = async(limit = 20 , offset = 0):Promise<SimplePokemon[]>=>{
      
        const data:PokemonsResponse= await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json()).catch(error => {throw new Error(error.message)});

        const pokemons = data.results.map(pokemon => ({
            id:pokemon.url.split('/').at(-2)!,
            name: pokemon.name,
        }))


        return pokemons;
    
}

export default async function  PokemonsPage() {

    
    const pokemons = await getPokemons(151);

  return (
    <main className='flex flex-col p-2'>
        <h1 className='text-3xl font-bold mb-2'>Listado de pokemons estaticos</h1>
        <PokemonsGrid pokemons={pokemons}/>
    </main>
  )
}

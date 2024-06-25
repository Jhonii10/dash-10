import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemons'
import Image from 'next/image';
import { IoHeartOutline } from 'react-icons/io5';
import Link from 'next/link';

interface Props {
    pokemons: SimplePokemon;
}

export const PokemonsCard = ({pokemons}:Props) => {

  const {name, id} = pokemons;
  
  return (
    <>
    <div className="mx-auto right-0 mt-2 w-60">
    <div className="bg-white rounded-md overflow-hidden shadow-lg">
      <div className="text-center p-6 bg-gray-800 border-b">
        <Image
         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
         alt={name}
         width={100}
         height={100}
         className='h-24 w-24 text-white rounded-sm mx-auto'
         priority={false}
        />
        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
        <div className="mt-5">
          <Link 
            href={`/dashboard/pokemons/${id}`}
            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
            Ver mas 
          </Link>
        </div>
      </div>
      <div className="border-b">
        <a className="px-4 py-2 hover:bg-gray-100 flex items-center justify-center">
          <div className="text-red-600">
            <IoHeartOutline className='w-7 h-7'/>
          </div>
          <div className="flex items-center pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none " >
              No es favorito
            </p>
          </div>
        </a>
        
      </div>
      
    </div>
  </div>
  </>
  )
}
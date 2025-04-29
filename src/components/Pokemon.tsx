import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pokeApi } from "../api/pokemon";
import { PokemonDetail } from "../common/interfaces";

interface Props {
  pokemon: {
    name: string;
    url: string;
  };
}

const Pokemon: React.FC<Props> = ({ pokemon }) => {
  const [details, setDetails] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    pokeApi
      .get<PokemonDetail>(`/pokemon/${pokemon.name}`)
      .then((res) => setDetails(res.data))
      .catch(console.error);
  }, [pokemon.name]);

  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition lg:py-20 lg:w-[500px]">
        {details ? (
          <img
            src={details.sprites.front_default}
            alt={pokemon.name}
            className="w-48 h-48 mb-2"
          />
        ) : (
          <div className="w-24 h-24 mb-2 bg-gray-200 animate-pulse" />
        )}
        <span className="capitalize font-medium text-xl">{pokemon.name}</span>
      </div>
    </Link>
  );
};

export default Pokemon;

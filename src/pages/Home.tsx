import React, { useEffect, useState } from "react";
import { pokeApi } from "../api/pokemon";
import { PokemonListResult } from "../common/interfaces";
import Pokemon from "../components/Pokemon";
import Search from "../components/Search";

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonListResult[]>([]);

  useEffect(() => {
    pokeApi
      .get<{ results: PokemonListResult[] }>("/pokemon?limit=99")
      .then((res) => setPokemons(res.data.results))
      .catch(console.error);
  }, []);

  return (
    <div className="p-4 bg-[#F0F0F0] ">
      <div className="container mx-auto">
        <Search />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:space-x-15 mt-15">
          {pokemons.map((p) => (
            <Pokemon key={p.name} pokemon={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

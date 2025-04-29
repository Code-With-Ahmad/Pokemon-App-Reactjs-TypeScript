import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useActionState } from "react";
import { PokemonDetail } from "../common/interfaces";
import { searchPokemon } from "../utils/SearchPokemon";

const Search: React.FC = () => {
  const navigate = useNavigate();

  const [pokemon, formAction, isPending] = useActionState<
    PokemonDetail | null,
    FormData
  >(searchPokemon, null);

  useEffect(() => {
    if (pokemon) {
      navigate(`/pokemon/${pokemon.name}`);
    }
  }, [pokemon, navigate]);

  return (
    <form action={formAction} className="flex items-center  mb-4 mt-[50px]">
      <input
        type="text"
        name="search"
        placeholder="Search...."
        className="flex-grow lg:flex-grow-0 py-4  rounded lg:w-[30%] px-3 py-2 focus:outline-none bg-white outline-0"
        disabled={isPending}
      />
      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 rounded bg-[#004368] text-white disabled:opacity-50 py-4  cursor-pointer"
      >
        {isPending ? "Searching…" : "Search"}
      </button>
    </form>
  );
};

export default Search;

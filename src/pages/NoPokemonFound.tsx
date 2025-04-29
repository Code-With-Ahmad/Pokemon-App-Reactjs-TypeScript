import React from "react";

const NoPokemonFound:React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-purple-300 to-blue-300 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
          alt="Sad Psyduck"
          className="w-40 mx-auto mb-6 animate-bounce"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          No Pokémon Found!
        </h1>
        <p className="text-gray-600 mb-6">
          Oops! It seems we couldn't find any Pokémon matching your search.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default NoPokemonFound;

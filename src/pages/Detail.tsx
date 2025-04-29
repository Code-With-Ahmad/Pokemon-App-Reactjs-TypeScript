import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pokeApi } from "../api/pokemon";
import { PokemonDetail } from "../common/interfaces";

const Detail: React.FC = () => {
  const { pokemonName } = useParams<{ pokemonName: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    if (!pokemonName) return;
    pokeApi
      .get<PokemonDetail>(`/pokemon/${pokemonName}`)
      .then((res) => setData(res.data))
      .catch(console.error);
  }, [pokemonName]);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-full">Loading...</div>
    );
  }

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-500 hover:underline ms-[200px] cursor-pointer text-xl"
      >
        ← Back
      </button>
      <div className="max-w-xl mx-auto p-4 bg-white">
        <div className="rounded-lg shadow bg-[#FDC666] ">
          <div className="bg-[#5FE2C9]">
            <img
              src={data.sprites.front_default}
              alt={data.name}
              className="mx-auto mb-4 h-48 w-48"
            />
          </div>

          <div className="px-4 py-4">
            <h2 className="text-2xl capitalize font-bold mb-2">{data.name}</h2>
            <div className="flex flex-col gap-4">
              <p>
                <strong>Type:</strong> {data.types[0].type.name}
              </p>
              <p>
                <strong>Stats:</strong>{" "}
                {data.stats.map((s) => s.stat.name).join(", ")}
              </p>
              <p>
                <strong>Abilities:</strong>{" "}
                {data.abilities.map((a) => a.ability.name).join(", ")}
              </p>
              <p>
                <strong>Moves:</strong>{" "}
                {data.moves
                  .slice(0, 5)
                  .map((item) => item.move.name)
                  .join(", ")}
              </p>
            </div>
            <a
              href={`https://bulbapedia.bulbagarden.net/wiki/${data.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-teal-600 hover:underline"
            >
              More on Bulbapedia →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

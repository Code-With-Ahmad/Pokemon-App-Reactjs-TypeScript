import { pokeApi } from "../api/pokemon";
import { PokemonDetail } from "../common/interfaces";

export const searchPokemon = async (
  prev: PokemonDetail | null,
  formData: FormData
) => {
  const name = formData.get("search")?.toString().toLowerCase().trim();
  if (!name) return null;

  const { data } = await pokeApi.get<PokemonDetail>(`/pokemon/${name}`);
  return data;
};

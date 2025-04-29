export interface ApiListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface PokemonListResult {
  name: string;
  url: string;
}

export interface PokemonSprite {
  front_default: string;
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface PokemonMove {
  move: {
    name: string;
  };
}

export interface PokemonStat {
  stat: {
    name: string;
  };
}

export interface PokemonDetail {
  name: string;
  sprites: PokemonSprite;
  types: PokemonType[];
  abilities: PokemonAbility[];
  moves: PokemonMove[];
  stats: PokemonStat[];
}

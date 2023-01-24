export const goToPokemonDetails = (navigate, pokemonName) => {
  navigate(`/details/${pokemonName}`);
};

export const goToPokedex = (navigate) => {
  navigate(`/pokedex`);
};

export const goToHome = (navigate) => {
  navigate(`/`);
};

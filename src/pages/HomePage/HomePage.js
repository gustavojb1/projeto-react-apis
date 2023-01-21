import React, { useContext } from "react";
import Header from "../../components/Header/header";
import { Container, ContainerCards } from "./styled";
import { UserContext } from "../../context/GlobalContext";
import Card from "../../components/Card/Card";

const HomePage = () => {
  const context = useContext(UserContext);
  const {
    pokemon,
    isLoading,
    fetchPokemonNext,
    fetchPokemonPrev,
    nextUrl,
    prevUrl,
  } = context;

  const handleNextClick = () => {
    fetchPokemonNext();
  };
  const handlePrevClick = () => {
    fetchPokemonPrev();
  };

  return (
    <div>
      <Header page={"home"} home={true} />
      <Container>
        Todos Pokémons
        <ContainerCards>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            pokemon.results.map((pokemon, index) => (
              <Card url={pokemon.url} key={index} />
            ))
          )}

          <button onClick={handlePrevClick} disabled={prevUrl === null}>
            Previous
          </button>
          <button onClick={handleNextClick} disabled={nextUrl === null}>
            Next
          </button>
        </ContainerCards>
      </Container>
    </div>
  );
};

export default HomePage;

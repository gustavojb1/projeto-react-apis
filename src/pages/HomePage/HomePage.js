import React, { useContext } from "react";
import Header from "../../components/Header/header";
import { BtnContent, BtnNavigate, Container, ContainerCards } from "./styled";
import { UserContext } from "../../context/GlobalContext";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
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
      <Header
        page={"home"}
        home={true}
        navigate={navigate}
        context={context}
        pokemonDetails={""}
      />
      <Container>
        Todos Pokémons
        <ContainerCards>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            pokemon.results.map((pokemon, index) => (
              <Card url={pokemon.url} SelectedPokemon={pokemon} key={index} />
            ))
          )}
        </ContainerCards>
        <BtnContent>
          <BtnNavigate onClick={handlePrevClick} disabled={prevUrl === null}>
            Previous
          </BtnNavigate>
          <BtnNavigate onClick={handleNextClick} disabled={nextUrl === null}>
            Next
          </BtnNavigate>
        </BtnContent>
      </Container>
    </div>
  );
};

export default HomePage;

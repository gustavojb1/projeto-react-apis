import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/header";
import { UserContext } from "../../context/GlobalContext";
import { Container, ContainerCards } from "./styled";

const PokedexPage = () => {
  const context = useContext(UserContext);
  const { myPokemon } = context;

  return (
    <div>
      <Header
        page={"pokedex"}
        context={context}
        pokemonDetails={""}
        navigate={""}
      />

      <Container>
        <ContainerCards>
          {myPokemon.map((pokemon, index) => (
            <Card url={pokemon.url} key={index} SelectedPokemon={pokemon} />
          ))}
        </ContainerCards>
      </Container>
    </div>
  );
};

export default PokedexPage;

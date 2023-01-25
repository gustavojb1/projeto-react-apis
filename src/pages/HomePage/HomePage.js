import React, { useContext, useState } from "react";
import Header from "../../components/Header/header";
import Tilt from "react-parallax-tilt";
import {
  BtnContent,
  BtnNavigate,
  Container,
  ContainerCards,
  Modal,
  ModalContent,
  Text,
  Title,
} from "./styled";
import { UserContext } from "../../context/GlobalContext";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const [modal, setModal] = useState("hidden");
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
    <>
      <ModalContent
        visibility={modal}
        onClick={() => {
          setModal("hidden");
        }}
      >
        <Modal>
          <Title>Gotcha!</Title>
          <Text>O Pokémon foi adicionado na sua Pokédex</Text>
        </Modal>
      </ModalContent>
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
          {pokemon.map((pokemon, index) => (
            <Tilt>
              <Card
                url={pokemon.url}
                SelectedPokemon={pokemon}
                key={index}
                setModal={setModal}
              />
            </Tilt>
          ))}
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
    </>
  );
};

export default HomePage;

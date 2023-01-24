import React, { useContext } from "react";
import {
  HeaderContainer,
  Logo,
  ButtonPokedex,
  ButtonExcluirPokedex,
  SpanBack,
} from "./styled";
import pokemonLogo from "../../img/pokemon-logo.png";

import { goToPokedex } from "../../routes/Coordinator";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/GlobalContext";

const header = ({ page, home, navigate, context, pokemonDetails }) => {
  const { myPokemon, setMyPokemon } = context;

  const excluirPokemon = () => {
    const newMyPokemon = myPokemon.filter((pokemon) => {
      return pokemon.name !== pokemonDetails.name;
    });
    console.log(newMyPokemon);
    setMyPokemon(newMyPokemon);
    goToPokedex(navigate);
  };

  const renderButton = () => {
    switch (page) {
      case "home":
        return (
          <ButtonPokedex
            onClick={() => {
              goToPokedex(navigate);
            }}
          >
            Pokédex
          </ButtonPokedex>
        );
      case "detail":
        return (
          <ButtonExcluirPokedex
            onClick={() => {
              excluirPokemon();
            }}
          >
            Excluir da Pokedex
          </ButtonExcluirPokedex>
        );
      case "pokedex":
        return null;
      default:
        return null;
    }
  };
  return (
    <div>
      <HeaderContainer>
        {!home ? (
          <NavLink to="/" end>
            <SpanBack>Todos Pokémons</SpanBack>
          </NavLink>
        ) : null}

        <Logo src={pokemonLogo} alt="logo pokemon" />
        {renderButton()}
      </HeaderContainer>
    </div>
  );
};

export default header;

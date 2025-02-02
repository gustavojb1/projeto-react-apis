import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { getColors } from "../../utils/ReturnCardColor";
import { getTypes } from "../../utils/ReturnTypes";
import pokebal from "../../img/pokebal.png";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetails } from "../../routes/Coordinator";
import Tilty from "react-tilty";
import {
  Capturar,
  CardItem,
  Details,
  DetailsContent,
  Excluir,
  Id,
  Left,
  Loader,
  Loading,
  Name,
  PokebalContent,
  PokeImage,
  Right,
  Type,
  TypeContent,
} from "./styled";
import { UserContext } from "../../context/GlobalContext";

const Card = ({ url, SelectedPokemon, setModal }) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { myPokemon, setMyPokemon } = context;
  const pokemonHome = context;

  const location = useLocation();

  useEffect(() => {
    fetchPokemon();
  }, [url]);

  const fetchPokemon = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      setPokemon(response.data);
      //console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Erro ao pegar dados do Pokemon!");
      console.log(error);
    }
  };

  const cardColor = () => {
    const pokemonTypes = pokemon.types;
    const firstPokemonType = pokemonTypes ? pokemonTypes[0] : {};
    const firstPokemonTypeName = firstPokemonType.type?.name;
    return getColors(firstPokemonTypeName);
  };

  const capturar = (SelectedPokemon) => {
    setMyPokemon([...myPokemon, SelectedPokemon]);

    const newPokemon = pokemonHome.pokemon.filter((poke) => {
      return poke.name !== pokemon.name;
    });

    pokemonHome.setPokemon(newPokemon);

    setModal("visible");
  };

  const excluirPokemon = (SelectedPokemon) => {
    const newMyPokemon = myPokemon.filter((poke) => {
      return poke.name !== pokemon.name;
    });
    setMyPokemon(newMyPokemon);

    pokemonHome.setPokemon([...pokemonHome.pokemon, SelectedPokemon]);
  };

  const renderCapturarButton = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Capturar
            onClick={() => {
              capturar(SelectedPokemon);
            }}
          >
            Capturar!
          </Capturar>
        );
      case "/pokedex":
        return (
          <Excluir
            onClick={() => {
              excluirPokemon(SelectedPokemon);
            }}
          >
            Excluir
          </Excluir>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading>
          <Loader />
        </Loading>
      ) : (
        <Tilty>
          <CardItem color={cardColor()}>
            <Left>
              <Id>#{pokemon.id}</Id>
              <Name>{pokemon.name}</Name>
              <TypeContent>
                {pokemon.types?.map((pokemonType, index) => {
                  const imageTypeLink = getTypes(pokemonType.type.name);
                  return <Type key={index} src={imageTypeLink} alt="" />;
                })}
              </TypeContent>
              <DetailsContent>
                <Details
                  onClick={() => {
                    goToPokemonDetails(navigate, pokemon.id);
                  }}
                >
                  Detalhes
                </Details>
                {renderCapturarButton()}
              </DetailsContent>
            </Left>
            <Right>
              <PokeImage
                src={
                  pokemon.sprites?.other["official-artwork"]["front_default"]
                }
              />
              <PokebalContent src={pokebal} />
            </Right>
          </CardItem>
        </Tilty>
      )}
    </>
  );
};

export default Card;

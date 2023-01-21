import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTypes } from "../../utils/ReturnTypes";
import Header from "../../components/Header/header";
import { UserContext } from "../../context/GlobalContext";
import { getColors } from "../../utils/ReturnCardColor";
import pokebal from "../../img/pokebal.png";
import {
  Detail,
  Content,
  DetailsContent,
  SpriteContent,
  Sprites,
  Stats,
  RightContent,
  Name,
  TypeContent,
  Type,
  Moves,
  Move,
  PokebalContent,
  PokeImage,
  SpriteImg,
  StatsContent,
  StatsName,
  StatsNumber,
  StatsBar,
  Bar,
} from "./styled";

const DetailsPage = () => {
  const context = useContext(UserContext);
  const { pokemon } = context;
  const location = useLocation();
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const stats = pokemonDetails?.stats ? pokemonDetails.stats : [];

  const pokemonName = location.pathname.substring(9, location.pathname.length);
  const pokemonSelected = pokemon.results?.filter(
    (pokemon) => pokemon.name === pokemonName
  );

  useEffect(() => {
    // setIsLoading(true);
    fetchPokemon();
  }, [pokemon]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonSelected[0].url);
      setPokemonDetails(response.data);
      //console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Erro ao pegar dados do Pokemon!");
      console.log(error);
    }
  };

  const cardColor = () => {
    const pokemonTypes = pokemonDetails.types;
    const firstPokemonType = pokemonTypes ? pokemonTypes[0] : {};
    const firstPokemonTypeName = firstPokemonType.type?.name;
    return getColors(firstPokemonTypeName);
  };
  // #8ADC8E
  // #FFDE6A
  // #FF7B2D

  const returnColorBar = (value) => {
    if (value <= 50 && value >= 30) return "#FFDE6A";
    if (value > 50) return "#8ADC8E";
    if (value <= 30) return "#FF7B2D";
  };
  const returnWidthBar = (value) => {
    const base = 110;
    const result = (value / base) * 100;
    return `${result}%`;
  };

  return (
    <div>
      <Header page={"detail"} />
      <Content>
        <Detail>Detalhes</Detail>
        <DetailsContent color={cardColor()}>
          <Sprites>
            <SpriteContent>
              <SpriteImg src={pokemonDetails.sprites?.front_default} />
            </SpriteContent>
            <SpriteContent>
              <SpriteImg src={pokemonDetails.sprites?.back_default} />
            </SpriteContent>
          </Sprites>
          <StatsContent>
            Base Stats
            {stats.map((stat, index) => {
              return (
                <Stats key={index}>
                  <StatsName>{stat.stat.name.replace("-", " ")}</StatsName>
                  <StatsNumber>{stat.base_stat}</StatsNumber>
                  <StatsBar>
                    <Bar
                      color={returnColorBar(stat.base_stat)}
                      width={returnWidthBar(stat.base_stat)}
                    />
                  </StatsBar>
                </Stats>
              );
            })}
          </StatsContent>
          <RightContent>
            #{pokemonDetails.id}
            <Name>{pokemonDetails.name}</Name>
            <TypeContent>
              {pokemonDetails.types?.map((pokemonType, index) => {
                const imageTypeLink = getTypes(pokemonType.type.name);
                return <Type key={index} src={imageTypeLink} alt="" />;
              })}
            </TypeContent>
            <Moves>
              Moves:
              {pokemonDetails.moves?.map((move, index) => {
                return (
                  <Move key={index}>{move.move.name.replace("-", " ")}</Move>
                );
              })}
            </Moves>
            <PokebalContent src={pokebal} />
            <PokeImage
              src={
                pokemonDetails.sprites?.other["official-artwork"][
                  "front_default"
                ]
              }
            />
          </RightContent>
        </DetailsContent>
      </Content>
    </div>
  );
};

export default DetailsPage;

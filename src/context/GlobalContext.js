import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [pokemon, setPokemon] = useState({});
  const [myPokemon, setMyPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPokemon(response.data);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
      setIsLoading(false);
    } catch (error) {
      console.log("Erro ao pegar dados do Pokemon!");
      console.log(error);
    }
  };

  const fetchPokemonNext = async () => {
    try {
      const response = await axios.get(nextUrl);
      setPokemon(response.data);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
      setIsLoading(false);
    } catch (error) {
      console.log("Erro ao pegar dados do Pokemon!");
      console.log(error);
    }
  };

  const fetchPokemonPrev = async () => {
    try {
      const response = await axios.get(prevUrl);
      setPokemon(response.data);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
      setIsLoading(false);
    } catch (error) {
      console.log("Erro ao pegar dados do Pokemon!");
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        pokemon,
        isLoading,
        fetchPokemonNext,
        fetchPokemonPrev,
        nextUrl,
        prevUrl,
        myPokemon,
        setMyPokemon,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

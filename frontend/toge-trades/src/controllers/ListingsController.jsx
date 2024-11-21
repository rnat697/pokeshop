import { useState, useEffect } from "react";
import { allEligiblePokemon } from "../api/api";
import { useAuth } from "../api/auth";
import PokemonModel from "../models/PokemonModel";

export default function getEligibleTradePokemon(page = 1) {
  return allEligiblePokemon(page)
    .then((res) => {
      if (res.status === 200) {
        const metadata = res.data.metadata;
        const pokemon = res.data.data.map((item) =>
          PokemonModel.fromJSON(item)
        );
        return { metadata, pokemon };
      }
    })
    .catch((e) => {
      toast(
        "Error when fetching pokemons eligible for trading: " +
          (e.response?.data?.message || "An unexpected error occurred")
      );
    });
}

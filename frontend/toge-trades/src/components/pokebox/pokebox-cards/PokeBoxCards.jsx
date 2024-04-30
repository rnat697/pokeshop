import "./PokeBoxCards.css";
import FavoriteButton from "../../favourite/FavoriteButton";
import TradeableButton from "../../tradeable/TradeableButton";
import { capitalizeFirstLetter } from "../../utils/utils";
import RareIndicators from "../../rare-indicators/RareIndicators";

export default function PokeBoxCards({ pokemon, onClick }) {
  return (
    <div className="cards-container">
      <div onClick={onClick}>
        <RareIndicators pokemon={pokemon} />
        <div className="pokemon">
          <img
            src={
              pokemon.isShiny
                ? pokemon.species.image.shiny
                : pokemon.species.image.normal
            }
          />
          <p>{capitalizeFirstLetter(pokemon.species.name)}</p>
        </div>
      </div>
      <div className="pokebox-buttons">
        <FavoriteButton pokemonId={pokemon._id} />
        <TradeableButton pokemonId={pokemon._id} />
      </div>
    </div>
  );
}

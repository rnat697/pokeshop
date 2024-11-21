import { useEffect, useState } from "react";
import ListingBox from "./listing-box/ListingBox";
import styles from "./NewListing.module.css";
import { createNewListing } from "../../../controllers/ListingsController";
import { ToastContainer } from "react-toastify";

export default function NewListing({ onClicked, pokemon, species }) {
  const [selectedPoke, setSelectedPoke] = useState(null);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  useEffect(() => {
    if (pokemon) {
      setSelectedPoke(pokemon);
    }
  }, [pokemon]);

  useEffect(() => {
    if (species) {
      setSelectedSpecies(species);
    }
  }, [species]);

  const handleCreateListing = () => {
    createNewListing(selectedPoke.id, selectedSpecies.id).then((success) => {
      if (success) {
        setSelectedPoke(null);
        setSelectedSpecies(null);
      }
    });
  };

  return (
    <div className={styles["new-listing-container"]}>
      <div className={styles["new-listing-content"]}>
        <div className={styles["offering-seeking-container"]}>
          <ListingBox
            title="I am Offering"
            tooltipMsg="Pick one Pokemon that you want to offer."
            isOffering={true}
            onClicked={(isOffered) => onClicked(isOffered)}
            pokemon={selectedPoke}
          />
          <img
            className={styles["trade-icon"]}
            src="../../../src/assets/trade-icon.png"
          />
          <ListingBox
            title={"I am Seeking"}
            tooltipMsg={"Pick one from your wishlist that you are seeking."}
            onClicked={(isOffered) => onClicked(isOffered)}
            pokemon={selectedSpecies}
            isSpecies={true}
          />
        </div>
        <div className={styles["new-listing-button"]}>
          <button onClick={handleCreateListing}>Create New Listing</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

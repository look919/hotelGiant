import React from "react";
import LocationItem from "./LocationItem";

const Locations = () => (
  <div className="locations">
    <h4 className="heading-4 locations__heading">Locations:</h4>
    <ul className="locations__list">
      <LocationItem town="Bilbao" street="Barrencalle 23" />
      <LocationItem town="Brussels" street="Bonheur 11" />
      <LocationItem town="Naples" street="Spaccanapoli 8" />
      <LocationItem town="Prague" street="Pařížská Street 3" />
      <LocationItem town="Warsaw" street="Zwyciestwa 32" />
    </ul>
  </div>
);

export default Locations;

import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, index) => (
        <Tile key={index} name={tile.name} description={tile} />
      ))}
    </div>
  );
};


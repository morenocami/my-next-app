import { useState } from "react";
import { NumberGrid } from "./number-grid";
import { GameInterface } from "./game-interface";

export const StarMatch = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
      }}
    >
      <GameInterface />
      <NumberGrid />
    </div>
  );
};

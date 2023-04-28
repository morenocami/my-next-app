import { NumberGrid } from "./number-grid";
import { GameInterface } from "./game-interface";
import { Button, Typography } from "@mui/material";
import { useState } from "react";

export const StarMatch = () => {
  const [starCount, setStarCount] = useState(9);
  const setNewSize = (remaining: number[]) => {
    const randomInt = Math.floor(Math.random() * 10);
    const newIndex = randomInt % remaining.length;
    setStarCount(remaining[newIndex]);
  };

  return (
    <>
      <Typography
        variant="body1"
        color="initial"
        sx={{ textAlign: "center", paddingBottom: "1rem" }}
      >
        click on number(s) that add up to the number of stars you see
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }}
      >
        <GameInterface stars={starCount} />
        <NumberGrid answer={starCount} nextQuestion={setNewSize} />
      </div>
    </>
  );
};

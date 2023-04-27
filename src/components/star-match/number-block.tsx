import { Button } from "@mui/material";
import { useState } from "react";

export const NumberBlock = ({ value }: { value: number }) => {
  const [position, setPosition] = useState(0);
  const updatePosition = () => {
    if (position < 2) setPosition(position + 1);
  };
  const positionStyle =
    position === 0
      ? { backgroundColor: "blue", "&:hover": { backgroundColor: "blue" } }
      : { backgroundColor: "green", "&:hover": { backgroundColor: "green" } };
  return (
    <Button
      variant="contained"
      sx={{
        height: "50px",
        ...positionStyle,
      }}
      onClick={updatePosition}
      disabled={position == 2}
    >
      {value}
    </Button>
  );
};

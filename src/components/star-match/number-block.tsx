import { Button } from "@mui/material";

export const NumberBlock = ({
  value = 0,
  selected = false,
  notInPlay = false,
  selectAnswer = (x: number) => {},
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        height: "50px",
        backgroundColor: selected ? "green" : "blue",
        "&:hover": selected
          ? { backgroundColor: "green" }
          : { backgroundColor: "blue" },
        visibility: notInPlay ? "hidden" : "",
      }}
      onClick={() => selectAnswer(value)}
    >
      {value}
    </Button>
  );
};

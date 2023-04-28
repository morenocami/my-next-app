import Typography from "@mui/material/Typography";
import { StarGrid } from "./star-grid";

export const GameInterface = ({ stars = 0 }) => {
  return (
    <div>
      <StarGrid size={stars} />
    </div>
  );
};

import { Stack } from "@mui/material";
import { Card } from "./card";

export default ({ cardData }) => (
  <Stack spacing={3}>
    {cardData.map((card) => (
      <Card data={card} />
    ))}
  </Stack>
);

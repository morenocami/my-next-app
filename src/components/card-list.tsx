import { Stack } from "@mui/material";
import { Card, CardInterface } from "./card";

export default ({ cardData }: { cardData: CardInterface[] }) => (
  <Stack spacing={3}>
    {cardData.map((card) => (
      <Card data={card} />
    ))}
  </Stack>
);

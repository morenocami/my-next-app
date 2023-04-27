import { Stack } from "@mui/material";
import { Card, CardInterface } from "./card";

export const CardsList = ({ cardData }: { cardData: CardInterface[] }) => (
  <Stack spacing={3}>
    {cardData.map((card) => (
      <div key={card.id}>
        <Card data={card} />
      </div>
    ))}
  </Stack>
);

import { Form } from "@/components/gh-cards/card-form";
import { CardInterface } from "@/components/gh-cards/card";
import { CardsList } from "@/components/gh-cards/card-list";
import { useState } from "react";

const initialState = [
  {
    id: 15224521,
    name: "Camilo Moreno",
    avatar_url: "https://avatars.githubusercontent.com/u/15224521?v=4",
    html_url: "https://github.com/morenocami",
  },
];

export const GHCards = () => {
  const [cardData, setCardData] = useState(initialState);
  const addNewCard = (newCard: CardInterface) => {
    if (cardData.some((card) => card.id == newCard.id)) return;
    setCardData((state) => {
      return [...state, newCard];
    });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Github Cards</h1>
      <Form onSubmit={addNewCard} />
      <CardsList cardData={cardData} />
    </div>
  );
};

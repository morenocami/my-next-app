import Head from "next/head";
import styles from "@/styles/Home.module.css";
import CardList from "@/components/card-list";
import Form from "@/components/card-form";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { CardInterface } from "@/components/card";

export default function Home() {
  const [cardData, setCardData] = useState([
    {
      id: 15224521,
      name: "Camilo Moreno",
      avatar_url: "https://avatars.githubusercontent.com/u/15224521?v=4",
      html_url: "https://github.com/morenocami",
    },
  ]);
  const addNewCard = (newCard: CardInterface) => {
    if (cardData.some((card) => card.id == newCard.id)) return;
    setCardData((state) => {
      return [...state, newCard];
    });
  };

  return (
    <>
      <Head>
        <title>Camilo</title>
        <meta name="description" content="A place for little projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ToastContainer />
        <h1 style={{ top: 0, position: "absolute", padding: "3rem" }}>
          Github Cards
        </h1>
        <CardList cardData={cardData} />
        <Form onSubmit={addNewCard} />
      </main>
    </>
  );
}

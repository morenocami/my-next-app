import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { ToastContainer } from "react-toastify";
import { AppBar, Tab, Tabs } from "@mui/material";
import { GHCards } from "@/components/gh-cards";
import { useState } from "react";
import { BlankPage } from "@/components/blank/blank";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  const views = [GHCards, BlankPage].sort();

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
        <AppBar position="fixed" sx={{ top: 0 }}>
          <Tabs
            value={selectedTab}
            onChange={(e, value) => setSelectedTab(value)}
            centered
          >
            {views.map((view) => (
              <Tab
                key={`nav-${view.name}`}
                label={view.name}
                sx={{
                  "&.Mui-selected": {
                    color: "white",
                    borderBottom: "solid 5px black",
                    backgroundColor: "blue",
                  },
                  "&:hover": {
                    backgroundColor: "lightblue",
                    cursor: "pointer",
                    transition: "background-color 0s",
                  },
                  "&:not(:hover)": {
                    backgroundColor: "transparent",
                    transition: "background-color 0.5s ease",
                  },
                }}
              />
            ))}
          </Tabs>
        </AppBar>

        {views.map((View, index) => (
          <div key={`view-${View.name}`} hidden={selectedTab !== index}>
            {selectedTab === index && <View />}
          </div>
        ))}
      </main>
    </>
  );
}

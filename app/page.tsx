'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Landing from "./components/landing-section/landing";
import Navbar from "./components/navbar/navbar";
import { createContext, useState } from "react";

export const DarkContext = createContext({ });

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <DarkContext.Provider value={{ darkMode, setDarkMode }}>
      <main className={styles.main}>
        <Navbar />
        <Landing />
      </main>
    </DarkContext.Provider>
  );
}

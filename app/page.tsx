'use client'
import styles from "./page.module.css";
import Landing from "./components/landing-section/landing";
import Navbar from "./components/navbar/navbar";
import { createContext, useState, useEffect, useCallback } from "react";
import Transition from "./components/transition/transition";
import About from "./components/about-section/about";

export const DarkContext = createContext({});
export const WindowContext = createContext({});

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [width, setWidth] = useState(0);

  const resizeWindow = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    setWidth(window.innerWidth);
  }, []);

  return (
    <DarkContext.Provider value={{ darkMode, setDarkMode }}>
      <WindowContext.Provider value={{ width, setWidth }}>
        <main className={darkMode ? [styles.main, styles.dark].join(' ') : styles.main}>
          <Navbar />
          <Landing />
          <About />
          <Transition />
        </main>
      </WindowContext.Provider>
    </DarkContext.Provider>
  );
}

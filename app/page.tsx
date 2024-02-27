'use client'
import styles from "./page.module.css";
import Landing from "./components/landing-section/landing";
import Navbar from "./components/navbar/navbar";
import { createContext, useState, useEffect, useCallback } from "react";
import Transition from "./components/transition/transition";
import Portfolio from "./components/portfolio-section/portfolio";
import Contact from "./components/contact-section/contact";
import Footer from "./components/footer/footer";
import Skills from "./components/skills-section/skills";
import Head from 'next/head';

export const DarkContext = createContext({});
export const WindowContext = createContext({});

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [width, setWidth] = useState(0);

  const resizeWindow = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    setWidth(window.innerWidth);

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, [resizeWindow]);

  return (
    <DarkContext.Provider value={{ darkMode, setDarkMode }}>
      <WindowContext.Provider value={{ width, setWidth }}>
        <main className={darkMode ? [styles.main, styles.dark].join(' ') : styles.main}>
          <Head>
            <link rel='icon' sizes='16x16' type='image/ico' href='/favicon.ico' />
          </Head>
          <Navbar />
          <div className={styles.content}>
            <Landing />
            <Transition />
            <Portfolio />
            <Transition />
            <Skills />
            <Transition />
            <Contact />
            <Footer />
          </div>
        </main>
      </WindowContext.Provider>
    </DarkContext.Provider>
  );
}

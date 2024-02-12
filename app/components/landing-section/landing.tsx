import DeveloperGraphic from '@/public/developer.png';
import Image from 'next/image';
import styles from './landing.module.scss';
import { DarkContext } from '@/app/page';
import { useContext } from 'react';

export default function Landing () {
    const darkMode = useContext(DarkContext);

    return (
        <div className={darkMode.darkMode ? [styles.landingSection, styles.dark].join(' ') : styles.landingSection}>
            <div className={styles.text}>
                <h1>Hi, I'm Alex</h1>
                <h2>I'm a Full Stack Developer & Designer.</h2>
            </div>
            <Image
                alt='Developer by Freepik'
                src={DeveloperGraphic}
                height={256}
            />
        </div>
    );
}

import DeveloperGraphic from '@/public/developer.png';
import Image from 'next/image';
import styles from './landing.module.scss';
import { DarkContext } from '@/app/page';
import { useContext } from 'react';

export default function Landing () {
    const darkMode = useContext(DarkContext);

    return (
        <div id='about' className={darkMode.darkMode ? [styles.landing, styles.dark].join(' ') : styles.landing}>
            <div className={styles.intro}>
                <div className={styles.text}>
                    <h1>Hi, I&apos;m Alex</h1>
                    <h2>I&apos;m a Full Stack Developer & Designer.</h2>
                </div>
                <Image
                    alt='Developer by Freepik'
                    src={DeveloperGraphic}
                    height={256}
                />
            </div>
            <p className={styles.about}>
                I have been coding since 2021 and specialize in the field of web development, both in front-end and back-end. I am experienced in building accessible and visually appealing user interfaces, and always focus on creating responsive designs, delivering an exceptional user experience.
            </p>
        </div>
    );
}

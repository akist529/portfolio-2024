import DeveloperGraphic from '@/public/developer.png';
import Image from 'next/image';
import styles from './landing.module.scss';

export default function Landing () {
    return (
        <div className={styles.landingSection}>
            <div className={styles.text}>
                <h1>Hi, I'm Alex</h1>
                <h2>I'm a Full Stack Developer</h2>
            </div>
            <Image
                alt='Developer by Freepik'
                src={DeveloperGraphic}
                style={{ filter: 'invert(1)' }}
                height={256}
            />
        </div>
    );
}

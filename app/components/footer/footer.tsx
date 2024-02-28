import Next from '@/public/next.svg';
import Image from 'next/image';
import styles from './footer.module.scss';
import { useMemo, useContext } from 'react';
import { DarkContext } from '@/app/context';

export default function Footer () {
    const year = useMemo(() => {
        return new Date().getFullYear();
    }, []);

    const darkMode = useContext(DarkContext);

    return (
        <footer className={darkMode[0] ? [styles.footer, styles.dark].join(' ') : styles.footer}>
            <span>Built with 
                <a href='https://nextjs.org/' target='_blank'>
                    <Image alt='Next.js' src={Next} width='64' height='16' />
                </a>
            </span>
            <span>AlexKist.com © { year }</span>
        </footer>
    );
}

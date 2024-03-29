import styles from './navbar.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { useContext, useMemo } from 'react';
import ModeButton from '../mode-button/ModeButton';
import { DarkContext } from '@/app/context';

export default function Navbar () {
    const darkMode = useContext(DarkContext);

    const iconColor = useMemo(() => {
        if (darkMode[0]) return 'white';
            else return 'black';
    }, [darkMode]);

    return (
        <div className={darkMode[0] ? [styles.navbar, styles.dark].join(' ') : styles.navbar}>
            <nav>
                <ul>
                    <li>
                        <a href='#about'>About</a>
                        <span className={styles.underline}></span>
                    </li>
                    <li>
                        <a href='#portfolio'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#skills'>Skills</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.buttons}>
                <ul>
                    <li>
                        <a href='https://github.com/akist529' target='_blank'>
                            <FaGithub size={48} color={iconColor} />
                        </a>
                    </li>
                    <li>
                        <a href='https://linkedin.com/in/alexkist' target='_blank'>
                            <FaLinkedin size={48} color={iconColor} />
                        </a>
                    </li>
                    <li>
                        <a href='Alex_Kist_Resume.pdf' target='_blank'>
                            <IoIosPaper size={48} color={iconColor} />
                        </a>
                    </li>
                </ul>
                <ModeButton />
            </div>
        </div>
    )
}
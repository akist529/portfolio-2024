import styles from './navbar.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { MdMenu } from 'react-icons/md';
import { useContext, useMemo } from 'react';
import { DarkContext, WindowContext } from '@/app/page';
import ModeButton from '../mode-button/ModeButton';

export default function Navbar () {
    const darkMode = useContext(DarkContext);
    const window = useContext(WindowContext);

    const iconColor = useMemo(() => {
        if (darkMode.darkMode) return 'white';
            else return 'black';
    }, [darkMode]);

    return (
        <div className={darkMode.darkMode ? [styles.navbar, styles.dark].join(' ') : styles.navbar}>
            <nav>
                <ul>
                    <li>
                        <a href='#about'>About</a>
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
                        <a href='https://www.alexkist.com/resume.pdf' target='_blank'>
                            <IoIosPaper size={48} color={iconColor} />
                        </a>
                    </li>
                </ul>
                <ModeButton />
            </div>
        </div>
    )
}
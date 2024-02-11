import styles from './navbar.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { MdModeNight, MdLightMode } from 'react-icons/md';
import { useContext, useCallback, useMemo } from 'react';
import { DarkContext } from '@/app/page';

export default function Navbar () {
    const darkMode = useContext(DarkContext);

    const toggleDarkMode = useCallback(() => {
        darkMode.setDarkMode(prevState => !prevState);
    }, [darkMode]);

    const iconColor = useMemo(() => {
        if (darkMode.darkMode) return 'white';
            else return 'black';
    }, [darkMode]);

    return (
        <div className={darkMode.darkMode ? [styles.navbar, styles.dark].join(' ') : styles.navbar}>
            <ul>
                <li>
                    <a href='https://github.com/akist529' target='_blank'>
                        <FaGithub size={64} color={iconColor} />
                    </a>
                </li>
                <li>
                    <a href='https://linkedin.com/in/alexkist' target='_blank'>
                        <FaLinkedin size={64} color={iconColor} />
                    </a>
                </li>
                <li>
                    <a href='https://www.alexkist.com/resume.pdf' target='_blank'>
                        <IoIosPaper size={64} color={iconColor} />
                    </a>
                </li>
            </ul>
            { !darkMode.darkMode && 
            <button onClick={toggleDarkMode}>
                <MdModeNight size={64} color={iconColor} />
            </button> 
            }
            { darkMode.darkMode && 
            <button onClick={toggleDarkMode}>
                <MdLightMode size={64} color={iconColor} />
            </button> 
            }
            <nav>
                <ul>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Portfolio</a>
                    </li>
                    <li>
                        <a>Skills</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
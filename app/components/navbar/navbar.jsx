import styles from './navbar.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { MdModeNight, MdLightMode } from 'react-icons/md';
import { useContext, useCallback } from 'react';
import { DarkContext } from '@/app/page';

export default function Navbar () {
    const darkMode = useContext(DarkContext);

    const toggleDarkMode = useCallback(() => {
        darkMode.setDarkMode(prevState => !prevState);
    }, [darkMode]);

    return (
        <div className={styles.navbar}>
            <ul>
                <li>
                    <a>
                        <FaGithub size={64} />
                    </a>
                </li>
                <li>
                    <a>
                        <FaLinkedin size={64} />
                    </a>
                </li>
                <li>
                    <a>
                        <IoIosPaper size={64} />
                    </a>
                </li>
            </ul>
            { darkMode.darkMode && 
            <button onClick={toggleDarkMode}>
                <MdModeNight size={64} />
            </button> 
            }
            { !darkMode.darkMode && 
            <button onClick={toggleDarkMode}>
                <MdLightMode size={64} />
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
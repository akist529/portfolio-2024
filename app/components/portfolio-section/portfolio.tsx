import styles from './portfolio.module.scss';
import Project from '../project/project';
import ERGLight from '@/public/erg-light.webp';
import ERGDark from '@/public/erg-dark.webp';
import LSLight from '@/public/ls-light.webp';
import LSDark from '@/public/ls-dark.webp';
import MDLight from '@/public/md-light.webp';
import MDDark from '@/public/md-dark.webp';
import _312Light from '@/public/312-light.webp';
import _312Dark from '@/public/312-dark.webp';
import { useContext } from 'react';
import { DarkContext } from '@/app/context';

export default function Portfolio () {
    const darkMode = useContext(DarkContext);

    return (
        <div id='portfolio' className={styles.portfolio}>
            <h1>Portfolio</h1>
            <div className={styles.projects}>
                <Project
                    title='Education Royale Gaming'
                    link='https://educationroyalegaming.com'
                    github='https://github.com/akist529/education-royale-gaming'
                    preview={darkMode[0] ? ERGDark : ERGLight}
                    text='Worked closely with a business leader to develop a modern website for an educational gaming program.'
                    stack={['TypeScript', 'React/Next.js', 'Chakra UI']}
                />
                <Project
                    title='MakeDrink'
                    link='https://makedr.ink'
                    github='https://github.com/akist529/cocktail-mixer'
                    preview={darkMode[0] ? MDDark : MDLight}
                    text='Created a cocktail building application allowing users to search a list of available recipes based on ingredients they have on-hand.'
                    stack={['TypeScript', 'SASS', 'React/Next.js', 'Redux', 'Golang', 'SQLite', 'Apache']}
                />
                <Project
                    title='LiftShark'
                    link='https://liftshark.org'
                    github='https://github.com/akist529/gym-tracker'
                    preview={darkMode[0] ? LSDark : LSLight}
                    text='Built a fitness application for weightlifting enthusiasts to track their progress and reach their goals.'
                    stack={['TypeScript', 'Vue', 'Pinia', 'Vue Query', 'Vuetify', 'Node.js', 'Express', 'MySQL']}
                />
                <Project
                    title='312 Coders'
                    link='https://312coders.com'
                    github='https://github.com/312coders/312coders'
                    preview={darkMode[0] ? _312Dark : _312Light}
                    text='Developed a responsive UI for a startup coding community in the Chicago area.'
                    stack={['React', 'Tailwind CSS', 'Python', 'Django', 'Docker', 'Nginx']}
                />
            </div>
        </div>
    );
}

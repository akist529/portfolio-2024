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
import { DarkContext } from '@/app/page';
import { useContext } from 'react';

export default function Portfolio () {
    const darkMode = useContext(DarkContext);

    return (
        <div className={styles.portfolio}>
            <h1>Portfolio</h1>
            <div className={styles.projects}>
                <Project
                    title='Education Royale Gaming'
                    link='https://educationroyalegaming.com'
                    github='https://github.com/akist529/education-royale-gaming'
                    preview={darkMode.darkMode ? ERGDark : ERGLight}
                    text='Worked closely with a business leader to develop a modern UI for an educational gaming program.'
                    stack={['TypeScript', 'Next.js', 'Chakra UI']}
                />
                <Project
                    title='MakeDrink'
                    link='https://makedr.ink'
                    github='https://github.com/akist529/cocktail-mixer'
                    preview={darkMode.darkMode ? MDDark : MDLight}
                    text='Created a cocktail generator for users to search a list of available recipes based in ingredients they have on-hand.'
                    stack={['TypeScript', 'SASS', 'Next.js', 'Redux', 'Golang', 'SQLite', 'Apache']}
                />
                <Project
                    title='LiftShark'
                    link='https://liftshark.org'
                    github='https://github.com/akist529/gym-tracker'
                    preview={darkMode.darkMode ? LSDark : LSLight}
                    text='Built a fitness application for weightlifting enthusiasts to track their progress and reach their goals.'
                    stack={['TypeScript', 'SASS', 'Vue', 'Pinia', 'Vue Query', 'Vuetify', 'Strapi']}
                />
                <Project
                    title='312 Coders'
                    link='https://312coders.com'
                    github='https://github.com/312coders/312coders'
                    preview={darkMode.darkMode ? _312Dark : _312Light}
                    text='Developed a modern UI for a startup coding community in the Chicago area.'
                    stack={['React', 'Tailwind CSS', 'Python', 'Django']}
                />
            </div>
        </div>
    );
}
import { IconType } from "react-icons";
import styles from './skill.module.scss';
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useContext } from "react";
import { DarkContext, WindowContext } from "@/app/context";

interface Props {
    skill: string,
    icon: StaticImageData,
    w: number,
    h: number, 
    invertColor?: boolean
}

export default function Skill (props: Props) {
    const { skill, icon, w, h, invertColor } = props;
    const window = useContext(WindowContext);
    const darkMode = useContext(DarkContext);

    return (
        <li className={darkMode[0] ? [styles.skill, styles.dark].join(' ') : styles.skill}>
            <div className={styles.icon}>
                <Image
                    alt={skill}
                    src={icon}
                    width={w}
                    height={h}
                    style={ (darkMode[0] && invertColor) ? {filter: 'invert(1)'} : {} }
                />
            </div>
            <span>{ skill }</span>
        </li>
    );
}

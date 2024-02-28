import styles from './project.module.scss';
import Image, { StaticImageData } from 'next/image';
import { useContext, useMemo } from 'react';
import { FaGithub } from 'react-icons/fa';
import { DarkContext, WindowContext } from '@/app/context';

export default function Project (props: { title: string, link: string, github: string, preview: StaticImageData, text: string, stack: string[] }) {
    const { title, link, github, preview, text, stack } = props;
    const window = useContext(WindowContext);
    const darkMode = useContext(DarkContext);

    const previewWidth = useMemo(() => {
        if (window[0] >= 860) {
            return 512;
        } else if (window[0] >= 580) {
            return 512;
        } else if (window[0] >= 420) {
            return 384;
        } else {
            return 256;
        }
    }, [window]);

    const previewHeight = useMemo(() => {
        if (window[0] >= 860) {
            return 432;
        } else if (window[0] >= 580) {
            return 432;
        } else if (window[0] >= 420) {
            return 324;
        } else {
            return 216;
        }
    }, [window]);

    return (
        <div className={darkMode[0] ? [styles.project, styles.dark].join(' ') : styles.project}>
            <div className={styles.header}>
                <a href={link} target='_blank'>
                    <h1>{ title }</h1>
                </a>
                <a href={github} target='_blank'>
                    <FaGithub size={48} />
                </a>
            </div>
            <a href={link} target='_blank'>
                <Image alt={`${title} Preview`} src={preview} width={previewWidth} height={previewHeight} />
            </a>
            <p className={styles.description}>{ text }</p>
            <p className={styles.stack}>{ stack[0] } { stack.slice(1).map((tech: string) => {
                return (
                    ` • ${tech}`
                );
            }) }</p>
        </div>
    );
}

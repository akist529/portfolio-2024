import { MdModeNight, MdLightMode } from 'react-icons/md';
import { useCallback, useContext, useMemo } from 'react';
import { DarkContext } from '@/app/context';

export default function ModeButton () {
    const darkMode = useContext(DarkContext);

    const toggleDarkMode = useCallback(() => {
        darkMode[1](prevState => !prevState);
    }, [darkMode]);

    const iconColor = useMemo(() => {
        if (darkMode[0]) return 'white';
            else return 'black';
    }, [darkMode]);

    return (
        <>
        { darkMode[0] && 
            <button onClick={toggleDarkMode}>
                <MdLightMode size={48} color={iconColor} />
            </button> 
        }
        { !darkMode[0] && 
            <button onClick={toggleDarkMode}>
                <MdModeNight size={48} color={iconColor} />
            </button> 
        }
        </>
    );
}

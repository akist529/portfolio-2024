import { MdModeNight, MdLightMode } from 'react-icons/md';
import { useCallback, useContext, useMemo } from 'react';
import { DarkContext } from '@/app/page';

export default function ModeButton () {
    const darkMode = useContext(DarkContext);

    const toggleDarkMode = useCallback(() => {
        darkMode.setDarkMode(prevState => !prevState);
    }, [darkMode]);

    const iconColor = useMemo(() => {
        if (darkMode.darkMode) return 'white';
            else return 'black';
    }, [darkMode]);

    return (
        <>
        { darkMode.darkMode && 
            <button onClick={toggleDarkMode}>
                <MdLightMode size={48} color={iconColor} />
            </button> 
        }
        { !darkMode.darkMode && 
            <button onClick={toggleDarkMode}>
                <MdModeNight size={48} color={iconColor} />
            </button> 
        }
        </>
    );
}

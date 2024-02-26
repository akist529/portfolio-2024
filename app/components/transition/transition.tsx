import { BiSolidMouse } from "react-icons/bi";
import { MdArrowDownward, MdOutlineSwipeDown } from "react-icons/md";
import styles from './transition.module.scss';
import { WindowContext } from "@/app/page";
import { useContext, useMemo } from "react";

export default function Transition () {
    const window = useContext(WindowContext);

    const isMobile = useMemo(() => {
        if (window.width >= 1120) {
            return false;
        } else {
            return true;
        }
    }, [window]);

    return (
        <div className={styles.transition}>
            { isMobile && <MdOutlineSwipeDown size={64} /> }
            { !isMobile && <>
                <BiSolidMouse size={64} />
                <MdArrowDownward size={64} />
            </> }
        </div>
    );
}
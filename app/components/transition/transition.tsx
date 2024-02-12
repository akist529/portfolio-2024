import { BiSolidMouse } from "react-icons/bi";
import { MdArrowDownward } from "react-icons/md";
import styles from './transition.module.scss';

export default function Transition () {
    return (
        <div className={styles.transition}>
            <BiSolidMouse size={64} />
            <MdArrowDownward size={64} />
        </div>
    );
}
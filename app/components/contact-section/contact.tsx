import { GiCoffeeCup } from "react-icons/gi";
import styles from './contact.module.scss';
import { useContext, useMemo } from "react";
import { WindowContext, DarkContext } from "@/app/context";

export default function Contact () {
    const window = useContext(WindowContext);
    const darkMode = useContext(DarkContext);

    const iconSize = useMemo(() => {
        if (window.width >= 1120) {
            return 112;
        } else {
            return 80;
        }
    }, [window]);

    return (
        <div id='contact' className={darkMode.darkMode ? [styles.contact, styles.dark].join(' ') : styles.contact}>
            <div className={styles.header}>
                <h1>Let&apos;s Chat</h1>
                { window.width >= 720 && <GiCoffeeCup size={iconSize} /> }
            </div>
            <form action='https://api.web3forms.com/submit' method='POST'>
                <fieldset>
                    <input type='hidden' name='access_key' value='57b4e9d3-7e14-4fb1-b780-cef249ae04a6' />
                    <input id='name' className={styles.field} type='text' name='name' placeholder='Name...' required /><br />
                    <input id='email' className={styles.field} type='email' name='email' placeholder='Email...' required /><br />
                    <input id='subject' className={styles.field} type='text' name='subject' placeholder='Subject...' required /><br />
                    <textarea className={styles.field} placeholder='Please Enter Your Message...' required></textarea><br />
                    <div className='h-captcha' data-captcha='true'></div>
                    <input id='submit' className={styles.submit} type='submit' value='Send' /><br />
                </fieldset>
            </form>
        </div>
    );
}

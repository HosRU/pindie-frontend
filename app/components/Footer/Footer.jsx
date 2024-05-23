import Styles from "./Footer.module.css";

export default function Footer(){
    return(
        <footer className={Styles.footer}>
            <a href="./index.html" className={Styles.logo}>
                <span className={Styles.name}>pindie</span>
                <span className={Styles.copy}>, XXI век</span>
            </a>
            <ul className={Styles.list}>
                <li className={Styles.item}>
                <a href="" className={`button ${Styles.link}`}>YT</a>
                </li>
                <li className={Styles.item}>
                <a href="" className={`button ${Styles.link}`}>ВК</a>
                </li>
                <li className={Styles.item}>
                <a href="" className={`button ${Styles.link}`}>TG</a>
                </li>
            </ul>
        </footer>
    )
}
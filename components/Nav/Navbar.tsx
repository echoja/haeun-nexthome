import styles from "./navbar.module.scss"
import { useState } from "react";
import { MENUS } from "../../config"
import NavMenu from "./NavMenu";
import SpiderLogo from "../SpiderLogo";

const Navbar = () => {
    const [isNavOpen, setNavOpened] = useState(false);

    function onToggleNav() {
        setNavOpened(!isNavOpen);
    }

    return(
        <header className={isNavOpen
                            ? `${styles.navContainer} ${styles.open}` 
                            : styles.navContainer}>
            <nav className={styles.siteNav}>
                <SpiderLogo/>
                
                <div className={styles.threeBarNav} onClick={onToggleNav}>
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                </div>
                <div role="navigation" className={styles.navMenuUl}
                    onClick={onToggleNav}
                >
                    {MENUS.map((menu, idx) => (
                       <NavMenu key={idx} menu={menu}/>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
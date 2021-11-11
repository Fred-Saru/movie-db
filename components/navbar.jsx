import { CgMonday } from 'react-icons/cg'
import classNames from 'classnames'

import styles from './navbar.module.css'

const Navbar = ({navigationData, currentRoute, setCurrentRoute}) => {
    return (
        <nav className={styles.navbar}>
            <span className={styles.logo}>
                <CgMonday/>
            </span>
            <ul className={styles.navItems}>
                {navigationData.map((item, index) => (
                    <li className={classNames([
                                        styles.navItem,
                                        currentRoute === item && styles.selectedNavItem])}
                        key={index}
                        onClick={() => setCurrentRoute(item)}>
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar

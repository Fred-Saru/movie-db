import { useCallback } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillBagFill } from 'react-icons/bs'
import classNames from 'classnames'


import styles from './tabbar.module.css'

const Tabbar = ({navigationData, currentRoute, setCurrentRoute}) => {
    const getTabIcon = useCallback((item) => {
        switch (item) {
            case "Home":
                return <AiFillHome/>
            case "Collections":
                return <BsFillBagFill/>
        }
    }, [])

    return (
        <nav className={styles.tabbar}>
            {navigationData.map((item, index) => (
                <span className={classNames([
                                    styles.tabItem,
                                    currentRoute === item && styles.selectedTabItem
                                    ])}
                    key={index}
                    onClick={() => setCurrentRoute(item)}>
                    {getTabIcon(item)}
                </span>
            ))}
        </nav>
    )
}

export default Tabbar

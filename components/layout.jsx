import Head from 'next/head'
import Link from 'next/link'

import useNavigation from "../hooks/useNavigation"
import Navbar from "../components/navbar"
import Tabbar from "../components/tabbar"

import navigationData from "../data/navigation"

import styles from './layout.module.css'

export const siteTitle = 'Movie Database' 

const Layout = ({ children, home }) => {
    
    const {currentRoute, setCurrentRoute} = useNavigation()

    return (
        <div className={styles.container}>
            <Head>
                <link rel="favicon" href="/favicon.ico" />
                <meta 
                    name="description" 
                    content="Create your own movie collection"/>
                <meta 
                    name="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header>
                <Navbar 
                    navigationData={navigationData}
                    currentRoute={currentRoute}
                    setCurrentRoute={setCurrentRoute}
                />
                <Tabbar
                    navigationData={navigationData}
                    currentRoute={currentRoute}
                    setCurrentRoute={setCurrentRoute}
                />                
            </header>

            <main className={styles.content}>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Layout

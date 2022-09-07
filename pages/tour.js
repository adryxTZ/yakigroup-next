import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Yaki Group - Karibu</title>
                <meta name="description" content="Yaki group site"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Navbar/>

        </div>
    )
}

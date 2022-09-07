import Head from 'next/head'
import Hero  from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'
import Hire from '../components/Hire'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Tours from '../components/Tours'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yaki Group - Karibu</title>
        <meta name="description" content="Yaki group site" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Banner/>
      <Hero/>
      <Services/>
      <Tours/>
      <Hire/>
      <Contact/>
      <Footer/>
    </div>
  )
}

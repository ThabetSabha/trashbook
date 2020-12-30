import Head from 'next/head'
import { Html } from 'next/document';
import { useEffect, useState } from 'react';
import Features from '../components/features.component';
import Footer from '../components/footer.component';
import Header from '../components/header.component';
import Landing from '../components/landing.component';
import Order from '../components/order.component';


export default function Home() {

  const [theme, setTheme] = useState('');

  useEffect(() => {
    let cachedTheme = localStorage.getItem("theme");
    if (!cachedTheme) {
      setTheme('dark');
    }
    else {
      setTheme(cachedTheme);
    }
  }, [])


  const changeTheme = () => {
    let newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <div className={`main-container ${theme}`}>
      <Head>
        <title>Garbage Reimagined</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <meta name="description" content="landing page for a fake product" />
      </Head>

      <Header theme={theme} changeTheme={changeTheme} />
      <Landing theme={theme} />
      <Features theme={theme} />
      <Order theme={theme} />
      <Footer theme={theme} />
    </div>
  )
}

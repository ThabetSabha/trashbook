import Head from 'next/head'
import { useEffect, useState } from 'react';
import Features from '../components/features.component';
import Footer from '../components/footer.component';
import Header from '../components/header.component';
import Landing from '../components/landing.component';
import Order from '../components/order.component';


export default function Home() {

  const [theme, setTheme] = useState('');


  //Gets the cached theme from localStorage;
  useEffect(() => {
    let cachedTheme = localStorage.getItem("theme");
    if (!cachedTheme) {

      //Gets user prefrence
      const userPrefersLight = globalThis.matchMedia && globalThis.matchMedia('(prefers-color-scheme: light)').matches;
      if(userPrefersLight){
        setTheme("light");
      } else {
        setTheme("dark")
      }

    }
    else {
      setTheme(cachedTheme);
    }
  }, [])



  //Changes the theme and caches it to localStorage;
  const changeTheme = () => {
    let newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }



  return (
    <div className={`main-container ${theme}`}>
      <Head>
        <title>TrashBook</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <meta name="description" content="landing page for a fake product" />
      </Head>

      <Header changeTheme={changeTheme} />
      <Landing />
      <Features />
      <Order />
      <Footer theme={theme} />


    </div>
  )
}

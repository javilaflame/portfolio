import './App.css'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'


function App() {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  // const [lang, setLang] = useState('en');
  const [langChange, setLangChange] = useState(false);
  return (
    <>
      <button onClick={() => {
        setLangChange(!langChange);
        handleChangeLanguage(langChange ? "en" : "es");
      }} className='langBtn'>{langChange ? "EN" : "ES"}</button>
     <Hero></Hero>
     <Projects></Projects>
     <Skills></Skills>
     <Contact></Contact>
     <Footer></Footer>
    </>
  )
}

export default App

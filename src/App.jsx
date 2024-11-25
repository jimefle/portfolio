import Aboutme from './components/aboutme'
import Education from './components/education'
import Proyects from './components/proyects'
import Hero from './components/hero'
import { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme',theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }


  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      </head>
      <body>
        <header>
          <a href="#proyects" className='header-button'>Proyectos y cursos</a>
          <a href="#education" className='header-button'>Educación</a>
          <a href="#aboutme" className='header-button'>Sobre mí</a>
          <a href="#contacto" className='header-button'>Contacto</a>
          <div className="toggle-btn" id="a-toggle-btn">
            <input type="checkbox" checked={theme === 'dark'}onChange={toggleTheme}/>
            <span></span>
          </div>
        </header>
        <main>
          <Hero></Hero>
          <Proyects></Proyects>
          <Education theme={theme}></Education>
          <Aboutme></Aboutme>
        </main>
      </body>
      </html>
  )
}

export default App

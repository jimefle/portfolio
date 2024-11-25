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
    <html className='scroll-smooth'>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      </head>
      <body className='bg-zinc-900 text-white text-lg p-20 relative place-items-center'>
        <header className='fixed flex items-center bg-transparent rounded-3xl p-1 backdrop-blur-sm'>
          <a href="#proyects" className='rounded-lg border border-transparent px-4 py-2 text-lg font-medium bg-transparent cursor-pointer hover:text-violet-400 transition-colors'>Proyectos y cursos</a>
          <a href="#education" className='rounded-lg border border-transparent px-4 py-2 text-lg font-medium bg-transparent cursor-pointer hover:text-violet-400 transition-colors'>Educación</a>
          <a href="#aboutme" className='rounded-lg border border-transparent px-4 py-2 text-lg font-medium bg-transparent cursor-pointer hover:text-violet-400 transition-colors'>Sobre mí</a>
          <a href="#contacto" className='rounded-lg border border-transparent px-4 py-2 text-lg font-medium bg-transparent cursor-pointer hover:text-violet-400 transition-colors'>Contacto</a>
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

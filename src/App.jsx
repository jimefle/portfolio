import Aboutme from './components/aboutme'
import Education from './components/education'
import Proyects from './components/proyects'
import Hero from './components/hero'
import { useEffect, useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Alterna el modo oscuro y guarda la preferencia en el almacenamiento local
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  // Inicializa el tema desde el almacenamiento local
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const isDark = savedTheme === 'dark';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  return (
    <html className='scroll-smooth'>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      </head>
      <body className='bg-zinc-900 dark:bg-white dark:text-black text-white text-lg pt-0 relative place-items-center'>
      <header className="fixed mt-0 flex items-center justify-end space-x-4 bg-inherit px-3 py-2 overflow-x-auto whitespace-nowrap w-full z-50">
        {/*  <a href="#proyects" className="rounded-lg border border-transparent p-1 text-sm font-medium bg-transparent cursor-pointer hover:text-violet-200 transition-colors">
            Proyectos y cursos
          </a>
          <a href="#education" className="rounded-lg border border-transparent p-1 text-sm font-medium bg-transparent cursor-pointer hover:text-violet-200 transition-colors">
            Educación
          </a>
          <a href="#aboutme" className="rounded-lg border border-transparent p-1 text-sm font-medium bg-transparent cursor-pointer hover:text-violet-200 transition-colors">
            Sobre mí
          </a> */}
          <a href="mailto:flechaajimena@gmail.com" className="rounded-lg border border-transparent p-1 text-sm font-medium bg-transparent cursor-pointer hover:text-violet-200 transition-colors">
            Contacto
          </a>
          <div className="toggle-btn">
            <button 
              onClick={toggleDarkMode} 
              className="relative w-14 h-6 mt-1 bg-gray-300 dark:bg-zinc-500 rounded-full shadow-inner focus:outline-none transition-colors ">
              <span className={`absolute left-1 top-1 w-6 h-4 bg-white rounded-full shadow-md transform transition-transform 
                ${darkMode ? 'translate-x-6' : ''}`}></span>
            </button>
          </div>
        </header>
        <main className='p-20 pt-10 sm:px-8 md:px-16 lg:px-48 xl:px-96'>
          <Hero></Hero>
          <Proyects></Proyects>
          <Education></Education>
          <Aboutme></Aboutme>
        </main>
      </body>
      </html>
  )
}

export default App

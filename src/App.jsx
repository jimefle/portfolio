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
      <body className='bg-zinc-900 dark:bg-white dark:text-black text-white text-lg p-20 relative place-items-center'>
      <header className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-8 flex items-center justify-center space-x-4 bg-violet-950 dark:bg-violet-200 rounded-3xl px-3 py-2 z-50 overflow-x-auto whitespace-nowrap">
          <a href="#proyects" className="rounded-lg border border-transparent px-1 py-2 text-sm md:text-lg font-medium bg-transparent cursor-pointer hover:text-violet-400 transition-colors">
            Proyectos y cursos
          </a>
          <a href="#education" className="rounded-lg border border-transparent px-1 py-2 text-sm md:text-lg font-medium bg-transparent cursor-pointer hover:text-violet-400 transition-colors">
            Educación
          </a>
          <a href="#aboutme" className="rounded-lg border border-transparent px-1 py-2 text-sm md:text-lg font-medium bg-transparent cursor-pointer hover:text-violet-400 transition-colors">
            Sobre mí
          </a>
          <a href="mailto:flechaajimena@gmail.com" className="rounded-lg border border-transparent px-1 py-2 text-sm md:text-lg font-medium bg-transparent cursor-pointer hover:text-violet-400 transition-colors">
            Contacto
          </a>
          <div className="toggle-btn">
            <button 
              onClick={toggleDarkMode} 
              className="relative w-14 h-8 bg-gray-300 dark:bg-zinc-500 rounded-full shadow-inner focus:outline-none transition-colors ">
              <span className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform 
                ${darkMode ? 'translate-x-6' : ''}`}></span>
            </button>
          </div>
        </header>
        <main className='px-0 sm:px-8 md:px-16 lg:px-40 xl:px-50'>
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

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
      <header className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-8 flex items-center justify-center space-x-1 bg-violet-950 dark:bg-violet-200 rounded-3xl p-1">
        <a href="#proyects" className="rounded-lg border border-transparent px-2 py-2 text-lg font-medium bg-transparent cursor-pointer hover:text-violet-400 transition-colors">Proyectos y cursos</a>
        <a href="#education" className="rounded-lg border border-transparent px-2 py-2 text-lg font-medium bg-transparent cursor-pointer hover:text-violet-400 transition-colors">Educación</a>
        <a href="#aboutme" className="rounded-lg border border-transparent px-2 py-2 text-lg font-medium bg-transparent cursor-pointer hover:text-violet-400 transition-colors">Sobre mí</a>
        <a href="#contacto" className="rounded-lg border border-transparent px-2 py-2 text-lg font-medium bg-transparent cursor-pointer hover:text-violet-400 transition-colors">Contacto</a>
        <div className="toggle-btn" id="a-toggle-btn">
          <button onClick={toggleDarkMode}
            className="p-2 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-gray-300 rounded-3xl">
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </header>
        <main className='px-4 sm:px-8 md:px-16 lg:px-40 xl:px-80'>
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

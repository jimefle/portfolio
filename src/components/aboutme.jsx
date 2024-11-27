function Aboutme() {
    return(
        <section className="mt-20 py-6 pb-40">
            <div className="flex items-center pb-6">
              <i className="fa-solid fa-star"></i>
              <h2 className="px-2 text-2xl font-bold" id='aboutme'>Sobre mí</h2>
            </div>
            <article className="flex flex-col">
              <div>
                <p className="pt-3">Estoy en constante búsqueda de desafíos y oportunidades para seguir creciendo, con especial 
                  interés en el desarrollo frontend, donde distrufo crear interfaces atractivas, funcionales y responsive siempre teniendo en cuenta la
                   experiencia de usuario, el diseño de sistemas y la integración de tecnologías emergentes. Además, me apasiona
                   el aprendizaje continuo; siempre estoy explorando nuevas herramientas, frameworks y tendencias para expandir mis conocimientos
                    y aplicar soluciones innovadoras. </p>
                  <p className="pt-3">Como estudiante de Ingeniería en Sistemas de Información, participo activamente en programas de Investigación
                     y Desarrollo (I+D), donde he tenido la oportunidad de explorar temas que van desde la ciberseguridad hasta la innovación educativa.
                      Estas experiencias me han llevado a participar en congresos nacionales y competencias, enriqueciendo mi perspectiva profesional y
                       mi compromiso con la tecnología. </p>
                  <p className="pt-3 pb-8">Si queres saber más sobre mis proyectos y logros, te invito a visitar mi LinkedIn!</p>
              </div>
            </article>
            <a 
                href='https://www.linkedin.com/in/jimena-flecha-alfaro-58b159289' target="_blank" 
                className='hover:text-violet-400 text-4xl'>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            <a 
                href='https://github.com/jimefle' target="_blank" 
                className='hover:text-violet-400 text-4xl mx-3'>
                <i className="fa-brands fa-github"></i>
              </a>
          </section>
    )
}

export default Aboutme
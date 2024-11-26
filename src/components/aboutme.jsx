function Aboutme() {
    return(
        <section className="mt-20 py-6 pb-40">
            <div className="flex items-center pb-6">
              <i className="fa-solid fa-star"></i>
              <h2 className="px-2 text-2xl font-bold" id='aboutme'>Sobre mí</h2>
            </div>
            <article className="flex flex-col">
              <div>
                <p className="pt-3">Siempre estoy buscando oportunidades para aprender cosas nuevas y mantenerme al tanto de las 
                  últimas tendencias de la industria. Paralelamente a mis estudios, estoy activamente involucrada en programas 
                  de I+D. </p>
                  <p className="pt-3">Por un lado, estoy trabajando con un equipo para desarrollar simulaciones virtuales que apoyen los 
                    laboratorios de Química, colaborando con el personal académico para diseñar simulaciones que mejoren la 
                    experiencia de aprendizaje de los estudiantes en los cursos de Química General. </p>
                  <p className="pt-3">Por otro lado, estoy realizando investigaciones en Ciberseguridad, enfocándome en estudiar diversas amenazas
                    de seguridad y técnicas de mitigación. Como parte de este proyecto, he completado cursos de ciberseguridad de 
                    Fortinet para fortalecer aún más mis conocimientos y habilidades en este campo en rápida evolución. </p>
                  <p className="py-3">Estas experiencias me permiten aplicar mis conocimientos técnicos mientras contribuyo a la innovación
                    educativa y a la investigación en ciberseguridad.</p>
              </div>
            </article>
            <a 
                href='https://www.linkedin.com/in/jimena-flecha-alfaro-58b159289' target="_blank" 
                className='hover:text-violet-400 text-4xl'>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            <a 
                href='https://www.linkedin.com/in/jimena-flecha-alfaro-58b159289' target="_blank" 
                className='hover:text-violet-400 text-4xl mx-3'>
                <i className="fa-brands fa-github"></i>
              </a>
          </section>
    )
}

export default Aboutme
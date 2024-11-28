import Card from './card'
function Proyects(){
    return(
        <section className="mt-10 py-6">
            <div className="flex items-center">
              <i className="fa-solid fa-code"></i>
              <h2 className="px-2 text-2xl font-bold" id='proyects'>Proyectos</h2>
            </div>
            <div className="flex flex-col 2xl:grid 2xl:grid-cols-2 pt-8">
              <Card 
                title="Página web - Alphascope" 
                images={["/image/alpha-1.png","/image/alpha-2.png"]} 
                description="Desarrollo de la página web para la empresa Alphascope."
                technologies={["React", "CSS","Vite"]}
                projectUrl="https://alphascope.com.ar/"
              />
              <Card 
                title="Simulaciones virtuales" 
                images={["/image/simu-1.png","/image/simu-2.png"]} 
                description="Desarrollo de simulaciones para práctica de laboratorios de Química." 
                technologies={["JavaScript"]}
              />
              
            </div>
          </section>
    )
}

export default Proyects
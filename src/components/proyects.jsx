import Card from './card'
function Proyects(){
    return(
        <section className="mt-20 py-6">
            <div className="flex items-center">
              <i className="fa-solid fa-code"></i>
              <h2 className="px-2 text-2xl font-bold" id='proyects'>Proyectos y cursos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              <Card title="Página web Alphascope" img_path="/image/alpha.png" description="Desarrollo de la web para la empresa Alphascope, usando React"></Card>
              <Card 
                title="Rally de Innovación" 
                img_path="/image/rally.jpg" 
                description="Participación en el Rally Latinoamericano de Innovación, con una solución basada en IoT para estacionamientos inteligentes." 
              />
              <Card 
                title="Curso React Native - Folder IT" 
                img_path="/image/folder.jpg" 
                description="Curso de React Native impartido por Folder IT, enfocado en desarrollo móvil." 
              />
              <Card 
                title="Curso ciberseguridad - FORTINET" 
                img_path="/image/fortinet.jpg" 
                description="Capacitación en ciberseguridad con enfoque teórico de Fortinet." 
              />
            </div>
          </section>
    )
}

export default Proyects
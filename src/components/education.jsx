/* eslint-disable react/prop-types */
function Education({theme}){
    return(
        <section className="mt-20 py-6">
            <div className="flex items-center">
              <i className="fa-solid fa-book"></i>
              <h2 className="px-2 text-2xl font-bold">Educación</h2>
            </div>
            <h3 className="pt-8 text-xl font-semibold">Ingeniería en Sistemas de Información | 2020</h3>
            <h4 className="pl-5"> Universidad Tecnológica Nacional - Facultad Regional Santa Fe</h4>
            <h3 className="pt-8 text-xl font-semibold"> Educación Secundaria | 2014 - 2019</h3>
            <h4 className="pl-5"> Colegio Plaza Mayor</h4>
            <h4 className="pl-5"> Bachillerato en economía y administración</h4>
            <h3 className="pt-8 text-xl font-semibold">Idiomas</h3>
            <ul>
              <li className="pl-5"> Inglés | Cambridge First Certificate (B2)</li>
              <li className="pl-5"> Italiano | ADA (B1)</li>
            </ul>
            <h3 className="pt-8 text-xl font-semibold">Habilidades</h3>
            <div className="flex flex-wrap justify-around items-center py-5">
              <img className="h-12" src="./src/image/js.png" alt="JS"/>
              <img className="h-12" src="./src/image/science.png" alt="React"/>
              <img className="h-12" src="./src/image/html-5.png" alt="HTML"/>
              <img className="h-12" src="./src/image/css3.png" alt="CSS"/>
              <ImageChange theme={theme} />
              <img className="h-12" src="./src/image/sql.png" alt="SQL"/>
              <img className="h-12" src="./src/image/python.png" alt="Python"/>
            </div>
          </section>
    )
}

function ImageChange ({theme}){
  const imageSrc = theme === 'dark' ? './src/image/github.png' : './src/image/github-light.png'

  return <img className="h-12" src={imageSrc} alt="GitHub" />
}

export default Education
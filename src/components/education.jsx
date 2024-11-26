/* eslint-disable react/prop-types */
function Education({theme}){
    return(
        <section className="mt-20 py-6">
            <div className="flex items-center">
              <i className="fa-solid fa-book"></i>
              <h2 className="px-2 text-2xl font-bold" id='education'>Educación</h2>
            </div>
            <h3 className="pt-8 text-xl font-semibold">Ingeniería en Sistemas de Información | 2020</h3>
            <h4 className="pl-5"> Universidad Tecnológica Nacional - Facultad Regional Santa Fe</h4>
            <h3 className="pt-8 text-xl font-semibold"> Educación Secundaria | 2014 - 2019</h3>
            <h4 className="pl-5"> Colegio Plaza Mayor</h4>
            <h4 className="pl-5"> Bachillerato en economía y administración</h4>
            <h3 className="pt-8 text-xl font-semibold">Idiomas</h3>
            <ul>
              <li className="pl-5"> Español (Nativo)</li>
              <li className="pl-5"> Inglés | Cambridge First Certificate (B2)</li>
              <li className="pl-5"> Italiano | ADA (B1)</li>
            </ul>
            <h3 className="pt-8 text-xl font-semibold">Habilidades</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 py-5 place-items-center">
              <img className="h-16" src="image/js.png" alt="JavaScript" title="JavaScript" />
              <img className="h-16" src="image/science.png" alt="React" title="React" />
              <img className="h-16" src="image/html-5.png" alt="HTML" title="HTML" />
              <img className="h-16" src="image/css3.png" alt="CSS" title="CSS" />
              <img className="h-16" src="image/tailwind-css.png" alt="Tailwind CSS" title="Tailwind CSS" />
              <img className="h-16" src="image/github.png" alt="GitHub" title="GitHub" />
              <img className="h-16" src="image/sql.png" alt="SQL" title="SQL" />
              <img className="h-16" src="image/python.png" alt="Python" title="Python" />
              <img className="h-16" src="image/elasticsearch.png" alt="Elasticsearch" title="Elasticsearch" />
              <img className="h-16" src="image/mongo-db.png" alt="MongoDB" title="MongoDB" />
              <img className="h-16" src="image/nmap.png" alt="Nmap" title="Nmap" />
              <img className="h-16" src="image/burp-suite.png" alt="Burp Suite" title="Burp Suite" />
              <img className="h-16" src="image/node-js.png" alt="Node.js" title="Node.js" />
            </div>
          </section>
    )
}
/*
function ImageChange ({theme}){
  const imageSrc = theme === 'dark' ? '' : './src/image/github-light.png'

  return 
}
*/


export default Education
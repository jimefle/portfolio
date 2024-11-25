/* eslint-disable react/prop-types */
function Education({theme}){
    return(
        <section>
            <div className='section-icon'>
              <i className="fa-solid fa-book"></i>
              <h2 id='education'>Educación</h2>
            </div>
            <h3>Ingeniería en Sistemas de Información | 2020</h3>
            <h4> Universidad Tecnológica Nacional - Facultad Regional Santa Fe</h4>
            <h3> Educación Secundaria | 2014 - 2019</h3>
            <h4> Colegio Plaza Mayor</h4>
            <h4> Bachillerato en economía y administración</h4>
            <h3>Idiomas</h3>
            <ul>
              <li> Inglés | Cambridge First Certificate (B2)</li>
              <li> Italiano | ADA (B1)</li>
            </ul>
            <h3>Habilidades</h3>
            <div className="skills">
              <img src="./src/image/js.png" alt="JS"/>
              <img src="./src/image/science.png" alt="React"/>
              <img src="./src/image/html-5.png" alt="HTML"/>
              <img src="./src/image/css3.png" alt="CSS"/>
              <ImageChange theme={theme} />
              <img src="./src/image/sql.png" alt="SQL"/>
              <img src="./src/image/python.png" alt="Python"/>
            </div>
          </section>
    )
}

function ImageChange ({theme}){
  const imageSrc = theme === 'dark' ? './src/image/github.png' : './src/image/github-light.png'

  return <img src={imageSrc} alt="Descripción" />
}

export default Education
function Hero(){
    return(
        <section className="text-center p-10">
            <h1 className="text-4xl font-bold text-blue-600">Hola! Soy Jimena</h1>
            <p className="text-gray-500">Soy estudiante de 5to año de <strong>Ingeniería en Sistemas de Información</strong>. Mi objetivo es seguir 
                aprendiendo y creciendo profesionalmente, por lo que estoy abierta a
                nuevos desafíos que me permitan aplicar mis conocimientos teóricos y prácticos y ampliar mis
                habilidades tanto técnicas como interpersonales.</p>
            <div className="buttons">
              <a href='mailto:flechaajimena@gmail.com' className='contact-button'>Contactame</a>
              <a className='contact-button'>Linkedin</a>
            </div>
          </section>
    )
}

export default Hero
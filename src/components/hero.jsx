function Hero(){
    return(
        <section className="mt-20 py-6">
            <h1 className="text-5xl font-bold ">Hola! Soy Jimena</h1>
            <p className="py-6">Soy estudiante de 5to año de <strong>Ingeniería en Sistemas de Información</strong>. Mi objetivo es seguir 
                aprendiendo y creciendo profesionalmente, por lo que estoy abierta a
                nuevos desafíos que me permitan aplicar mis conocimientos teóricos y prácticos y ampliar mis
                habilidades tanto técnicas como interpersonales.</p>
            <div className="cursor-pointer">
              <a href='mailto:flechaajimena@gmail.com' className='m-2 px-4 py-2 text-m text-violet-400 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-violet-500 hover:border-transparent duration-700 ease-in-out'>
                Contactame</a>
              <a href='https://www.linkedin.com/in/jimena-flecha-alfaro-58b159289' target="_blank" className='m-2 px-4 py-2 text-m text-violet-400 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-violet-500 hover:border-transparent duration-700 ease-in-out'>
                Linkedin</a>
            </div>
          </section>
    )
}

export default Hero
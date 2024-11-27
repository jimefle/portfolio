import { useState } from "react";

function Hero(){
  const mail = "flechaajimena@gmail.com";
  const [notif, setNotification] = useState("")

  const copyToClipboard = (mail) => {
    navigator.clipboard.writeText(mail)
      .then(() => {
        setNotification('Mail copiado :)');
        setTimeout(() => setNotification(""), 3000);
      })
      .catch(() => {
        setNotification('Error al copiar el mail :(');
        setTimeout(() => setNotification(""), 3000);
      });
  };
    return(
        <section className="mt-20 py-6">
            <h1 className="text-4xl font-bold opacity-50">Hola!</h1>
            <h1 className="text-5xl font-bold pt-1">Soy Jimena Flecha</h1>
            <p className="text-xl pt-6"><strong>Futura Ingeniera en Sistemas de Información</strong></p>
            <p className="py-2"> Mi objetivo es seguir aprendiendo y creciendo profesionalmente, por lo que estoy abierta a
                nuevos desafíos que me permitan aplicar mis conocimientos teóricos y prácticos y ampliar mis
                habilidades.</p>
            <div class="flex items-center space-x-4 py-4">
              <input 
                type="text" 
                value={mail} 
                readonly 
                class="w-full px-3 py-2 border dark:border-black rounded-lg bg-transparent text-white dark:text-black focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <a 
                href={`mailto:${mail}`}
                class="px-4 py-2 bg-violet-500 text-white rounded-lg shadow hover:bg-violet-900 transition">
                <i className="fa-regular fa-paper-plane"></i>
                </a>
              <button 
                onClick={() => copyToClipboard(mail)}
                class="px-4 py-2 bg-violet-500 text-white rounded-lg shadow hover:bg-violet-900 transition">
                <i className="fa-regular fa-copy"></i>
              </button>
              {notif && (
                <div className="absolute top-50 left-1/2 transform -translate-x-1/2 mt-6 px-4 py-2 bg-gray-500 text-white text-sm rounded-lg shadow-lg transition-opacity duration-500 ease-in-out">
                  {notif}
                </div>
              )}
            </div>
            <div className="cursor-pointer flex items-start justify-start py-3">
            <a 
              href="/ruta-a-tu-cv.pdf" download="CV_Jimena.pdf" 
              className="mr-2 px-4 py-2 text-m text-violet-400 dark:text-violet-500 font-semibold rounded-full border border-purple-200 dark:border-violet-500 hover:text-white dark:hover:text-white hover:bg-violet-500 hover:border-transparent duration-700 ease-in-out">
              Descargar CV</a>
            </div>
          </section>
    )
}

export default Hero
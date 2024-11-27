import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Card ({ title, images, description, technologies=[], projectUrl}) {
  return(
    <div className="h-auto bg-zinc-800 dark:bg-violet-100 m-3 shadow-[0_2px_10px_rgba(255,255,255,0.2)] rounded-lg overflow-hidden transform transition-all duration-300">
      <h3 className="text-2xl font-bold text-gray-100 dark:text-gray-900 p-4">
        {title}
      </h3>

       {technologies.length > 0 && (
          <ul className="text-sm pb-3 text-gray-300 dark:text-gray-800 pl-4 flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="bg-gray-700 dark:bg-gray-300 text-gray-100 dark:text-gray-900 px-2 py-1 rounded-lg"
                  >
                  {tech}
                </li>
              ))}
          </ul>
        )}
        
        {images && images.length > 0 ? (
        images.length === 1 ? (
        <img
            src={images[0]}
            alt={`Imagen del proyecto`}
            className="w-full object-cover"
          />          
        ) : (
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            className="rounded-lg transition-all duration-300 filter grayscale hover:grayscale-0"
          >
            {images.map((img, index) => (
              <div key={index} className="relative h-full overflow-hidden ">
                <img
                  src={img}
                  alt={`Imagen ${index + 1} del proyecto`}
                  className="h-full object-cover "
                />
              </div>
            ))}
          </Carousel>
          )
          ) : null}

        <div className="p-4">
          <p className="mt-2 text-gray-300 dark:text-gray-800">
            {description}
          </p>
        </div>

        {
          projectUrl && (
            <div className="hover:font-semibold hover:scale-100 duration-300 ease-in-out ">
              <a href={projectUrl} target="_blank" rel="noopener noreferrer" 
                className="m-4 text-inherit">
                Ver proyecto
                <i className="fa-solid fa-angle-right px-2 "></i>
              </a>
            </div>
           
          )
        }
          
    </div>
    )
}

export default Card
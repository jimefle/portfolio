function Card ({ title, img_path, description }) {
    return(
        <div className="bg-zinc-800 dark:bg-violet-50 shadow-[0_4px_10px_rgba(255,255,255,0.2)] rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
                <img src={img_path} alt="Proyecto 1" className="w-full h-40 object-cover"/>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-100 dark:text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-gray-300 dark:text-gray-800">
                    {description}
                  </p>
                </div>
              </div>
    )
}

export default Card
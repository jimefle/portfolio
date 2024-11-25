function Aboutme() {
    return(
        <section className="mt-20 py-6">
            <div className="flex items-center pb-6">
              <i className="fa-solid fa-star"></i>
              <h2 className="px-2 text-2xl font-bold" id='aboutme'>Sobre mí</h2>
            </div>
            <article className="flex gap-5">
              <img src=".\src\image\photo-profile.jpg" alt="Foto de perfil" className="rounded-full h-48 object-contain w-48" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur risus ac justo faucibus, 
                et porta turpis tempor. Ut at sagittis metus. Nunc congue nunc ut volutpat molestie. Aenean vitae eros 
                sed nisl elementum mattis vel a massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                per inceptos himenaeos. Nulla vitae metus at urna euismod mollis. Nunc pellentesque arcu risus. Interdum et 
                malesuada fames ac ante ipsum primis in faucibus. Cras maximus metus aliquet, venenatis nulla eget, aliquam libero. 
                Vestibulum nec tincidunt dolor. Pellentesque luctus dui eu auctor volutpat.
                .</p>
              
            </article>
          </section>
    )
}

export default Aboutme
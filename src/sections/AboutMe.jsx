export default function AboutMe(){
    return(

        <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-10 bg-white/10 backdrop-blur-md rounded-lg border-white/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Sobre mi:
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 lg:pr-8">
                <p className="text-2xl md:text-3xl lg:text-2xl font-bold text-justify mb-6 md:mb-8 lg:mb-12 text-white">
                  Desarrollador Front-End con experiencia en JavaScript, HTML y CSS, y conocimientos en backend
                  con Java y Spring Boot. He trabajado en proyectos personales aplicando integración de
                  APIs y bases de datos. Me interesa desarrollarme en entornos profesionales donde pueda aplicar
                  mis habilidades tanto en desarrollo front-end como en back-end, contribuyendo al crecimiento
                  de aplicaciones escalables.
                </p>

                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8
                            rounded-lg transition-all duration-500 ease-out hover:shadow-lg
                            hover:scale-105 flex items-center gap-3"
                  onClick={() =>{
                    const link = document.createElement('a');
                    link.href = '/archivos/CVGaliciaPachecoLuisAldahir.pdf';
                    link.download = 'CVGaliciaPachecoLuisAldahir.pdf';
                    link.click();
                  }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Descargar CV
                </button>
              </div> 
              <div className="flex flex-col lg:flex-col items-center gap-6 md:gap-8 lg:gap-12">
                <div className="mb-8">
                  <img 
                    src="../img/perfil.jpg"
                    alt="Mi foto"
                    className="w-100 h-80 rounded-tr-lg rounded-bl-lg  
                              shadow-xl hover:shadow-2xl transition-shadow duration-300"   
                  
                  />
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Alda-0822"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center
                                 hover:bg-blue-700 transition-all duration-300 hover:scale-110 
                                 hover:shadow-lg"
                  >
                    <img src="../img/githublink.png"/>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aldahir-galicia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center
                                 hover:bg-blue-700 transition-all duration-300 hover:scale-110 
                                 hover:shadow-lg"
                  >
                    <img src="../img/linkedin.png"/>
                  </a>

                </div>
              
              </div> 
            </div> 
          </div>  
      </section>

    );
}